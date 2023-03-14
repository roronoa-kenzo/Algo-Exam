//----------------------------------------Exercice-1-------------------------------//

//function MyLength(cr7) {

//    let total = 0;
//    for (let i in cr7) {
//      total++;
//    }
//    console.log (total);
//}

// MyLength("mario");

//----------------------------------------Exercice-2-------------------------------// 
  
//function MyTrim(SuS) {

//  while (SuS.charAt(0) === " ") {
//    SuS = SuS.substring(1);
//  }

//  while (SuS.charAt(MyLength(SuS) - 1) === " ") {
//    SuS = SuS.substring(0, MyLength(SuS) - 1);
//  }

//  return SuS;

  
//}
  
// console.log (MyTrim("   kenzo   "))
  
 //----------------------------------------Exercice-1-Bis----------------------------//
 
//  function justePrix() {

//   var randomNumber = Math.round(Math.random() * 3) + 1;
//   var nombre, compteur;
//   for (compteur=1; compteur<=10; compteur+=1) {
//       nombre = parseInt(prompt("donnez un chiffre:"),10);
//       if (nombre === randomNumber) {alert("C'est Gagné ! vous avez trouvé le chiffre en" + compteur + " essais");
//           break;
//       }
//       if (nombre > randomNumber) {
//           alert("trop grand");
//       }
//       if (nombre < randomNumber) {
//           alert("trop petit");
//       }
//   }
//   alert("c'est fini. le chiffre cherche est : " + randomNumber);
  
// }
  
//   justePrix()

//----------------------------------------Exercice-2-Bis----------------------------//

// function justePrix() {

// var max = 20; 

// var min = 10;

//   var randomNumber =  Math.round(Math.random() * (max - min) + min);
//   var nombre, compteur;
//   for (compteur=1; compteur<=10; compteur+=1) {
//       nombre = parseInt(prompt("donnez un chiffre:"),10);
//       if (nombre === randomNumber) {alert("C'est Gagné ! vous avez trouvé le chiffre en" + compteur + " essais");
//           break;
//       }
//       if (nombre > randomNumber) {
//           alert("trop grand");
//       }
//       if (nombre < randomNumber) {
//           alert("trop petit");
//       }
//   }
//   alert("c'est fini. le chiffre cherche est : " + randomNumber);
  
// }
  
//   justePrix()

//----------------------------------------Exercice-3--------------------------------//



//----------------------------------------Exercice-4--------------------------------//

// function TenNumber(SuS){

//   let startNumber = 18;

//   if (isNaN(startNumber)) {

//     console.log("Veuillez entrer un nombre valide.");

//   } else {
  
//   for (let i = 1; i <= 9; i++) {
//     console.log(startNumber + i);
//   }
// }

// }

// TenNumber(5)

//----------------------------------------Exercice-5--------------------------------//

//   function Multiplication(SuS){

//     let startNumber = 7;

//     if (isNaN(startNumber)) {

//       console.log("Veuillez entrer un nombre valide.");

//     } else {
  
//     for (let i = 1; i <= 10; i++) {
//       console.log(startNumber*i);
//       console.log(startNumber + '' + 'x' + '' + i + '' + '=' + startNumber*i)
//     }
//   }

//   }

// Multiplication()

//----------------------------------------Exercice-6--------------------------------//

// function add(x){
//     let somme = 0;
//     for (let i = 1; i <= x; i++) {
//         somme += i;
//         somme
//         i
//       }
//       console.log( somme);

// }
// add(5)

//----------------------------------------Exercice-7--------------------------------//

//function factor(SuS) {
  //     if (SuS === 0) {
  //       return 1;
  //     } else {
  //       var factorielle = 1;
  //       for (var i = 1; i <= SuS; i++) {
  //         factorielle *= i;
  //       }
  //       return console.log(factorielle);
  //     }
  //   }
  // factor(8)

//----------------------------------------Exercice-8--------------------------------//

// function Grande() {
//     let a = 0
//     let grandNumber = 0;
//     for (let i = 1; i <= 20; i++) {
//     let nombre = parseInt(prompt("Veuillez saisir le nombre n°" + i + " :"));
//       if (nombre > GrandNumber) {
//         grandNumber = nombre;
//         a = i;
//       }
//     }
//     document.write(GrandNumber + i);
//   }
//   Grande();

//----------------------------------------Exercice-9--------------------------------//
// function GrandNombre() {
//     let grandNumber = 0;
//     while(true)
     
//         if (nombre === 0) break
//         let nombre = parseInt(prompt("Saisissez le nombre numero" + i + " :"));
//           if (nombre > grandNumber) {
//             grandNumber = nombre;
//           }
//         }
//         document.write(grandNumber);
      
      
//       GrandNombre();



//----------------------------------------Exercice-10--------------------------------//

// function Argent(n) {
//     let age = n;
//     let sum = 0;
    
//     for (let i = 1; i <= n; i++) {
//       sum += 100 + 2*age;
//       age++;
//     }
    
//     return console.log(sum);
//   }
//   Argent();