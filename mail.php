<?php
if (!empty($_POST['user_name']) AND !empty($_POST['user_email']) AND !empty($_POST['user_massage'])){

	$headers = 'From: Абубачир\r\n'. 'Reply-To: jollyollly@gmail.com\r\n'. 'X-Mailer: PHP/'. phpversion();

	$theme = 'Новое сообщение';

	$letter = 'Данные сообщения:\r\n';
	$letter .='Имя: ' .$_POST['user_name']. '\r\n';
	$letter .='Email: ' .$_POST['user_email']. '\r\n';
	$letter .='Сообщение: ' .$_POST['user_massage']. '\r\n';


	if(mail('jollyollly@gmail.com', $theme, $letter, $headers)){
		header('location:/thankyou.php')
	} else{
		header('location:/');
	}
} else {
	header('location:/');
}