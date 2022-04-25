$(function() {

	// TIMER

	let timerClock = $('#timer__clock');
	const startButton = $('#start-button');
	const pauseButton = $('#pause-button');
	const stopButton = $('#stop-button');
	let timerDescription = $('#timer__description');

	let min = 0;
	let sec = 0;
	let hrs = 0;

	// let hrs = $("#clock__hours");
	// let min = $("#clock__minutes");
	// let sec = $("#clock__seconds");
	let t;
	let isRunning = false;
	let isStopped = false;
	let isPaused = false;


	function tick() {
		if (isStopped || isPaused)  return;

		sec++;
		if (sec >= 60) {
        	sec = 0;
        	min++;
        	if (min >= 60) {
            	min = 0;
            	hrs++;
            };
		};
	};

	function add() {
		if (isStopped || isPaused) {
			return
		} else {
			tick();
			$(timerClock).text((hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec));
			timer();
		};
	};

	function timer() {
		t = setTimeout(add, 1000);
	};


	$(startButton).on("click", function() {
		if (isRunning) return;
		isRunning = true;
		isStopped = false;
		isPaused = false;
		timer();

		$(startButton).addClass('hidden');
		$(pauseButton).removeClass('hidden');

		$(timerDescription).text("you're now studying!");
	});


	$(stopButton).on("click", function() {
    	$(timerClock).text("00:00:00");
    	sec = 0; min = 0; hrs = 0;
    	isRunning = false;
    	isStopped = true;

    	$(startButton).removeClass('hidden');
		$(pauseButton).addClass('hidden');

		$(timerDescription).text("start studying now!");

	});

	$(pauseButton).on("click", function() {
		isPaused = true;
		isRunning = false;

		$(startButton).removeClass('hidden');
		$(pauseButton).addClass('hidden');

		$(timerDescription).text("take a rest and come back to study more!");

	});

});