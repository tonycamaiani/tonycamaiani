<?php
  $mailTo = 'tony@camaiani.it';
  $mailFrom = $_POST['emailFrom'];
  $subject = '[tony.camaiani.it]: '.$_POST['subject'];
  $message = $_POST['message'];
  mail($mailTo, $subject, $message, "From: ".$mailFrom);
?>