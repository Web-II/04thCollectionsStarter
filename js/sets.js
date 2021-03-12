const label = document.getElementById("label");
const myInput = document.getElementById("input");
const go = document.getElementById("go");

const viewers = new Set([
  "patrick.lauwaerts@hogent.be",
  "stefaan.decock@hogent.be",
]);
// add method
viewers
  .add("patrick.lauwaerts@hogent.be")
  .add("stefaan.samyn@hogent.be")
  .add("karine.samyn@hogent.be")
  .add("lotte.vansteenberghe@hogent.be");

console.log(viewers);

// voorbeeld 1: add method
console.log(`Use add-method to add a unique value to the set`);
function voorbeeld() {
  label.innerText = 'Add a viewer for this video: ';
  go.onclick = function () {
    const viewer = myInput.value;
    viewers.add(viewer);
    console.log(viewers);
    console.log(`We have now ${viewers.size} unique viewers...`);
  };
}

// // voorbeeld 2: has method
// console.log(
//   `Use has-method to check if an entry for the given key is present in the set.`
// );
// function voorbeeld() {
//   label.innerText = "Who do you want to follow up? ";
//   go.onclick = function () {
//     const viewer = myInput.value;
//     console.log(`${viewer} has${viewers.has(viewer) ? "" : " not"} watched this video.`);
//   };
// }

// // voorbeeld 3: delete method
// console.log(
//   `Use delete-method to delete an entry with a given key from the set`
// );
// function voorbeeld() {
//   label.innerText = "Who do you want to remove from the set of viewers? ";
//   go.onclick = function () {
//     const viewer = myInput.value;
//     console.log(
//       `${viewer} was${viewers.delete(viewer) ? "" : " not"} removed.`
//     );
//     console.log(viewers);
//   };
// }

// // voorbeeld 4: clear method
// viewers.clear();
// console.log(`We cleared the set, it has ${viewers.size} entries.`);
// console.log(viewers);

// // voorbeeld 5: using a set of objects
// viewers.clear();
// const lector1 = {
//   email: 'patrick.lauwaerts@hogent.be',
//   fullName: 'Patrick Lauwaerts'
// };
// const lector2 = {
//   email: 'stefaan.decock@hogent.be',
//   fullName: 'Stefaan De Cock'
// };

// viewers
//   .add(lector1)
//   .add(lector2);

// const duplicateLector = {
//   email: 'patrick.lauwaerts@hogent.be',
//   fullName: 'Patrick Lauwaerts'
// };
// viewers.add(duplicateLector);

// let message = 'Two different objects can hold same values! Look at our set:\n';
// for (const viewer of viewers) {
//   message += `${viewer.fullName} (${viewer.email})\n`
// }
// console.log(message);

// message = 'All collections can hold a mix of values from different types...\n';
// viewers.clear();
// viewers.add(5);
// viewers.add(['a', 'b', 'c']);
// viewers.add(true);
// viewers.add('aString');
// viewers.add(x => x * 2);
// viewers.add(new Map());

// for (const viewer of viewers) {
//   message += `${(typeof viewer)}\n`;
// }
// console.log(message);

// message = 'All strings in the set:\n';
// viewers.forEach((value) => message += typeof value === 'string' ? `${value}\n` : '');
// console.log(message);

// // Oefening 1
// // Maak gebruik van een set om de unieke waarden van de array te retourneren

// const values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// Oefening 2
// Bepaal 3 *verschillende* random getallen tussen 1 en 6

window.onload = voorbeeld;
