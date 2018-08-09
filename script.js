// currying
const first = () => {
	const greet = 'Hi!';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

const multiply = (a, b)-=> a + b;
const curriedMultiply = (a) => (b) => a * b;

// compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
compose(sum, sum)(5)

// Advanced Arrays
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
	double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// filter

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num 
}, 0);

console.log('reduce', reduceArray);



// debugging

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		debugger;
		return accumulator.concat(array)
	}, []);