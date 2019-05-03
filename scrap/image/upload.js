function init() {
	document.getElementById('f_sel').addEventListener('change', function(event) {	
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
						console.log(f_c.length, f_c.substring(0, 64));
						var canvas = document.getElementById('canvas');
						var context = canvas.getContext('2d');
						var image = new Image();
						canvas.width = 256, canvas = 256;
						
						context.beginPath();
						context.rect(0, 0, 256, 256);
						context.fillStyle = "white";
						context.fill();

						image.onload = function() {
							let iW = image.width, iH = image.height;
							console.log(f_c.slice(0, 64), iW, iH);
							//let iData = modifyImage(f_c, iW, iH);
							//console.log(iData);
							
							console.log(f_c.length);
							let max = (iW > iH) ? iW : iH;
							iW = (256 * iW) / max;
							iH = (256 * iH) / max;
							let iX = 0 + (256 - iW) / 2;
							let iY = 0 + (256 - iH) / 2;
							console.log(iW, iH, iX, iY);
							context.drawImage(image, iX, iY, iW, iH);
							let iData = canvas.toDataURL('image/jpeg');
							console.log(iData.length);
						}
						image.src = f_c;
					}
					reader.readAsDataURL(f_p);
				} else {
					console.log("Not Image File");
				}
			}
		}
	}, false);
}