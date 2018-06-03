class Person {

	constructor (name='Anonymous',age=0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		//return 'Hi. I am ' +this.name +'!';
		return `Hi. I am ${this.name}!`;
	}

	getDescription() {
		return `Hi. My name is ${this.name} and I am ${this.age} years old!`
	}

}

class Student extends Person {
	constructor (name,age,major='None') {
		super (name,age);
		this.major = major;
	}
	getDescription() {
		let description = super.getDescription();
		description += `my major is ${this.major}`;
		return description;
	}
}

class Traveler extends Person {
	constructor (name,age,country) {
		super (name, age);
		this.country = country;
	}

	getGreeting () {
		let greeting = super.getGreeting();
		greeting += this.hasCountry() ? ` I come from ${this.country}` : '';
		return greeting;
	}
	
	hasCountry () {
		return !!this.country;
	}	
}

const me = new Traveler (undefined,27,'Egypt');
console.log(me.getGreeting());