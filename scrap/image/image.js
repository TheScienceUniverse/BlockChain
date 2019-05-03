function modifyImage(iD, iW, iH) {
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
}