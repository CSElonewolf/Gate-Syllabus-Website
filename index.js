
function veiwpdf(val) {
	let obj = document.querySelector("object");
	obj.removeAttribute("data");
	val = val + ".pdf"
	obj.setAttribute("data", val);
	console.log(obj.getAttribute("data"))
}
