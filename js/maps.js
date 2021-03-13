let label, myInput, go; 
let voorbeeld = null;

const population = new Map();
population.set("Belgium", 11589623);
population.set("Iceland", 341243);
population.set("Burkina-Faso", 20903275);

//voorbeeld 1: get method
console.log(`Use get-method to retrieve a value for a given key`);
voorbeeld = function() {
  label.innerText = "Enter name of country: ";
  go.onclick = function () {
    const country = myInput.value;
    console.log(`${population.get(country)} people live in ${country}`);
  };
}

// // voorbeeld 2: size property
// console.log("Use size-property to know how many entries are stored in a map");
// console.log(`We have data for ${population.size} countries.`);
// console.log(
//   `Use has-method to check if an entry for the given key is present in the map.`
// );
// voorbeeld = function() {
//   label.innerText = "Enter name of country: ";
//   go.onclick = function () {
//     const country = myInput.value;
//     if (population.has(country))
//       console.log(`${population.get(country)} people live in ${country}`);
//     else console.log(`We have no data for ${country}`);
//   };
// }

// // voorbeeld 3: delete method
// console.log(
//   `Use delete-method to delete an entry with a given key from the map`
// );
// voorbeeld = function() {
//   label.innerText = "Enter name of country to delete:";
//   go.onclick = function () {
//     const country = myInput.value;
//     if (population.delete(country))
//       console.log(
//         `The entry for ${country} was deleted.\nWe have data for ${population.size} countries.`
//       );
//     else console.log(`Couldn't delete ${country}...`);
//   };
// }

// // voorbeeld 4: clear method
// console.log(`Use clear-method to empty a map`);
// population.clear();
// console.log(`The map has been cleared. It contains ${population.size} entries...`);

// // voorbeeld 5: chaining
// console.log(`Use method chaining to add entries.`);
// population.clear();
// population
//     .set('Belgium', 11589623)
//     .set('Burkina-Faso', 20903275)
//     .set('Iceland', 341243);
// console.log(`The map contains its original entries again... watch console`);
// console.log(population);

// // voorbeeld 6: iterations
// //  voorbeeld 6.1: use entries
// let message = '';
// console.log(`Use entries-method to get an iterable with all the entries from the map`);
// message = 'Entries in our map:\n';
// for (const entry of population.entries()) {
//     message += `${entry[0]} has ${entry[1]} people.\n`;
// }
// console.log(message);

// //  voorbeeld 6.2: array destructuring
// console.log(`It can be handy to make use of array destructuring`);
// message = `Entries in our map:\n`;
// for (const [key, value] of population.entries()) {
//     message += `${key} has ${value} people.\n`;
// }
// console.log(message);

// //  voorbeeld 6.3: use keys method for the keys
// console.log(`Use keys-method to get an iterable with all the keys from the map`);
// message = 'Keys in our map:\n';
// for (const key of population.keys()) {
//     message += `${key}\n`;
// }
// console.log(message);

// //  voorbeeld 6.4: use value method for the values
// console.log(`Use values-method to get an iterable with all the values from the map`);
// message = 'Values in our map:\n';
// for (const value of population.values()) {
//     message += `${value}\n`;
// }
// console.log(message);

// //  voorbeeld 6.5: use forEach method
// console.log(`Use forEach-method to iterate over a map with a callback function`);
// message = 'Countries with less than 5000000 people:\n'
// population.forEach((value, key) => {
//     if (value < 5000000)
//         message += `${key} with ${value} people\n`;
// });
// console.log(message);

// // voorbeeld 7: map constructor and creating entries(without using set method)
// console.log(`Use Map constructor to create a map with entries`);
// const newPopulation = new Map([
//     ['Belgium', 11589623],
//     ['Burkina Faso', 20903275],
//     ['Iceland', 341243],
// ]);
// console.log(newPopulation);

// // voorbeeld 8: objects as keys
// console.log(`You can use objects as keys in a map.`);
// population.clear();
// const bel = {
//     name: 'Belgium',
//     region: 'Europe'
// };
// const zim = {
//     name: 'Zimbabwe',
//     region: 'Africa'
// };
// const col = {
//     name: 'Colombia',
//     region: 'Latin America'
// };

// population
//     .set(bel, 11589623)
//     .set(zim, 14862924)
//     .set(col, 97338579);

// console.log(`${population.get(col)} people live in ${col.name}`);

// const col2 = {
//     name: 'Colombia',
//     region: 'Latin America'
// };
// population.set(col2, 3);
// console.log(`${population.get(col2)} people live in ${col2.name}`);

// // voorbeeld 9: strict equality
// console.log(`Hope you have a good understanding of strict equality, look at the console ;-)`);
// console.log('Comparing primitives vs comparing objects');
// console.log(`const primitive1 = 'abcdef';
// const primitive2 = 'abcdef';
// console.log('comparison 1: ' + (primitive1 === primitive2));

// const object1 = [1, 2, 3];
// const object2 = [1, 2, 3];
// console.log('comparison 2: ' + (object1 === object2));

// const object3 = object1;
// console.log('comparison 3: ' + (object1 === object3));
// object1.splice(0, 1, 'a', 'b', 'c');
// console.log('comparison 4: ' + (object1 === object3));`)

// const primitive1 = 'abcdef';
// const primitive2 = 'abcdef';
// console.log('comparison 1: ' + (primitive1 === primitive2));

// const object1 = [1, 2, 3];
// const object2 = [1, 2, 3];
// console.log('comparison 2: ' + (object1 === object2));

// const object3 = object1;
// console.log('comparison 3: ' + (object1 === object3));
// object1.splice(0, 1, 'a', 'b', 'c');
// console.log('comparison 4: ' + (object1 === object3));
// console.log(`Object1: ${object1} - Object3: ${object3}`);

window.onload = function(){
  label = document.getElementById("label");
  myInput = document.getElementById("input");
  go = document.getElementById("go");
  voorbeeld();
};
