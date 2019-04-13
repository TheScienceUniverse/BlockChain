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
		<title>WebCam API</title>
		<!--<script type="text/javascript" src="js/sha256.js"></script>-->
		<style>
			body { background: grey; }
			a:hover {
				color: red;
				cursor: pointer;
			}
		</style>
		<script type="text/javascript" src="js/webcam.js"></script>
	</head>
	<body onload="init()">
		<video id="video" width="320" height="240" autoplay style="border: 2px dashed red"></video>
		<button id="snap">Capture</button>
		<canvas id="canvas" width="320" height="240" style="border: 2px dashed blue"></canvas>
		<button id="confirm" disabled="true">Confirm</button>
		<button id="done" disabled="true">Done</button>
	</body>
</html>
