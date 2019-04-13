function init() {
	document.getElementById('f_ups').addEventListener('change', startProcess, false);
}

function crt_blk_json (b_dt) {
	var reqG = new XMLHttpRequest();
	reqG.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			console.log(obj);
			var n = obj.chain.length;

			var b_id = n.toString();
			var b_ts = new Date();
			var b_ph = obj.chain[n-1].b_ch;
			var b_ch = sha256(b2hStr(b_id + b_ts) + b_ph + b_dt);
			//console.log(b_ch);
			var blk = '{"b_id":' + b_id + ', "b_ts":"' + b_ts + '", "b_ph":"' + b_ph + '", "b_ch":"' + b_ch + '", "b_dt":"' + b_dt + '"}';
			//console.log(blk);
			var reqP = new XMLHttpRequest();
			reqP.onreadystatechange = function() { 
				if (this.readyState == 4 && this.status == 200) {
					var obj2 = this.responseText;
					//console.log(obj2);
				}
			}
			reqP.open("POST", "../server/atc.php", true);
			reqP.setRequestHeader("Content-type", "application/json");
			reqP.send(blk);
		}
	};
	reqG.open("GET", "../server/gfc.php", true);
	reqG.send();
}

function startProcess(evt) {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		console.log("Great success! All the File APIs are supported");
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}

	var f_x = document.getElementById("f_ups");
	var txt = "";

	if ('files' in f_x) {
		if (f_x.files.length == 0) {
			txt = "Select one or more files.";
		} else {
			document.getElementById('f_ups').disabled = true;
			var f_p, f_r, f_c;
			//for (var i = 0; i < f_x.files.length; i++) {
			txt += "<br><strong>" + (0+1) + ". file</strong><br>";
			f_p = f_x.files[0];
			if ('name' in f_p) {
				txt += "name: " + f_p.name + "<br>";
			}
			if ('size' in f_p) {
				txt += "size: " + f_p.size + " bytes <br>";
			}
			f_r = new FileReader();
			f_r.onload = function (e) {
				// f_c = e.target.result;
				f_c = f_r.result;
				f_c = b2hStr(f_c);
				//console.log(f_c.substring(0, 200));
				crt_blk_json(f_c);
			}
			f_r.readAsBinaryString(f_p);
			//f_r.readAsText(f_p);
			//}
		}
	} else {
		if (f_x.value == "") {
			txt += "Select one or more files.";
		} else {
			txt += "The files property is not supported by your browser!";
			txt += "<br>The path of the selected file: " + f_x.value;
		}
	}
	document.getElementById('lst_upls').innerHTML = txt;
}
