<?php

    $name = $_POST['name'];

	$surname = $_POST['surname'];

    $email = $_POST['email'];

	$email = $_POST['email'];

    $message = $_POST['message'];

    $from = 'From: TangledDemo'; 

    $to = 'contact@tangledindesign.com'; 

    $subject = 'Hello';

    $human = $_POST['human'];

			

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

				

    if ($_POST['submit'] && $human == '4') {				 

        if (mail ($to, $subject, $body, $from)) { 

	    echo '<p>Your message has been sent!</p>';

	} else { 

	    echo '<p>Something went wrong, go back and try again!</p>'; 

	} 

    } else if ($_POST['submit'] && $human != '4') {

	echo '<p>You answered the anti-spam question incorrectly!</p>';

    }

?>