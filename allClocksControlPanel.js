// This file adds event listeners to the buttons in the fixed top element

// add a clock to the page
var addClock = document.getElementById("addClock")
addClock.addEventListener("click", function(){
	clockmaker()
})

// remove all clocks and create one
var removeClocks = document.getElementById("removeClocks")
removeClocks.addEventListener("click", function(){
	var wall = document.getElementById("wall")
	clocks.forEach(function(clock){
		clock.reset()
	})
	wall.innerHTML = ""

	clocks = []
	clockmaker()
})

// start all clocks on the page
var startAll = document.getElementById("startAll")
startAll.addEventListener("click", function(){
	clocks.forEach(function(clock){
		clock.startAll()
	})
})

// pause all clocks on the page
var pauseAll = document.getElementById("pauseAll")
pauseAll.addEventListener("click", function(){
	clocks.forEach(function(clock){
		clock.pause()
	})
})

// reset all clocks on the page to 0
var resetAll = document.getElementById("resetAll")
resetAll.addEventListener("click", function(){
	clocks.forEach(function(clock){
		clock.reset()
	})
})




