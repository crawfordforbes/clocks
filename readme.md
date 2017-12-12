#Clock Excercise

This is my submission for the clock building code challenge. Each clock has a button that starts or pauses the clock, as well as a reset button that stops the clock and resets time to zero. I also included a control panel that allows you to add a clock, remove all clocks, and start or pause all clocks at once. 

I created this app by first looking at stopwatches. While the spec called for a stop button, I found that many stopwatches did not have one; so I sketched a rough mockup of one with just a start/pause button and a reset button. I then created the object constructor function with each of the attributes and methods that I thought it would probably need. Next came a simple index html file and the createClockHTML script to create and append a clock to that HTML file's DOM. 

I tested it out, fixed a few typos, and had a working prototype. I created an array to hold multiple clocks and a function to populate the array; I also removed some clock attributes that ended up being unneccesary, such as a toggle that determined if the clock was to be shown in the DOM. 

I then added the control panel to add and remove clocks, as well as control them en masse. At this point I had my wife try out the app, and occasionally none of the buttons would work once multiple clocks were running. I wasn't getting any errors in the console, so I had to methodically click on each button until I could reproduce the bug. It turns out that clicking the "start all clocks" button twice in a row without pausing in the main control panel was causing the problem. Because I couldn't be sure what state each individual clock would be in when that button is pushed, I had to create a "startAll" method in the clock constructor, which originally looked like this:

`
this.startAll = function(){
		this.runningClock = setInterval(function(){this.increaseTime()}.bind(this), this.interval)
			document.getElementById("start_"+this.id).innerText = "PAUSE"
			document.getElementById("start_"+this.id).style.borderColor = "firebrick"
			document.getElementById("start_"+this.id).style.backgroundColor = "red"
		}
`
It was essentially the same as the start method, but without the ability to pause the clock if clicked while the setInterval function was running. However, if a clock was already running when that method was called, setInterval was being called repeatedly while already running; so I added an if statement to check if setInterval was already triggered, and if not, go ahead and start the clock:

`
this.startAll = function(){
	if(!this.runningClock){
		this.runningClock = setInterval(function(){this.increaseTime()}.bind(this), this.interval)
		document.getElementById("start_"+this.id).innerText = "PAUSE"
		document.getElementById("start_"+this.id).style.borderColor = "firebrick"
		document.getElementById("start_"+this.id).style.backgroundColor = "red"
	}
}
`

This fixed the issue, and I also added similar if statements to other applicable methods so similar issues wouldn't arise.

Once I had an app that made it to MVP logically speaking, I went back to my sketch and added styling and made the app responsive. I then tested it on different browsers and wrote this readme. 

