// buildClock takes a clock object and creates its html, adds click events, and appends it to the DOM

var createClockHTML = function(clock){


	// get the clock's id
	var id = clock.id;


	// clock storage
	var wall = document.getElementById("wall")

	var shelf = document.createElement("div");
	shelf.className = "shelf";


	// clock outer shell
	var clockWrapper = document.createElement("div");
	clockWrapper.className = "clockWrapper";
	clockWrapper.id = "clock_"+id;
	

	// row of buttons
	var buttonsWrapper = document.createElement("div");
	buttonsWrapper.className = "buttonsWrapper";

	var start = document.createElement("button");
	start.className = "buttons startButton";
	start.id = "start_"+id;
	start.innerText = "START"
	start.addEventListener("click", clock.start)

	var reset = document.createElement("button");
	reset.className = "buttons resetButton";
	reset.id = "reset_"+id;
	reset.innerText = "RESET"
	reset.addEventListener("click", clock.reset)


	//lcd display
	var displayWrapper = document.createElement("div")
	displayWrapper.className = "displayWrapper"

	var display = document.createElement("p");
	display.className = "display"

	var hours = document.createElement("span")
	hours.className = "display hours";
	hours.id = "hours_"+id;
	hours.innerText = "00"

	var minutes = document.createElement("span")
	minutes.className = "display minutes";
	minutes.id = "minutes_"+id;
	minutes.innerText = "00"

	var seconds = document.createElement("span")
	seconds.className = "display seconds";
	seconds.id = "seconds_"+id;
	seconds.innerText = "00"

	var milliseconds = document.createElement("span")
	milliseconds.className = "display milliseconds";
	milliseconds.id = "milliseconds_"+id;
	milliseconds.innerText = "0"

	var colonH = document.createElement("span")
	colonH.className = "colon"
	colonH.innerText = ":"

	var colonM = document.createElement("span")
	colonM.className = "colon"
	colonM.innerText = ":"

	var colonS = document.createElement("span")
	colonS.className = "colon"
	colonS.innerText = "."


	// put created elements together and append them to the page
	buttonsWrapper.appendChild(start)
	buttonsWrapper.appendChild(reset)

	display.appendChild(hours)
	display.appendChild(colonH)
	display.appendChild(minutes)
	display.appendChild(colonM)
	display.appendChild(seconds)
	display.appendChild(colonS)
	display.appendChild(milliseconds)

	displayWrapper.appendChild(display)

	clockWrapper.appendChild(buttonsWrapper)
	clockWrapper.appendChild(displayWrapper)

	shelf.appendChild(clockWrapper)
	wall.appendChild(shelf)
}


