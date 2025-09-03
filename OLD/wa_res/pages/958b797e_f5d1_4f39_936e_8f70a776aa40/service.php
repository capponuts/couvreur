<?php




header("Content-Type: application/json");
header("Expires: on, 01 Jan 1970 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");




if (version_compare(PHP_VERSION, '5.5.0') < 0) {

    $json_response=[
"success"=>false,
"message"=>"Your version must be at least 5.5  (Current is PHP ".PHP_VERSION.")"
];
echo json_encode($json_response);
exit();
}


$path_php=__DIR__.'/../../static/wa/php/';

include_once($path_php.'/waform.php');


use PHPMailer\PHPMailer\PHPMailer;

$form_uuid = $_POST['form_uuid'];
$wa_lang = $_POST['wa_lang'];





$forms = [[
'conf'=>[
'extend_to'=>[]
,'from'=>'','main_to'=>'','subject'=>''
],'inputs'=>[[
'label'=>'','name'=>'field_6d346ec2_9050_452f_8e53_7a003ad195c5','type_input_text'=>0,'use_email_to_reply'=>0
],[
'label'=>'','name'=>'field_8b11c4af_b0ed_4bd4_8ab8_9a32df3dbb7b','type_input_text'=>0,'use_email_to_reply'=>0
],[
'label'=>'','name'=>'field_152d56f9_ae9f_4acc_89be_4fac0c86b3f3','type_input_text'=>0,'use_email_to_reply'=>0
],[
'label'=>'','name'=>'field_742eec85_8fca_481f_9990_993dc83ad0d8','type_input_text'=>0,'use_email_to_reply'=>0
],[
'label'=>'','name'=>'field_c4f5a3a6_cd71_41ca_b085_8549ff46cce2'
]]
,'uuid'=>'{b8c8a21a-d235-46d1-9558-e92c4fc70dc0}'
]];

    $message = new WaMailFormatter($forms,$form_uuid);

    $cfg=[
        "config"=>$message->config(),
        "text"=>$message->text(),
        "attachments"=>$message->attachments(),
        "force_email_reply"=>$message->forceEmailToReply(),
        "force_subject"=>$message->forceEmailSubject(),
    ];
    $mail = new WaMailWrapper($cfg );
    $b_success = true;
    $error_string="";
    if ($mail ->send()==false)
    {
        $b_success = false;
        $error_string=$mail->errorString();
    }


$json_response=[
"success"=>$b_success,
"message"=>$error_string
];
echo json_encode($json_response);


