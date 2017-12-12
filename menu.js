
// select the element and add a click event to it
var hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener("click", function(){
	// select the element to be updated, and change it's class to show or hide the element
	var cpanel = document.getElementsByClassName("cpanel")[0];
	if(cpanel.className === "cpanel"){
		cpanel.className = "cpanel offScreen"

	} else {
		cpanel.className = "cpanel"

	}

})
window.onresize = function(){
	if(window.innerWidth > 550){
		var cpanel = document.getElementsByClassName("cpanel")[0];
		if(cpanel.className === "cpanel offScreen"){
			cpanel.className = "cpanel"
		}
	}
}