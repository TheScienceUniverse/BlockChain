<?php
session_start();
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
	$u_nm = $_SESSION['username'];
} else {
	echo "Redirecting to Sign Page";
	echo "<script> location.href='../'; </script>";
	exit();
}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Creating Block</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="./css/b_crt.css">
		<script type="text/javascript" src="./js/base.js"></script>
		<script type="text/javascript" src="./js/sha256.js"></script>
		<script type="text/javascript" src="./js/b_crt.js"></script>
	</head>
	<body onload="init()">
		<center>
			<h1>Hello, World!</h1>
			<h2>We are about to create a new Block!</h2>
			<a href="../"><b><u><i>Back to Home</i></u></b></a>
		</center>
		<p>Have an Image or <b>File</b>, Upload Here:</p>
		<div id="f_upload">
			<input type="file" id="f_ups" multiple size="50" />
			<!--<p><strong>Tip:</strong> Use the Control or the Shift key to select multiple files.</p>-->
			<div id="lst_upls"></div>
		</div>
		<hr />
		<p>Don't have an Image, Create from Here:</p>
		<a href="./webcam.php">Create Image</a>
	</body>
</html>
