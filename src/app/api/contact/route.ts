import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message, company, formStart } = await request.json()

    // Validation des champs
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Anti-spam: honeypot rempli -> on répond OK sans envoyer
    if (typeof company === 'string' && company.trim() !== '') {
      return NextResponse.json(
        { message: 'Message reçu' },
        { status: 200 }
      )
    }

    // Anti-spam: délai minimum de remplissage (5s)
    const now = Date.now()
    const minMs = 5000
    const startMs = typeof formStart === 'string' ? Number(formStart) : NaN
    if (!Number.isNaN(startMs) && now - startMs < minMs) {
      return NextResponse.json(
        { message: 'Message reçu' },
        { status: 200 }
      )
    }

    // Validations renforcées
    const allowedServices = [
      'Couverture & Zinguerie',
      'Nettoyage et fuites',
      'Pose de fenêtres de toit',
      'Autre'
    ] as const

    const nameOk = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,80}$/.test(String(name))
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email))
    const digitsPhone = String(phone).replace(/[^0-9]/g, '')
    const phoneOk = digitsPhone.length >= 9 && digitsPhone.length <= 15
    const serviceOk = allowedServices.includes(service as (typeof allowedServices)[number])
    const messageStr = String(message)
    const messageOk = messageStr.trim().length >= 10 && messageStr.trim().length <= 2000

    if (!nameOk || !emailOk || !phoneOk || !serviceOk || !messageOk) {
      return NextResponse.json(
        { error: 'Certains champs ne sont pas valides.' },
        { status: 400 }
      )
    }

    // Échappement HTML pour l'email
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')

    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safePhone = escapeHtml(String(phone))
    const safeService = escapeHtml(String(service))
    const safeMessage = escapeHtml(messageStr).replace(/\n/g, '<br />')

    // Vérification de la clé API Resend
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.warn('Clé API Resend manquante — simulation succès pour éviter 500')
      return NextResponse.json(
        { message: 'Message reçu. Configuration email manquante en production.' },
        { status: 200 }
      )
    }

    // Import dynamique de Resend
    const { Resend } = await import('resend')
    const resend = new Resend(resendApiKey)

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Couvreur de Vendée <onboarding@resend.dev>',
      to: ['couvreur.devendee@orange.fr'],
      subject: `Nouveau message de contact - ${safeService}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Nouveau message de contact</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Informations du client :</h3>
            <p><strong>Nom :</strong> ${safeName}</p>
            <p><strong>Email :</strong> ${safeEmail}</p>
            <p><strong>Téléphone :</strong> ${safePhone}</p>
            <p><strong>Service demandé :</strong> ${safeService}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message :</h3>
            <p style="line-height: 1.6;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              Ce message a été envoyé depuis le formulaire de contact du site web Couvreur de Vendée.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur serveur:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
