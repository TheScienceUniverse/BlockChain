function init() {
	if(apiCheck()) {
		// Elements for taking the snapshot
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var video = document.getElementById('video');

		// Trigger photo take
		document.getElementById("snap").addEventListener("click", function() {
			ctx.drawImage(video, 0, 0, 320, 240);
			var btn_cnf = document.getElementById('confirm');
			btn_cnf.disabled = false;
			btn_cnf.addEventListener('click', function(ev) {
				if (confirm("Confirm This Image!")) {
					// console.log("OK");
					var link = document.createElement('a');
					link.innerHTML = '<b><i><u>Download</u></i></b>';
					link.addEventListener('click', function(ev) {
						// link.href = canvas.toDataURL();
						// Convert to JPEG for Compression
						link.href = canvas.toDataURL("image/jpeg");
						link.download = "capture.jpg";
					}, false);
					document.body.appendChild(link);
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

	/* Legacy code below: getUserMedia 
	else if(navigator.getUserMedia) { // Standard
		navigator.getUserMedia({ video: true }, function(stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia({ video: true }, function(stream){
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
		navigator.mozGetUserMedia({ video: true }, function(stream){
			video.srcObject = stream;
			video.play();
		}, errBack);
	}
	*/
	return check;
}
