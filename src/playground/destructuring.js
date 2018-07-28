console.log ('destructuring');

const person = {
	name: 'Andrew',
	age: 26,
	lcoation: {
		city: 'philadelphia',
		temp: 31
	}
}

console.log(`${person.name} is`);


const book = {
	title: 'ego is the enemy',
	author: 'Ryan B',
	publisher: {
		//name: 'penguin'
	}
}



const {name: publisherName = 'self-published'} = book.publisher;

console.log(publisherName);