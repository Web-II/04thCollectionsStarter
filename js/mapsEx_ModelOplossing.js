// Drill oefening 1 - Vertalende woordenboeken...

// Declareer een lege map genaamd nl_en_dict
const nl_en_dict = new Map();

// Voeg de volgende key-value pairs toe aan nl_en_dict. Maak gebruik van method chaining.
// stoel - chair
// tafel - table
// kaars - candle
// dubbel - double
nl_en_dict
    .set('stoel', 'chair')
    .set('tafel', 'table')
    .set('kaars', 'candle')
    .set('dubbel', 'double');

// Declareer een map genaamd en_fr_dict die initieel volgende entries bevat.
// chair - chaise
// table - table
// candle - bougie
// double - double

const en_fr_dict = new Map([
    ['chair', 'chaise'],
    ['table', 'table'],
    ['candle', 'bougie'],
    ['double', 'double']
]);

// Gebruik nl_en_dict om woorden te vertalen van NL naar EN
// Vul onderstaande code aan
console.log('Vertalen van NL naar EN');
let word = prompt('Geef een nederlands woord');
while (word) {
    if (nl_en_dict.has(word))
        console.log(`NL: ${word} - EN: ${nl_en_dict.get(word)}`);
    else
        console.log(`${word} staat niet in het woordenboek`);
    word = prompt('Geef een nederlands woord');
}

// Gebruik beide woordenboeken om woorden te vertalen van NL naar EN
// Vul onderstaande code aan
console.log('Vertalen van NL naar FR');
word = prompt('Geef een nederlands woord');
while (word) {
    if (nl_en_dict.has(word))
        console.log(`NL: ${word} - FR: ${en_fr_dict.get(nl_en_dict.get(word))}`);
    else
        console.log(`${word} staat niet in het woordenboek`);
    word = prompt('Geef een nederlands woord');
}

// Itereer over nl_en_dict en log alle nederlandse woorden naar de console.
// Maak gebruik van een for .. of lus
for (const word of nl_en_dict.keys()) {
    console.log(word);
}

// Itereer over en_fr_dict en log alle entries naar de console.
// Maak gebruik van een for .. of lus en array destructuring. 
// Elke entry wordt getoond als key: value
for (const [enWord, frWord] of en_fr_dict.entries()) {
    console.log(`${enWord}: ${frWord}`);
}
// Schrijf een functie die een woordenboek als parameter heeft
// en die retourneert hoeveel woorden identiek zijn in beide talen (i.e. key en value hebben dezelfde waarde)
function geefZelfdeWoorden(dictionary) {
    let doubles = 0;
    for (const [word1, word2] of dictionary.entries()) {
        if (word1 === word2)
            ++doubles;
    }
    return doubles;
}

// Gebruik de functie en log naar de console voor onze beide dictionaries 
// hoeveel identieke woorden ze bevatten
console.log(`nl_en dictionary bevat ${geefZelfdeWoorden(nl_en_dict)} identieke woorden`);
console.log(`en_fr dictionary bevat ${geefZelfdeWoorden(en_fr_dict)} identieke woorden`);


// Drill oefening 2
// Bepaal hoe vaak elk woord voorkomt in de string genaamd tekst, 
// maak hierbij geen onderscheid tussen hoofdletters en kleine letters.
// Log alle woorden met hun aantallen naar de console 
// Tip: woorden zijn gescheiden door spaties, maak
// gebruik van de split functie om de string in woorden te splitsen

const tekst = "De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort";

const woordenMap = new Map();
for (const w of tekst.toUpperCase().split(' ')) {
    if (woordenMap.has(w))
        woordenMap.set(w, woordenMap.get(w) + 1)
    else
        woordenMap.set(w, 1);
}
for (const [woord, aantal] of woordenMap) {
    console.log(`${woord} komt ${aantal} keer voor.`)
}


// Drill oefening 3
// Bekijk https://dodona.ugent.be/nl/exercises/798652413/
/*
Er staan n personen in een cirkel te wachten op hun executie. 
De personen worden in wijzerzin genummerd van 1 tot en met n. 
Het aftellen begint vanaf persoon 1, waarbij elke k-de nog levende persoon wordt geëxecuteerd. 
De cirkel wordt hierbij in wijzerzin doorlopen en wordt steeds kleiner en kleiner 
naarmate er meer personen geexecuteerd worden. 
De laatste persoon die overblijft, wordt in leven gelaten. 
Kan je op voorhand een geschikte plaats in de cirkel kiezen, 
zodat je de executie overleeft?

Schrijf een functie die twee parameters heeft
- het aantal personen in de cirkel, n
- de stapgrootte, k
en die de plaats van de laatst ovelevende persoon retourneert.

Voor 30 personen en stapgrootte 9 zou je plaats 21 moeten uitkomen...
*/

function josephus(n, k) {
    let map = new Map();
    for (let i = 1; i <= n; i++) {
        map.set(i, true);
    }
    let aantalLevenden = n;
    let index = 0;
    while (aantalLevenden > 1) {
        let aantal = 0;
        while (aantal < k) {
            index = (index + 1) % (n + 1);
            if (map.get(index)) aantal++;
        }
        aantalLevenden--;
        map.set(index, false);
    }
    for (const [plaats, levend] of map)
        if (levend) return plaats;
}

const aantalPersonen = 30;
const stapGrootte = 9;
console.log(`In een cirkel met ${aantalPersonen} personen en stapgrootte ${stapGrootte} sta je best op plaats ${josephus(aantalPersonen, stapGrootte)}`);