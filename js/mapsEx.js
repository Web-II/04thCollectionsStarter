// ============= Drill oefening 1 =============
// Vertalende woordenboeken...

// Declareer een lege map genaamd nl_en_dict

// Voeg de volgende key-value pairs toe aan nl_en_dict. Maak gebruik van method chaining.
// stoel - chair
// tafel - table
// kaars - candle
// dubbel - double

// Declareer een map genaamd en_fr_dict die initieel volgende entries bevat.
// chair - chaise
// table - table
// candle - bougie
// double - double


// Gebruik nl_en_dict om woorden te vertalen van NL naar EN
// Indien een woord niet in het woordenboek voorkomt geef je een gepaste melding
// Vul onderstaande code aan
alert('Vertalen van NL naar EN');
let word = prompt('Geef een nederlands woord');
while (word) {
    // hier aanvullen
    word = prompt('Geef een nederlands woord');
}

// Gebruik beide woordenboeken om woorden te vertalen van NL naar EN
// Indien een woord niet in het woordenboek voorkomt geef je een gepaste melding
// Vul onderstaande code aan
alert('Vertalen van NL naar FR');
word = prompt('Geef een nederlands woord');
while (word) {
    // hier aanvullen
    word = prompt('Geef een nederlands woord');
}

// Itereer over nl_en_dict en log alle nederlandse woorden naar de console.
// Maak gebruik van een for .. of lus


// Itereer over en_fr_dict en log alle entries naar de console.
// Maak gebruik van een for .. of lus en array destructuring. 
// Elke entry wordt getoond als key: value


// Schrijf een functie die een woordenboek als parameter heeft
// en die retourneert hoeveel woorden identiek zijn in beide talen (i.e. key en value hebben dezelfde waarde)
// Gebruik dan de functie en log naar de console voor onze beide dictionaries 
// hoeveel identieke woorden ze bevatten





// ============= Drill oefening 2 =============
// Bepaal hoe vaak elk woord voorkomt in de string genaamd tekst, 
// maak hierbij geen onderscheid tussen hoofdletters en kleine letters.
// Log alle woorden met hun aantallen naar de console 
// Tip: woorden zijn gescheiden door spaties, maak
// gebruik van de split functie om de string in woorden te splitsen

const tekst = "De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort";





// ============= Drill oefening 3 =============
// Bekijk https://dodona.ugent.be/nl/exercises/798652413/
/*
Er staan n personen in een cirkel te wachten op hun executie. 
De personen worden in wijzerzin genummerd van 1 tot en met n. 
Het aftellen begint vanaf persoon 1, waarbij elke k-de nog levende persoon wordt ge�xecuteerd. 
De cirkel wordt hierbij in wijzerzin doorlopen en wordt steeds kleiner en kleiner 
naarmate er meer personen geexecuteerd worden. 
De laatste persoon die overblijft, wordt in leven gelaten. 
Kan je op voorhand een geschikte plaats in de cirkel kiezen, 
zodat je de executie overleeft?

Vervolledig onderdstaande functie josephus die twee parameters heeft
- het aantal personen in de cirkel, n
- de stapgrootte, k
en die de plaats van de laatst ovelevende persoon retourneert.

Voor 30 personen en stagrootte 9 zou je plaats 21 moeten uitkomen...
*/

function josephus(n, k) {
    // aanvullen
}

const aantalPersonen = 30;
const stapGrootte = 9;
console.log(`In een cirkel met ${aantalPersonen} personen en stagrootte ${stapGrootte} sta je best op plaats ${josephus(aantalPersonen, stapGrootte)}...`);