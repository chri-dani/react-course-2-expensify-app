// const person = {
//     name: 'Andrew',
//     age: 25,
//     location: {
//         city: 'Phili',
//         temp: 92
//     }
// };

// const {name: firstName = "Anonymous", age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location;
// // if (person.location.city && person.location.temp) {
// //     console.log(`It's ${person.location.temp} is ${person.location.city}`);
// // }
// if (city && temperature) {
//     console.log(`It's ${temperature} is ${city}`);
// }

//CHALLENGE
// const book = {
//     title: 'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }


// const {name: publisherName="Self-Published"} = book.publisher;
// console.log(publisherName); // Penguin, Self-Published(default)


//
//Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee(hot)', '2.00', '2.50', '2.75'];
const [coffee, , mprice] = item

console.log(`A ${coffee} costs ${mprice}`);