"use strict"

// Nom
function nomLength() {
    let nom = document.getElementById("nom").value
    const nomErreur = document.getElementById('nom-erreur')
    
    if (nom.length >= 5 && nom.length <= 15) {
        nomErreur.innerHTML = ''
        return true
    } else {
        nomErreur.innerHTML =`
        <div class="erreur">
            <p class="text-base">Le nom doit être entre cinq et quinze caractères max.</p>
        </div>
        `
        return false
    }
}

// Prénom
function prenomLength() {
    const prenom = document.getElementById("prenom").value
    const prenomErreur = document.getElementById('prenom-erreur')
    
    if (prenom.length >= 5 && prenom.length <= 15) {
        prenomErreur.innerHTML = ''
        return true
    } else {
        prenomErreur.innerHTML =`
        <div class="erreur">
            <p class="text-base">Le prénom doit être entre cinq et quinze caractères max.</p>
        </div>
        `
        return false
    }
}

// Email
function verifEmail() {
    const email = document.getElementById('email').value
    const emailErreur = document.getElementById('email-erreur')
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

    const isEmailValid = regex.test(email)

    if (!isEmailValid) {
        emailErreur.innerHTML = `
        <div class="erreur">
            <p class="text-base">Entrez un mail valide.</p>
        </div>
        `
        return false
    }
    
    emailErreur.innerHTML = ''
    return true

}

// Date de naissance 
function verifDate() {
    const date = document.getElementById("date-naissance")
    const dateErreur = document.getElementById("date-erreur") 

    const dateEntree = new Date(date.value)

    const aujourdHui = new Date()

    if (dateEntree > aujourdHui) {
        dateErreur.innerHTML = `
        <div class="erreur">
            <p class="text-base">Eh Einstein, tu ne peux pas être né demain...</p>
        </div>
        `
        return false
    } else {
        dateErreur.innerHTML = ""
        return true
    }
}


// Adresse postale (je ne savais pas quelles contraintes mettre pour ce champ )
function adresseLength() {
    const adresse = document.getElementById("adresse").value
    const adresseErreur = document.getElementById('adresse-erreur')
    
    if (adresse.length >= 50 && adresse.length <= 200) {
        adresseErreur.innerHTML = ''
        return true
    } else {
        adresseErreur.innerHTML =`
        <div class="erreur">
            <p class="text-base">L'adresse postale doit être entre cinquante et deux-cent caractères max.</p>
        </div>
        `
        return false
    }
}

// Mdps
function verifMdps() {
    const mdp = document.getElementById("mot-de-passe").value
    const vMdp = document.getElementById("confirmation-mot-de-passe").value

    const mdpErreur = document.getElementById('mot-de-passe-erreur')
    const vMdpErreur = document.getElementById('confirmation-mot-de-passe-erreur')

    if (mdp.length < 8) {
        mdpErreur.innerHTML =`
        <div class="erreur">
            <p class="text-base">Le mot de passe doit contenir au minimum 8 caractères.</p>
        </div>
        `
        return false
    }
    mdpErreur.innerHTML = ''

    if (mdp != vMdp) {
        vMdpErreur.innerHTML =`
        <div class="erreur">
            <p class="text-base">Les mots de passe doivent être identiques.</p>
        </div>
        `
        return false
    }
    vMdpErreur.innerHTML = ''
    return true
}

function envoyeForm() {
    const formulaireEnvoye = document.getElementById('formulaire-envoye')

    formulaireEnvoye.innerHTML = ''

    const nomOk = nomLength()
    const prenomOk = prenomLength()
    const emailOk = verifEmail()
    const dateOk = verifDate()
    const adresseOk = adresseLength()
    const mdpsOk = verifMdps()


    if (nomOk && prenomOk && emailOk && dateOk && adresseOk && mdpsOk) {
        document.getElementById("mot-de-passe").value = ''
        document.getElementById("confirmation-mot-de-passe").value = ''
        document.getElementById("adresse").value = ''
        document.getElementById('date-naissance').value = ''
        document.getElementById('email').value = ''
        document.getElementById("prenom").value = ''
        document.getElementById("nom").value = ''

        return formulaireEnvoye.innerHTML =`
        <div class="succes">
            <p class="text-base">Le formulaire à bien été envoyé.</p>
        </div>
        `
    }
}

const monButton = document.getElementById('button')

monButton.addEventListener('click', () => {
    envoyeForm()
})
