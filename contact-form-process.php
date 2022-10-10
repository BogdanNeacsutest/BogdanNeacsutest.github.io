<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$messa = $_POST['message'];

$email_from = 'test@tester.com';
$email_subject = 'New test';
$email_body = "User name: $name.\n".
               "User Email: $visitor_email.\n".
                "User message: $message.\n";

                $to = "oldbogdan38@gmail.com";

                $headers= "From: $email_form \r\n";
                $headers .= "Reply-to $visitor_email \r\n";

                mail($to,$email_subject,$email_body,$headers);

                header("Location: teste.html");

?> 