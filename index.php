<?php
session_start();
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
	$u_nm = $_SESSION['username'];
} else {
	echo "Redirecting to Sign Page";
	echo "<script> location.href='./auth/'; </script>";
	exit();
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>BlockChain client</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="refresh" content="30"/>
	<link rel="stylesheet" type="text/css" href="./client/css/style.css">
	<script type="text/javascript" src="./client/js/script.js"></script>
</head>
<body onload="init()">
	<center>
		<h1>Hello, User: <?php echo $u_nm; ?>!<h1>
		<h2>Welcome to BlockChain!</h2>
	</center>
	<div id="b_date"></div>
	<form id="f_so" action="./auth/signout.php" method="post" align="right">
		<input type="submit" name="signout" value="SignOut" />
	</form>

	<div id="todo"><ol>
		Choose the Work to do:<br />
		<li><a href="client/b_crt.php">Create Block</a></li>
		<li><a href="client/b_upl.php">Upload Block</a></li>
		<li><a href="client/b_vrf.php">Verify Block</a></li>
	</ol></div>

	<h2>Last Block:</h2>
	<div id="container">
		<div id="b_id" class="c_b">Block Index:</div>
		<div id="b_un" class="c_b">Block UserName:</div>
		<div id="b_lh" class="c_b">Block Last Hash:</div>
	</div>
</body>
</html>
