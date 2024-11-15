/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

const buttonElts = document.querySelectorAll('button');

for (const buttonElt of buttonElts) {
    buttonElt.addEventListener('click', () => {document.body.style.backgroundColor = buttonElt.id})
}

