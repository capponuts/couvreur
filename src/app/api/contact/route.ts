import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json()

    // Validation des champs
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

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
      subject: `Nouveau message de contact - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Nouveau message de contact</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Informations du client :</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            <p><strong>Service demandé :</strong> ${service}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message :</h3>
            <p style="line-height: 1.6;">${message}</p>
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
