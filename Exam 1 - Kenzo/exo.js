//-------------------------------------------Exercice-1-------------------//

'La valeur de C sera 24'

//-------------------------------------------Exercice-2-------------------//

'La valeur de C sera 135'

//-------------------------------------------Exercice-3-------------------//

const TVA = Math.PI;
var tarifHT = 2;
var montantTVA = tarifHT*TVA;
var tarifTTC = tarifHT + montantTVA;

//------------------------------------------Exercice-4------------------//
function nomEtPrenom(){

let prenom = prompt('Quel est votre prénom ?')
let nom = prompt('Quel est votre nom ?')

alert('Bonjour ' + prenom + ' Votre nom est '+ nom)

}
nomEtPrenom()

//------------------------------------------Exercice-5------------------//

function number(){

let nombre1 = prompt("Entrez le premier nombre : ");
let nombre2 = prompt("Entrez le deuxième nombre : ");

nombre1 = Number(nombre1);
nombre2 = Number(nombre2);

let produit = nombre1 * nombre2;

if (produit > 0) {
  alert("Le produit de ces deux nombres est positif.");
} else if (produit < 0) {
  alert("Le produit de ces deux nombres est négatif.");
} else {
  alert("Le produit de ces deux nombres est zéro.");
}

}
number()

//------------------------------------------Exercice-6------------------//

function pegi(){

let age = prompt('Rentrez votre age')
    
    
    if (age<13) {
        alert('Je vous conseille de regarder Toy Story')
    }
    else if(age>13 && age<18){
        alert('Je vous conseille de regarder The Dark Knight ')
    }
    else{
        alert('Je vous conseille de regarder Le Loup de Wall Street')
    }
}

pegi()

//------------------------------------------Exercice-7------------------//

function JustePrix() {

var randomNumber = Math.round(Math.random() * 10) + 1;
var nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) {
    nombre = parseInt(prompt("donnez un chiffre:"),10);
    if (nombre === randomNumber) {alert("C'est Gagné ! vous avez trouvé le chiffre en" + compteur + " essais");
        break;
    }
    if (nombre > randomNumber) {
        alert("trop grand");
    }
    if (nombre < randomNumber) {
        alert("trop petit");
    }
}
alert("c'est fini. le chiffre cherche est : " + randomNumber);

}

justePrix()

//------------------------------------------Exercice-8------------------//

function PlusOuMoins() {

let num = prompt("Entrez un chiffre :");

if(num < 0){
  alert("Le chiffre doit être positif.");
} else {
  for(let i = num; i >= 0; i--){
    alert(i);
  }
}
}

PlusOuMoins()


//------------------------------------------Exercice-9------------------//
function justePrix() {

var randomNumber = Math.round(Math.random() * 10) + 1;
var nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) {
    nombre = parseInt(prompt("donnez un chiffre:"),10);
    if (nombre === randomNumber) {alert("C'est Gagné ! vous avez trouvé le chiffre en" + compteur + " essais");
        break;
    }
    if (nombre > randomNumber) {
        alert("trop grand");
    }
    if (nombre < randomNumber) {
        alert("trop petit");
    }
}
alert("c'est fini. le chiffre cherche est : " + randomNumber);

}

justePrix()

//------------------------------------------Exercice-10------------------//
function sms(){

let chiffres = [10, 15, 20, 15, 14, 8];

let somme = 0;

for(let i = 0; i < chiffres.length; i++){
    somme += chiffres[i];
}

alert("La somme des chiffres est : " + somme);

}

sms()

//------------------------------------------Exercice-11-12-----------------//

function classroom(params) {   

let classe = prompt("Le nombre d'élèves ?")
let moyennesup = []
let notes = []

for(let i = 0; i < classe; i++){
    let note = prompt('Note');
    notes.push(parseFloat(note))
}

alert("Les Notes entrée sont: " + notes)

if (note> 10) {
    moyennesup.push(parseFloat(note))
    alert("Les notes au dessus de la moyenne: " + moyennesup)
} else {
}

}

classroom()    

//------------------------------------------Exercice-13------------------//
function nombres() {

const nmbres = [[0, 18], [1, 45], [45, 48], [-3, 2]];

let max = nmbres[0][0];

for (let i = 0; i < nmbres.length; i++) {
  for (let j = 0; j < nmbres[i].length; j++) {
    if (nmbres[i][j] > max) {
      max = nmbres[i][j];
    }
  }
}
}

nombres()

console.log('La plus grande valeur dans le tableau est ' + max + '.');

//------------------------------------------Exercice-14------------------//

function COMPTER() {
    
    let mot = prompt('Entre un mot')
    
    alert('il y a ' + mot.length + ' lettre')
    
}  

COMPTER()

//------------------------------------------Exercice-15------------------//

function Aléatoire(nbre) {

let randomNumber = Math.round(Math.random() * 5);
let nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) {
    nombre = parseInt(prompt("donnez un chiffre:"),10);
    if (nombre === randomNumber) {alert("C'est Gagné ! vous avez trouvé le chiffre en" + compteur + " essais");
        break;
    }
    if (nombre > randomNumber) {
        alert("trop grand");
    }
    if (nombre < randomNumber) {
        alert("trop petit");
    }
}
alert("c'est fini. le chiffre cherche est : " + randomNumber);
}
Aléatoire()

//------------------------------------------Exercice-16------------------//

function Murphy(a, b){
    if (a>b) {
        return 0
    }
    else{
        return 1
    }
}

Murphy()

//------------------------------------------Exercice-17------------------//

function triCroissant(tab) {
  var longueur = tab.length;
  for (var i = 0; i < longueur; i++) {

    for (var j = 0; j < longueur - 1; j++) {

      if (tab[j] > tab[j + 1]) {
        var temp = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = temp;
      }
    }
  }

  return tab;
}

triCroissant()

//------------------------------------------Exercice-18------------------//

function Maximum(numbers) {
    
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
}

//------------------------------------------Exercice-19------------------//

function countVowels(str) {

    str = str.toLowerCase();
  
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {

      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'y') {

        count++;
      }
    }

    return count;
}

//------------------------------------------Exercice-20------------------//

function pair(numbers) {

    let evenNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {

      if (numbers[i] % 2 === 0) {

        evenNumbers.push(numbers[i]);
      }
    }

    return evenNumbers;
}
  
//------------------------------------------Exercice-21------------------//  
  
function bizaro(a){
    a = "Kenzo";
    b = a.split("");
    b
    c = b.reverse()
    c
    d = c.join("");
    d
    return d
}
console.log(bizaro(""));
  
  
