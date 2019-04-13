<?php
session_start();
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
	$b_un = $_SESSION['username'];
} else {
	echo "Redirecting to Sign Page";
	echo "<script> location.href='../auth/'; </script>";
	exit();
}

// Put Data To File
function pdtf ($f_nm, $f_dt) {
	if (!file_exists($f_nm)) {
		touch($f_nm);
	} else {
		//echo "File Exists";
	}
	chmod($f_nm, 0664);
	//chown($f_nm, "www-data");
	$f_st = false;
	$f_hl = fopen($f_nm, "w+");// or die("Can't open File");
	if ($f_hl != false) {
		$f_st = true;
		fwrite($f_hl, $f_dt, strlen($f_dt));
	}
	fclose($f_hl);
	return $f_st;
}

// File Block
$j_nb = file_get_contents('php://input');
$j_nb = json_decode($j_nb);
//var_dump($j_nb);

$b_fn = 'b_'.$j_nb->b_id.'.json';
// Chain Block
$j_cb = array(
	"b_un" => $b_un,
	"b_ch" => $j_nb->b_ch,
	"b_fn" => $b_fn
);
$j_cb = new ArrayObject($j_cb);
//var_dump($j_cb);

// Final Chain
$j_fc = file_get_contents("../res/chain.json");
$j_fc = json_decode($j_fc, true);
array_push($j_fc['chain'], $j_cb);
//var_dump($j_fc);

var_dump(json_encode($j_nb));
var_dump(json_encode($j_fc));

if (pdtf('../res/chain.json', json_encode($j_fc))) {
	echo "Chain Addition: SUCCESS";
	echo "Creating New File...";
	if (pdtf('../res/'.$b_fn, json_encode($j_nb))) {
		echo "Block Creation: Success";
	} else {
		echo "Block Creation: Failure";
	}
} else {
	echo "Chain Addition: Failure";
}
?>
