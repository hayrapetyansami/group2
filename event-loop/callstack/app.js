const a = 5;

function b () {
	return c();
}

function c () {
	return d();
}

function d () {
	console.log(a * a);
}

b();

// const a = 5;

// function double (a) {
// 	return a * a;
// }

// function logDouble (a) {
// 	setTimeout(function() {
// 		console.log(double(a));
// 	}, 1000);
// }

// logDouble(a);