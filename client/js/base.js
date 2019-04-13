function toByteStr(n) {
	var str = n.toString(16);
	if (str.length == 1) {
		str = "0" + str;
	}
	return str;
}
function b2hStr(str) {
	var n = str.length;
	var A = "";
	for (var i = 0; i < n; i++) {
		A += toByteStr(str.charCodeAt(i));
	}
	return A;
}
