<?php
session_start();
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
	$u_nm = $_SESSION['username'];
} else {
	echo "Redirecting to Sign Page";
	echo "<script> location.href='index.html'; </script>";
	exit;
}
?>

<html>
<head>
	<title>Welcome Page</title>
</head>
<body>
	
<center><h1>Welcome User: <?php echo $u_nm ?></h1></center>

<form action="./signout.php" method="post">
	<input type="submit" name="someAction" value="SignOut" />
</form>

</body>
</html>
