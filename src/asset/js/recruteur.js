function afficherDateEtHeure() {
    var maintenant = new Date();

    // Obtenir la date
    var jour = maintenant.getDate();
    var mois = maintenant.getMonth() + 1; // Les mois commencent à 0
    var annee = maintenant.getFullYear();

    // Obtenir l'heure
    var heure = maintenant.getHours();
    var minute = maintenant.getMinutes();
    var seconde = maintenant.getSeconds();

    // Ajouter un zéro devant les chiffres < 10 pour une meilleure lisibilité
    jour = (jour < 10) ? "0" + jour : jour;
    mois = (mois < 10) ? "0" + mois : mois;
    heure = (heure < 10) ? "0" + heure : heure;
    minute = (minute < 10) ? "0" + minute : minute;
    seconde = (seconde < 10) ? "0" + seconde : seconde;


    // Construire les chaînes de texte pour la date et l'heure
    var dateActuelle = jour + "/" + mois + "/" + annee;
    var heureActuelle = heure + ":" + minute + ":" + seconde;


    var elementDate = document.getElementById("date");
    if (elementDate !== null) {
        elementDate.innerHTML = "Date: " + dateActuelle;
    }

    var elementHeure = document.getElementById("heure");
    if (elementHeure !== null) {

        elementHeure.innerHTML = "Heure: " + heureActuelle;
    }

}

// Mettre à jour la date et l'heure chaque seconde
setInterval(afficherDateEtHeure, 1000);



