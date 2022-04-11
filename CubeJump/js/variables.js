var saut = false;

//vitesse ennemis haut
var speed = 2000;
var vitesseObjet = 20;

//commun en haut et en bas (à tester)
var vitesseSaut = 10;

//vitesse ennemis bas
var speedBas = 2800;
var vitesseObjetBas = 20;


var n = 1;
var perdu = false;

var cptPerso = 0; 
var couleursPerso = ["red1", "red2", "blue1", "blue2", "green1", "green2"];
var cptEnnemi = 0;
var couleursEnnemi = ["white", "red2" , "blue2" , "green2", "black"];

//Interval pour spawn d'ennemis
var active;

setInterval(function(){    
    speed -= 0.8;
    vitesseObjet -= 0.15;
    vitesseSaut -= 0.1;
}, 2000);

setInterval(function(){    
    speedBas -= 0.9;
    vitesseObjetBas -= 0.12;
}, 1900);

var score = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;

if (localStorage.getItem('score1') != null)
    score1 = localStorage.getItem('score1');
if (localStorage.getItem('score2') != null)
    score2 = localStorage.getItem('score2');
if (localStorage.getItem('score3') != null)
    score3 = localStorage.getItem('score3');
