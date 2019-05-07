function init() {
	if(apiCheck()) {
		// Elements for taking the snapshot
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var video = document.getElementById('video');
		// Trigger photo take
		document.getElementById("snap").addEventListener("click", function() {
			//context.drawImage(video, 0, 0, 320, 240);
			context.drawImage(video, 0, 0, 320, 240);
			var btn_cnf = document.getElementById('confirm');
			btn_cnf.disabled = false;
			btn_cnf.addEventListener('click', function(ev) {
				if (confirm("Confirm This Image!")) {
					var imgData = canvas.toDataURL("image/jpeg");
					console.log(imgData.slice(0, 256), imgData.length);
					imgData = modifyImage(imgData, 320, 240);
					console.log(imgData.slice(0, 256), imgData.length);

					document.getElementById('snap').disabled = true;
					btn_cnf.disabled = true;
					document.getElementById('done').disabled = false;
				} else {
					// console.log("Cancel");
					btn_cnf.disabled = true;
					document.getElementById('done').disabled = true;
				}
			});
		});
		document.getElementById('done').addEventListener("click", function() {
			window.location.href = "./b_crt.php";
		});
	}
}
function apiCheck () {
	var check = false;
	// Grab elements, create settings, etc.
	var video = document.getElementById('video');
	// Get access to the camera!
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		// Not adding `{ audio: true }` since we only want video now
		navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
			//video.src = window.URL.createObjectURL(stream);
			video.srcObject = stream;
			video.play();
		});
		check = true;
	}
	return check;
}
/* function modifyImage(iD, iW, iH) {
	var cnv = document.createElement('canvas');
	cnv.style.border = "1px solid red";
	var ctx = cnv.getContext('2d');
	cnv.width = 256, cnv.height = 256;
	var max = (iW > iH) ? iW : iH;
	 
	ctx.beginPath();
	ctx.rect(0, 0, 256, 256);
	ctx.fillStyle = "black";
	ctx.fill();
	
	var img = new Image();
	img.src = iD;
	img.onload = function() {
		iW = (256 * iW) / max;
		iH = (256 * iH) / max;
		iX = 0 + (256 - iW) / 2;
		iY = 0 + (256 - iH) / 2;
		ctx.drawImage(img, iX, iY, iW, iH);
	}
	// document.body.appendChild(cnv);
	return cnv.toDataURL("image/jpeg");
} */