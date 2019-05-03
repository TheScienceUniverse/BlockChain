const X = [
	"A", "B", "C", "D", "E", "F", "G", "H",
	"I", "J", "K", "L", "M", "N", "O", "P",
	"Q", "R", "S", "T", "U", "V", "W", "X",
	"Y", "Z", "a", "b", "c", "d", "e", "f",
	"g", "h", "i", "j", "k", "l", "m", "n",
	"o", "p", "q", "r", "s", "t", "u", "v",
	"w", "x", "y", "z", "0", "1", "2", "3",
	"4", "5", "6", "7", "8", "9", "+", "/"
];

function isType_base64 (charStr) {
	var p = -1;
	for (i = 0; i < 64; i++) {
		if(X[i] == charStr) {
			p = i;
			break;
		}
	}
	return p;
}

// Convert Decimal Number To Binary String (number, number of bits)
function cN10ToS2(n10, nb) {
	var s2 = n10.toString(2);
	nb -= s2.length;
	for (var i = 0; i < nb; i++) {
		s2 = "0" + s2;
	}
	return s2;
}
// Convert Binary String to Hexadecimal String (binary string, number of bits)
function cS2ToS16(s2, nb) {
	var s16 = parseInt(s2, 2).toString(16);
	nb -= s16.length;
	for (var i = 0; i < nb; i++) {
		s16 = "0" + s16;
	}
	return s16;
}

function base64_enCode(str) {
	//return str;
}

function base64_deCode(str) {
	var r = "";
	var i, c;
	for (i = str.length - 1; i >= 0; i--) {
		c = str.charAt(i);
		if (isType_base64(c) == -1) {
			break;
		}
	}
	str = str.slice(i + 1, str.length);
	console.log(str.length);

	var x = "", nh = 0, nb = 0, a = "", b = "";
	for (i = 0; i < str.length; i++) {
		c = str.charAt(i);
		r += cN10ToS2(isType_base64(c), 6);
		nb += 6;
		if (nb > 7) {
			a = r.substr(0, nh);
			x = r.substr(nh, 8);
			b = r.slice(nh + 8, r.length);
			x = cS2ToS16(x, 2);
			nh += 2, nb -= 8;
			r = a + x + b;
		}
		//console.log(i, nh, nb, a, x, b);
	}
	console.log(nh, nb);
	a = r.substr(0, nh);
	x = r.substr(nh, nb);
	x = cS2ToS16(x, 2);
	nh += 2, nb = 0;
	r = a + x;
	console.log(r.length);
	return r;
}

var str = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQC";
r = base64_deCode(str).substr(0, 256);
console.log(r.search(/fffe/gi));