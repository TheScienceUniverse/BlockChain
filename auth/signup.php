<html>
<head>
	<title>Verifying Registration information</title>
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
	$u_rn = $_POST["u_rn"];
	$u_db = $_POST["u_db"];
	$u_pn = $_POST["u_pn"];
	$u_ea = $_POST["u_ea"];
	$u_nm = $_POST["u_nm"];
	$u_pw = $_POST["u_pw"];
	$u_cpw = $_POST["u_cpw"];

	$db_con = mysqli_connect($db_host, $db_uname, $db_upass, $db_name);
	if (!$db_con) {
		die("Databse Connection failed: " . mysqli_connect_error());
	}
	echo "Database Connected successfully";

	$db_q = 'SELECT * FROM ' . $db_tbl . ' WHERE u_nm = "' . $u_nm . '"';
	$q_res = mysqli_query($db_con, $db_q);

	if(mysqli_num_rows($q_res) > 0) {
		$msg = "<br />User Already Exists! Please Choose Another UserName :).";
	} else {
		if($u_pw == $u_cpw) {
			$q_res = mysqli_query($db_con, 'INSERT INTO ' . $db_tbl . '(u_rn, u_db, u_pn, u_ea, u_nm, u_pw) VALUES ("' . $u_rn . '", "' . $u_db . '", "' . $u_pn . '", "' . $u_ea . '", "' . $u_nm . '", "' . $u_pw . '");');

			if($q_res === true) {
				$msg = "<br />Registration Successful :) Redirecting to Home...";
			} else {
				$msg = "<br />Puting data into database Failed :(";
			}
		} else {
			$msg = "Password Didn't match :( Please enter same password.";
		}
	}

	mysqli_close($con);
	echo '<script>redirect("./index.html");</script>';
}
?>
	<center><div id="msg"><h2><?php echo $msg; ?></h2></div></center>
</body>
</html>
