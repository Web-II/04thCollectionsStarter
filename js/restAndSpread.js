//voorbeeld 1: spread syntax bij array literal notation
const aString = 'Javascript';
console.log([...aString]);

const anArray = ['a', 'b', 'c'];
console.log([1, 2, ...anArray, 3, 4]);

const aMap = new Map([
  ['Belgium', 11589623],
  ['Burkina Faso', 20903275],
  ['Iceland', 341243],
]);
console.log([1, 2, ...aMap, 3, 4]);
console.log([1, 2, ...aMap.values(), 3, 4]);
console.log([1, 2, ...aMap.keys(), 3, 4]);

const aSet = new Set(["patrick.lauwaerts@hogent.be", "stefaan.decock@hogent.be"]);
console.log([1, 2, ...aSet, 3, 4]);


// //voorbeeld 2: spread syntax bij functie aanroepen
// const numbers = [-1, 5, 11, 3];

// console.log(Math.max(...numbers));
// console.log(Math.max(1, 10, ...numbers, 20, 2));
// console.log(Math.max(...aMap.values()));

// //voorbeeld 3:nog enkele voorbeelden
// const arr1 = ['Jan', 'Piet'];
// const arr2 = ['Joris', 'Korneel'];

// // maak een shallow copy die de inhoud van beide arrays bevat:
// const arr12 = [...arr1, ...arr2];
// console.log(arr12); // ["Jan", "Piet", "Joris", "Korneel"]

// // voeg aan arr1 de elementen van arr2 toe
// arr1.push(...arr2);
// console.log(arr1); // ["Jan", "Piet", "Joris", "Korneel"]

// // voorbeeld 4:
// // Vorm sets en maps om tot arrays om zo de 
// // krachtige array-methodes te kunnen gebruiken
// let population = new Map();

// population.set('Belgium', 11589623);
// population.set('Burkina Faso', 20903275);
// population.set('Iceland', 341243);

// // population stijgt met 0.1%
// console.log(`Before population increase:`);
// console.log(population);
// let populationInArray = [...population];
// let adjustedArray = populationInArray.map(([country, population]) => [country, Math.round(population * 1.001)]);
// population = new Map(adjustedArray);
// console.log(`After population increase of 0.1%:`);
// console.log(population);
// // in 1 regel code zonder extra variabelen:
// population = new Map([...population].map(([country, population]) => [country, Math.round(population * 1.001)]));
// console.log(population);

// // population stijgt met 0.1% in-place wijzigen
// console.log(`Before population increase:`);
// console.log(population);
// population.forEach((value, key, map) => map.set(key, Math.round(value * 1.001)));
// console.log(`After population increase of 0.1%:`);
// console.log(population);

// // voorbeeld 5: sorteren
// // keys van de map alfabetisch sorteren 
// population.clear();
// population.set('Iceland', 341243);
// population.set('Burkina Faso', 20903275);
// population.set('Belgium', 11589623);

// console.log(`Before sort:`);
// console.log(population);
// populationSort = new Map([...population].sort(
//   ([key1], [key2]) => key1 - key2));
// console.log(`After sort:`);
// console.log(population);

// // voorbeeld 6:
// // Haal alle landen met minder dan 5000000 inwoners uit population
// console.log(`Original map:`);
// console.log(population);
// populationInArray = [...population];
// adjustedArray = populationInArray.filter(([country, population]) => population > 5000000);
// population = new Map(adjustedArray);
// console.log(`Map without big countries:`);
// console.log(population);

// // in 1 regel code zonder extra variabelen:
// population = new Map([...population].filter(([country, population]) => population > 5000000));

// // voorbeeld 7:
// // twee maps combineren in een derde map
// const population2 = new Map([
//   ['Zimbabwe', 14862924],
//   ['Colombia', 97338579]
// ]);

// console.log('Landen in eerste map:');
// console.log(population);
// console.log('Landen in tweede map:');
// console.log(population2);
// const combinedPopulation = new Map([...population, ...population2]);
// console.log('Alle landen samen in 1 map:');
// console.log(combinedPopulation);

// // voorbeeld 8:
// // rest syntax bij parameters
// function showName(lastname, ...firstnames) {
//   console.log(`De parameter firstnames bevat `);
//   console.log(firstnames);
//   const i = firstnames.reduce((initials, current) => initials + current[0], '');
//   return `${i} ${lastname}`;
// }

// console.log(showName('Rowling', 'Joanne', 'Kathleen')); // JK Rowling
// console.log(showName('Rubens', 'Pieter', 'Paul')); // PP Rubens

// // rest syntax bij array destructuring
// const [a, ...b] = ['Jan', 'Piet', 'Korneel', 'Steven', 'Maarten'];
// console.log(a);
// console.log(b);


// Oefening 1
// Maak gebruik van de spread syntax om een *array* van unieke waarden van de array values te retourneren
const values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
];

// Oefening 2
// Bepaal 3 *gesorteerde* verschillende random getallen tussen 1 en 6

// Oefening 3
// Bepaal een gesorteerde lijst van hoe vaak elk woord voorkomt, ongeacht hoofdletters en kleine letters
// Van vaakst naar minder vaak voorkomen
const tekst =
  'De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort';