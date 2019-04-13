function init() {
	/*
	 * setTimeout(function() {
	 * location.reload();
	 * }, 30000);
	 */
	setTime();
	getChainData();
}

function setTime() {
	var d = new Date();
	document.getElementById("b_date").innerHTML = d;
}

function getChainData (b_dt) {
	var reqG = new XMLHttpRequest();
	reqG.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			// console.log(obj);
			var n = obj.chain.length - 1;
			document.getElementById('b_id').innerHTML = "Index: " + n.toString();
			document.getElementById('b_un').innerHTML = "UserName: " + obj.chain[n].b_un;
			document.getElementById('b_lh').innerHTML = "Last Hash: " + obj.chain[n].b_ch;
		}
	};
	reqG.open("GET", "./server/gfc.php", true);
	reqG.send();
}
