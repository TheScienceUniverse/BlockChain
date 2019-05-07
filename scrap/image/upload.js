function init() {
	document.getElementById('f_sel').addEventListener('change', function(event) {	
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var image = new Image();
		canvas.width = 256, canvas.height = 256;
		if ('files' in this) {
			if (this.files.length > 0) {
				var f_p = this.files[0];
				if (f_p['type'].slice(0, 6) == "image/") {
					console.log("Image File Confirmed");
					document.getElementById('f_sel').disabled = true;
					const reader = new FileReader();
					reader.onload = function (ev) {
						// f_c = ev.target.result;
						f_c = reader.result;

						context.beginPath();
						context.rect(0, 0, 256, 256);
						context.fillStyle = "black";
						context.fill();
						
						image.onload = function() {
							let iW = image.width, iH = image.height;
							let max = (iW > iH) ? iW : iH;
							iW = Math.floor((iW * 256) / max);
							iH = Math.floor((iH * 256) / max);
							iX = (256 - iW) / 2;
							iY = (256 - iH) / 2;
							context.drawImage(image, 0, 0, image.width, image.height, iX, iY, iW, iH);
							let iD = canvas.toDataURL("image/jpeg");
							console.log(iD.slice(0, 256));
							iD = addComment(iD, "Hello, World!");
							console.log(iD.slice(0, 256));
						}
						image.src = f_c;
					}
					//reader.readAsBinaryString(f_p);
					reader.readAsDataURL(f_p);
				} else {
					console.log("Not Image File");
				}
			}
		}
	}, false);
}