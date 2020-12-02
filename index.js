
function veiwpdf(val) {
	let obj = document.querySelector("object");
	obj.removeAttribute("data");
	val = val + ".pdf"
	obj.setAttribute("data", val);
	console.log(obj.getAttribute("data"))
}
var date = new Date();
date = date.getDate();
if (date % 2 == 1) {
	document.getElementById("subjects").innerHTML = `<li><img src="gate.svg" style="width:20px"> GATE LECTURES</li><li><img src="gfg.svg" style="width:20px"> GFG's Videos</li>
<li><img src="python.svg" style="width:20px"> PYTHON VIDEOS</li><li><img src="css.svg" style="width:20px"> CSS VIDEOS</li>`
}
else if (date % 2 == 0) {
	document.getElementById("subjects").innerHTML = `<li><img src="maths.svg" style="width:20px"> MATHS</li><li><img src="dld.svg" style="width:20px"> DIGITAL LOGIC</li>
	<li><img src="gate.svg" style="width:20px"> GATE LECTURES</li><li><img src="python.svg" style="width:20px"> PYTHON VIDEOS</li>`
}
