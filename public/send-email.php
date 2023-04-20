<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to_email = "fmethubd@gmail.com";
  $subject = "New PDF File Uploaded";
  $message = "A new PDF file has been uploaded to your website.";
  $headers = "From: webmaster@example.com";
  $pdf_file = $_FILES["pdf-file"]["tmp_name"];
  $pdf_name = $_FILES["pdf-file"]["name"];
  $user_email = $_POST["user-email"];

  if (empty($pdf_file) || !file_exists($pdf_file)) {
    die("PDF file not found.");
  }

  if (empty($user_email)) {
    die("User email not provided.");
  }

  $pdf_content = file_get_contents($pdf_file);
  $pdf_attachment = chunk_split(base64_encode($pdf_content));

  $boundary = md5(time());
  $headers .= "\r\nMIME-Version: 1.0\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";

  $message .= "\r\n\r\n--".$boundary."\r\n";
  $message .= "Content-Type: application/pdf; name=\"".$pdf_name."\"\r\n";
  $message .= "Content-Transfer-Encoding: base64\r\n";
  $message .= "Content-Disposition: attachment; filename=\"".$pdf_name."\"\r\n\r\n";
  $message .= $pdf_attachment."\r\n";
  $message .= "--".$boundary."--";

  $mail_sent = @mail($to_email, $subject, $message, $headers);

  if (!$mail_sent) {
    die("Error sending email. Please try again later.");
  }

  echo "Email sent successfully.";
} else {
  die("Invalid request.");
}
