let viewers = new Set(["tom.antjon@hogent.be", "stefaan.decock@hogent.be"]);

alert(`Use add-method to add a unique value to the set`);

viewers
  .add('patrick.lauwaerts@hogent.be')
  .add('stefaan.samyn@hogent.be')
  .add('pieter.vanderhelst@hogent.be')
  .add('benjamin.vertonghen@hogent.be');

let viewer = prompt('Add a viewer for this video.', 'viewer');
while (viewer) {
  viewers.add(viewer);
  viewer = prompt('Add another viewer for this video.', 'viewer');
}

alert(`We have now ${viewers.size} unique viewers...`);

viewer = prompt('Who do you want to follow up?', 'email');
while (viewer) {
  alert(`${viewer} has${viewers.has(viewer) ? '' : ' not'} watched this video.`);
  viewer = prompt('Who else do you want to follow up?', 'email');
}

viewer = prompt('Who do you want to remove from the set of viewers?', 'email');
while (viewer) {
  alert(`${viewer} was ${viewers.delete(viewer) ? '' : 'not'} removed.`);
  viewer = prompt('Who else do you want to remove?', 'email');
}

viewers.clear();
alert(`We cleared the set, it has ${viewers.size} entries.`);

// Using a set of objects
const lector1 = {
  email: 'tom.antjon@hogent.be',
  fullName: 'Tom Antjon'
};
const lector2 = {
  email: 'stefaan.decock@hogent.be',
  fullName: 'Stefaan De Cock'
};

viewers
  .add(lector1)
  .add(lector2);

const duplicateLector = {
  email: 'tom.antjon@hogent.be',
  fullName: 'Tom Antjon'
};

viewers.add(duplicateLector);

let message = 'Two different objects can hold same values! Look at our set:\n';
for (const viewer of viewers.values()) {
  message += `${viewer.fullName} (${viewer.email})\n`
}
alert(message);

message = 'All collections can hold a mix of values from different types...\n';
viewers.clear();
viewers.add(5);
viewers.add(['a', 'b', 'c']);
viewers.add(true);
viewers.add('aString');
viewers.add(x => x * 2);
viewers.add(new Map());

for (const viewer of viewers) {
  message += `${(typeof viewer)}\n`;
}
alert(message);

message = 'All strings in the set:\n';
viewers.forEach((value) => message += typeof value === 'string' ? `${value}\n` : '');
alert(message);

// Oefening 1
// Maak gebruik van een set om de unieke waarden van de array te retourneren

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
// Bepaal 3 *verschillende* random getallen tussen 1 en 6