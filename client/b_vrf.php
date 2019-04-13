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
	</head>
	<body onload="init()">
		<center>
			<h1>Hello, World!</h1>
			<h2>We are about to verify a new Block!</h2>
			<a href="../"><b><u><i>Back to Home</i></u></b></a>
		</center>
	</body>
</html>
