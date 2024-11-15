/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/
const radioinput = document.querySelector("input[checked=checked]");
document.querySelector(':root').style.setProperty('--main-color', radioinput.value)


const radioElts = document.querySelectorAll('input[type="radio"]');

for (const radioElt of radioElts) {
    radioElt.addEventListener('change', function (evt) {
        document.querySelector(':root').style.setProperty("--main-color", evt.currentTarget.value);
    });
}


// methode prevent default permet d'empecher le comportement par defaut du navigateur