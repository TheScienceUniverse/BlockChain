<html>
<head>
	<title>Verifying Login Information</title>
	<script type="text/javascript" src="mylib.js"></script>
</head>
<body>
<?php
$msg = "";
$db_host = "localhost";
$db_uname = "phpmyadmin";
$db_upass = "password";
$db_name = "u_auth";
$db_tbl = "u_tb";

if(count($_POST) > 0) {
	$u_nm = $_POST["u_nm"];
	$u_pw = $_POST["u_pw"];

	$db_con = mysqli_connect($db_host, $db_uname, $db_upass, $db_name);
	if (!$db_con) {
		die("Connection failed: " . mysqli_connect_error());
	}
	echo "Database Connected successfully";

	$db_q = 'SELECT * FROM ' . $db_tbl . ' WHERE u_nm = "' . $u_nm . '" and u_pw = "' . $u_pw . '"';
	// echo $db_q;

	$q_res = FALSE;
	$q_res = mysqli_query($db_con, $db_q);

	if (mysqli_num_rows($q_res) == 1) {
		$msg = '<br />Login Successful :) Redirecting to Main Page...';
		session_start();
		$_SESSION['loggedin'] = true;
		$_SESSION['username'] = $u_nm;
		echo '<script>redirect("../index.php");</script>';
	} else {
		$msg = '<br />Login Failed :( Redirecting to Home Page...';
		echo '<script>redirect("./index.html");</script>';
	}

	mysqli_close($db_con);
}
?>
	<center><div id="msg"><h2><?php echo $msg; ?></h2></div></center>
</body>
</html>
