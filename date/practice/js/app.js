"use strict";

function countDownLogic (endTime) {
	const total = Date.parse(endTime) - Date.parse(new Date());
	const days = Math.floor( total / (1000 * 60 * 60 * 24) );
	const seconds = Math.floor( (total / 1000) % 60 );
	const minutes = Math.floor( (total / 1000 / 60) % 60 );
	const hours = Math.floor( (total / (1000 * 60 * 60) % 24 ) );

	return {
		"endTime": endTime,
		"total": total,
		"days": days,
		"seconds": seconds,
		"minutes": minutes,
		"hours": hours
	}
}

function coutDownIsNeedZero (num) {
	return num >= 0 && num < 10 ? `0${num}` : num;
}

function countDownApp (childType, endTime) {
	const parent = document.querySelector("#timerApp");
	const appInterval = setInterval(countDownUpdate, 1000);

	function countDownCreateHTML (day = 0, hour = 0, minute = 0, second = 0) {
		parent.innerHTML = `
			<${childType}>${day}</${childType}>
			<${childType}>${hour}</${childType}>
			<${childType}>${minute}</${childType}>
			<${childType}>${second}</${childType}>
		`;
	}
	
	function countDownUpdate() {
		const data = countDownLogic(endTime);
		
		countDownCreateHTML(
			coutDownIsNeedZero(data.days),
			coutDownIsNeedZero(data.hours),
			coutDownIsNeedZero(data.minutes),
			coutDownIsNeedZero(data.seconds),
		);

		if (data.total <= 0) {
			clearInterval(appInterval);
		}
	}
}

countDownApp("span", "2022-09-01")
