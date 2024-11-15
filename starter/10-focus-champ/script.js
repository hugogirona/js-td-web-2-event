/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// // Un seul champ
// const prenomInputElt = document.getElementById('prenom');
//
// prenomInputElt.addEventListener('focus', (evt) => {
//     evt.currentTarget.value = '';
//     evt.currentTarget.style.backgroundColor = 'deepskyblue';
// })
//
// prenomInputElt.addEventListener('blur', (evt) => {
//     evt.currentTarget.style.backgroundColor = 'transparent';
// })
//
// // Deux champs
// const nomInputElt = document.getElementById('nom');
//
// nomInputElt.addEventListener('focus', (evt) => {
//     evt.currentTarget.value = '';
//     evt.currentTarget.style.backgroundColor = 'deepskyblue';
// })
//
// nomInputElt.addEventListener('blur', (evt) => {
//     evt.currentTarget.style.backgroundColor = 'transparent';
// });

// Plusieurs champs


// const inputElts = document.querySelectorAll('input[type=text]');
// for (const inputElt of inputElts) {
//     inputElt.addEventListener('focus', (evt) => {
//         evt.currentTarget.value = '';
//         evt.currentTarget.style.backgroundColor = evt.currentTarget.dataset.backgroundColor;
//     });
//     inputElt.addEventListener('blur', (evt) => {
//         evt.currentTarget.style.backgroundColor = 'transparent';
//     });
// }

const app = {
    inputElts: document.querySelectorAll('input[type=text]'),
    formElt: document.querySelector('form'),
    sectionElt: document.querySelector('.material'),
    init() {
        this.inputTypeTextBackgroundColorValue = getComputedStyle(document.querySelector('input[type=text]')).backgroundColor
        this.addEventListeners()
    },
    addEventListeners() {
        for (const inputElt of this.inputElts) {
            inputElt.addEventListener('focus', (evt) => {
                this.focus(evt);
            });
            inputElt.addEventListener('blur', (evt) => {
                this.blur(evt);
            });
        }
        this.formElt.addEventListener('submit', (e) => {
            this.sayHello(e)
        })
    },
    focus(evt) {
        evt.currentTarget.value = '';
        evt.currentTarget.style.backgroundColor = evt.currentTarget.dataset.backgroundColor;
    },
    blur(evt) {
        evt.currentTarget.style.backgroundColor = this.inputTypeTextBackgroundColorValue;
    },
    sayHello(e) {
        e.preventDefault();
        let textContent = 'Bonjour '
        for (const textInputElement of this.inputElts) {
            textContent += textInputElement.value + ' ';
        }
        this.sectionElt.insertAdjacentHTML("beforeend", `<p>${textContent} </p>`)
    }
}

app.init();
