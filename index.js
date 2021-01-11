
function veiwpdf(val) {
	let obj = document.querySelector("object");
	obj.removeAttribute("data");
	val = val + ".pdf"
	document.addEventListener("adobe_dc_view_sdk.ready", function(){
		var adobeDCView = new AdobeDC.View({clientId: "d8e9db962bc8409f93cb0aa76aa9d5ab", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: `${val}`}},
			metaData:{fileName: "Bodea Brochure.pdf"}
		}, {embedMode: "SIZED_CONTAINER"});
	});
	obj.setAttribute("data", val);
	console.log(obj.getAttribute("data"))
}
var date = new Date();
day = date.getDay();
console.log(day)
date = date.getDate();
if (date % 2 == 1 && day !=0) {
	document.getElementById("subjects").innerHTML =
	 `<li><img src="gate.svg" style="width:20px"> GATE LECTURES</li>
	<li><img src="gfg.svg" style="width:20px"> GFG's Videos</li>
<li><img src="python.svg" style="width:20px"> PYTHON VIDEOS</li>
<li><img src="css.svg" style="width:20px"> CSS VIDEOS</li>`
}
else if (date % 2 == 0 && day !=0) {
	document.getElementById("subjects").innerHTML =
	`<li><img src="maths.svg" style="width:20px"> MATHS</li>
	<li><img src="dld.svg" style="width:20px"> DIGITAL LOGIC</li>
	<li><img src="gate.svg" style="width:20px"> GATE LECTURES</li>
	<li><img src="gfg.svg" style="width:20px"> GFG's Videos</li>`
}
else{
	document.getElementById("subjects").innerHTML =
	 `<li><img src="cp.png" style="width:20px"> COMPETITIVE CODING</li>
	<li><img src="gate.svg" style="width:20px"> GATE LECTURES</li>`
}
