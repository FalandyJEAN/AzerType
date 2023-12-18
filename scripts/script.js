/*

 ******************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires du programme *
 *
 ******************************************************************

*/
const mots = document.querySelector("#mo")
const phrases = document.querySelector("#fraz")
const zoneProposition = document.querySelector(".zoneProposition span")
const input = document.querySelector("#input")
const valider = document.querySelector("#valider")
let scoreDisplay = document.querySelector(".score span")
const partagerBox = document.querySelector(".partagerBox")

let score = 0
let total = 0

function genereMot() {
    const indiceMot = Math.floor(Math.random() * listeMots.length)
    const motChoisi = listeMots[indiceMot]
    return motChoisi
}

function generePhrase() {
    const indicePhrase = Math.floor(Math.random() * listePhrases.length)
    const phraseChoisie = listePhrases[indicePhrase]
    return phraseChoisie
}

function chwaItilizate() {
    mots.addEventListener("change", (e) => {
        e.preventDefault()
        if (mots.checked) {
            zoneProposition.textContent = genereMot()
        }
    })

    phrases.addEventListener("change", (e) => {
        e.preventDefault()
        if (phrases.checked) {
            zoneProposition.textContent = generePhrase()
        }
    })
}

chwaItilizate()

function reponseItilizateAn() {
    valider.addEventListener("click", (e) => {
        e.preventDefault()
        const reponseItilizate = input.value.trim()
        console.log(reponseItilizate)

        if ((phrases.checked || mots.checked) && reponseItilizate === zoneProposition.textContent) {
            score++
        }
        total++

        if (total === 5) {
            scoreDisplay.textContent = `Vous avez atteint un score de ${score}/${total} !`
            scoreDisplay.style.color = "yellow"
            valider.disabled = true

            partagerBox.innerHTML = `<button class="partager" data-url="https://falandyjean.github.io/Portfolio/">Partager</button>`

            document.querySelector(".partager").addEventListener("click", ()=> {
                const url = encodeURIComponent(document.querySelector(".partager").getAttribute("data-url"))
                const message = `🚀 Hey, devine quoi ?! 🚀Je viens de terminer un super jeu de mots et devinettes, et mon score est de ${score} sur 5! 😎💪Penses-tu pouvoir faire mieux? 🤔 Essaye le jeu et défie-moi! 👉 ${url}`
                window.location.href = 'whatsapp://send?text=' + message
            })
        } else {
            if (phrases.checked) {
                zoneProposition.textContent = generePhrase()
            } else if (mots.checked) {
                zoneProposition.textContent = genereMot()
            }
            input.value = null
            aficheRezilta(score, total)
        }
    })
}

function aficheRezilta(score, total) {
    scoreDisplay.textContent = `Votre score est : ${score}/${total}`
}

function demareJwetLa() {
    aficheRezilta(score, total)
}

reponseItilizateAn()


