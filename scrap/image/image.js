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
	document.body.appendChild(cnv);
	return cnv.toDataURL("image/jpeg");
}

function addComment(iD, cmnt) {
	var s8 = base64_deCode(iD);
	var i, c, cH = "fffe";
	c = cmnt.length.toString(16);
	let n = 4 - c.length;
	for (i = 0; i < n; i++) {
		c = "0" + c;
	}
	cH += c;
	for (i = 0; i < cmnt.length; i++) {
		c = cmnt.charCodeAt(i).toString(16);
		if (c.length == 1) {
			c = "0" + c;
		}
		cH += c;
	}
	var p = s8.search(/ffdb/);
	s8 = s8.slice(0, p) + cH + s8.slice(p, s8.length);
	iD = base64_enCode(s8);
	iD = "data:image/jpeg;base64," + iD;
	/*
	let x = "ABC";
	x = base64_deCode(x);
	console.log(x);
	x = "0f0f";
	x = base64_enCode(x);
	console.log(x);
	*/
	return iD;
}