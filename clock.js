// clock object constructor, it takes a unique id
var Clock = function(id) {
	// Attributes

	// a unique id
	this.id = id;

	// time starts at 0 ms
	this.time = 0;

	// runningClock is a clock's interval ID
	this.runningClock = null;


	// Methods

	// increment time, append the most recent time to the DOM
	this.increaseTime = function() {
		this.time += 100;
		this.renderTime()
	};

	// when the start button is clicked, this.start fires. First it checks if it is already running; if so it pauses the clock and makes appropriate style changes, otherwise it starts the clock and makes appropriate style changes.
	this.start = function(){

		if(this.runningClock > 0){
			clearInterval(this.runningClock)
			// reset the interval ID, otherwise the next time start is clicked the clock won't start
			this.runningClock = null;
			document.getElementById("start_"+this.id).innerText = "START"
			document.getElementById("start_"+this.id).style.borderColor = "green"
			document.getElementById("start_"+this.id).style.backgroundColor = "lightgreen"
		} else {
			this.runningClock = setInterval(function(){this.increaseTime()}.bind(this), 100)
			document.getElementById("start_"+this.id).innerText = "PAUSE"
			document.getElementById("start_"+this.id).style.borderColor = "firebrick"
			document.getElementById("start_"+this.id).style.backgroundColor = "red"
		}
	}.bind(this)
	
	// when the start all button is clicked, this.startAll fires. If this clock is already running, this function is does nothing; otherwise it starts the clock. 
	this.startAll = function(){
		if(!this.runningClock){
		this.runningClock = setInterval(function(){this.increaseTime()}.bind(this), 100)
			document.getElementById("start_"+this.id).innerText = "PAUSE"
			document.getElementById("start_"+this.id).style.borderColor = "firebrick"
			document.getElementById("start_"+this.id).style.backgroundColor = "red"
		}
	}

	// pause a running clock, do nothing to a paused or reset clock
	this.pause = function(){

		if(this.runningClock > 0){
			clearInterval(this.runningClock)
			this.runningClock = null;
			document.getElementById("start_"+this.id).innerText = "START"
			document.getElementById("start_"+this.id).style.borderColor = "green"
			document.getElementById("start_"+this.id).style.backgroundColor = "lightgreen"
		}
	}

	// pause a running clock, and reset any clock's time to 0, and rerender the new time
	this.reset = function(){
		if(this.runningClock > 0){
			clearInterval(this.runningClock)
			this.runningClock = null;
		}
		this.time = 0;
		document.getElementById("start_"+this.id).innerText = "START"
		document.getElementById("start_"+this.id).style.borderColor = "green"
		document.getElementById("start_"+this.id).style.backgroundColor = "lightgreen"
		this.renderTime()
	}.bind(this)

	// rerender the lcd disstart of the clock. Also add a "0" to any piece of time that needs a tens placeholder when that particular value would be less than ten. Compute each piece of time from ms to H/M/S. Only disstart hundredths value for ms.
	this.renderTime = function(){

		var hoursActual = Math.floor(this.time / 3600000);
		var hoursDisstart = (hoursActual < 10) ? "0"+hoursActual : hoursActual;
		document.getElementById('hours_'+this.id).innerText = hoursDisstart;

		var minutesActual = Math.floor(this.time / 60000) % 60
		var minutesDisstart = (minutesActual < 10) ? "0"+minutesActual : minutesDisstart = minutesActual
		document.getElementById('minutes_'+this.id).innerText  = minutesDisstart;

		var secondsActual = Math.floor(this.time / 1000) % 60
		var secondsDisstart = (secondsActual < 10) ? "0"+secondsActual : secondsDisstart = secondsActual;
		document.getElementById('seconds_'+this.id).innerText = secondsDisstart;

		document.getElementById('milliseconds_'+this.id).innerText = this.time.toString().substr(this.time.toString().length - 3, 1)
	}
}


// hold clock objects in clocks array
clocks = [];

// clockmaker chooses a new unique ID, creates a new clock object with that ID, and renders it to the page with createClockHTML
var clockmaker = function(){
	
	if(clocks.length > 0){
		var clock = new Clock(clocks.length)
		
		createClockHTML(clock)
		clocks.push(clock)

	} else {
		var clock = new Clock(0)
		clocks.push(clock)
		createClockHTML(clock)

	}
}

// run clockmaker on load
clockmaker()