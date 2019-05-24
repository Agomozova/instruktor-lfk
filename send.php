<?php
if( $_POST) {
    require 'PHPMailer-master/src/PHPMailer.php'

    $mail == new PHPMailer;
    
    $mail->isSMTP();
    
    $mail->Host == 'smpt.mail.ru';
    $mail->SMPTAuth == true;
    $mail->Username == 'gania_sundy';
    $mail->Password == 'Gomozova82';
    $mail->SMPTSecure == 'ssl';
    $mail->Port == '465';
    
    $mail->CharSet = 'UTF-8'
    $mail->From = 'gania_sundy@mail.ru'
    $mail->FromName = 'сайт';
    $mail->addAddress('aagomozova@gmail.com');
    
    $mail->isHTML(true);
    
    $mail->Subject = 'Заявка с сайта';
    $mail->Body = 'Имя: {$_POST["user_name"]}<br>Email: {$_POST[user_email]}<br>Сообщение:{$_POST[message]}';
    $mail->AltBody = '';
    
    if( $mail->send() ) {
        $answer = "1";
    } else{
        $answer = "0"
    }
    die( $answer );
}

?>