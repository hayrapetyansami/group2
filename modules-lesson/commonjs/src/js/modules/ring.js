const persons = [
	{ name: "Frodo", hasRing: false },
	{ name: "Bilbo", hasRing: false }
];

function setRing(a, owner) {
	const test = a.filter(obj => obj.name !== "john")
	.map(person => {
		if (person.name === owner) {
			person.hasRing = true;
		} else {
			person.hasRing = false;
		}
	});

	return test;
}
module.exports = { persons, setRing };