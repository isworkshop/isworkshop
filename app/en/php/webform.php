<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Jovana Samardzic</title>
</head>
<body>
    
<?php 

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $n = $_POST['name'];
    $e = $_POST['email'];
    $m = nl2br(strip_tags($_POST['message']));
    $to = "office@isworkshop.net";
    $from = $e;
    $subject = "Message from office@isworkshop.net";
    $message = '<b>Name:</b> '.$n.'<br><b>Email:</b> '.$e.'<p>'.$m.'</p>';
    $headers = "From: $from"."\r\n";
    $headers .= "MIME-Version: 1.0"."\r\n";
    $headers .= "Content-type: text/html; charset=utf-8"."\r\n";
    if(mail($to, $subject, $message, $headers)){
    // Ovde ide kod kad je uspesno poslata poruka   
        include("uspesna.php");
    } else {
        // Ovde ide kod kad je slanje neuspesno
        include("neuspesna.php");

    }
}
?>
</body>
</html>
