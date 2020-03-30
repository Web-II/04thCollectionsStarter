let population = new Map();

population.set('Belgium', 11589623);
population.set('Burkina Faso', 3273);
population.set('Iceland', 341243);
population.set('Burkina Faso', 20903275);

alert(`Use get-method to retrieve a value for a given key`);
let country = prompt('Enter name of country.');
while (country) {
    alert(`${population.get(country)} people live in ${country}`);
    country = prompt('Enter name of country.');
}

alert('Use size-property to know how many entries are stored in a map')
alert(`We have data for ${population.size} countries.`);

alert(`Use has-method to check if an entry for the given key is present in the map.`);
while (country = prompt('Enter name of country.')) {
    if (population.has(country))
        alert(`${population.get(country)} people live in ${country}`);
    else
        alert(`We have no data for ${country}`);
}

alert(`Use delete-method to delete an entry with a given key from the map`);
while (country = prompt('Enter name of country.')) {
    if (population.delete(country))
        alert(`The entry for ${country} was deleted`);
    else
        alert(`Couldn't not delete ${country}...`);
}

alert(`Use clear-method to empty a map`);
population.clear();
alert(`The map has been cleared. It contains ${population.size} entries...`);

alert(`Use method chaining to add entries.`);
population
    .set('Belgium', 11589623)
    .set('Burkina Faso', 20903275)
    .set('Iceland', 341243);
alert(`The map contains its original entries again...`);

let message = '';

alert(`Use entries-method to get an iterable with all the entries from the map`);
message = 'Entries in our map:\n';
for (const entry of population.entries()) {
    message += `${entry[0]} has ${entry[1]} people.\n`;
}
alert(message);

alert(`It can be handy to make use of array destructuring`);
message = `Entries in our map:\n`;
for (const [key, value] of population.entries()) {
    message += `${key} has ${value} people.\n`;
}
alert(message);

alert(`Use keys-method to get an iterable with all the keys from the map`);
message = 'Keys in our map:\n';
for (const key of population.keys()) {
    message += `${key}\n`;
}
alert(message);

alert(`Use values-method to get an iterable with all the values from the map`);
message = 'Values in our map:\n';
for (const value of population.values()) {
    message += `${value}\n`;
}
alert(message);

alert(`Use forEach-method to iterate over a map with a callback function`);
message = 'Countries with less than 5000000 people:\n'
population.forEach((value, key) => {
    if (value < 5000000)
        message += `${key} with ${value} people\n`;
});
alert(message);

alert(`Use Map constructor to create a map with entries`);
population = new Map([
    ['Belgium', 11589623],
    ['Burkina Faso', 20903275],
    ['Iceland', 341243],
]);

alert(`You can use objects as keys in a map.`);
population.clear();
const bel = {
    name: 'Belgium',
    region: 'Europe'
};
const zim = {
    name: 'Zimbabwe',
    region: 'Africa'
};
const col = {
    name: 'Colombia',
    region: 'Latin America'
};

population
    .set(bel, 11589623)
    .set(zim, 14862924)
    .set(col, 97338579);

alert(`${population.get(col)} live in ${col.name}`);

const col2 = {
    name: 'Colombia',
    region: 'Latin America'
};

alert(`${population.get(col2)} live in ${col2.name}`);

alert(`Hope you have a good understanding of strict equality, look at the console ;-)`);
console.log('Comparing primitives vs comparing objects');
console.log(`
const primitive1 = 'abcdef';
const primitive2 = 'abcdef';
console.log('comparison 1: ' + (primitive1 === primitive2));

const object1 = [1, 2, 3];
const object2 = [1, 2, 3];
console.log('comparison 2: ' + (object1 === object2));

const object3 = object1;
console.log('comparison 3: ' + (object1 === object3));
object1.splice(0, 1, 'a', 'b', 'c');
console.log('comparison 4: ' + (object1 === object3));`);

const primitive1 = 'abcdef';
const primitive2 = 'abcdef';
console.log('comparison 1: ' + (primitive1 === primitive2));

const object1 = [1, 2, 3];
const object2 = [1, 2, 3];
console.log('comparison 2: ' + (object1 === object2));

const object3 = object1;
console.log('comparison 3: ' + (object1 === object3));
object1.splice(0, 1, 'a', 'b', 'c');
console.log('comparison 4: ' + (object1 === object3));