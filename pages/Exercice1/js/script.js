
function afficheDate(){
    //date
    let dateActuelle = new Date();
    let jour = dateActuelle.getDay();
    let year = dateActuelle.getFullYear();
    let mois = dateActuelle.getMonth() + 1;
    let journum = dateActuelle.getDate();
    //heure
    let heure = dateActuelle.getHours();
    let minutes = dateActuelle.getMinutes();
    let secondes = dateActuelle.getSeconds();

    //jour en texte
    const txtday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]; 
    let jourtxt = txtday[jour];

    /*---------- AFFICHAGE ----------*/

    //afficher la date
    let displayDate = document.getElementById('date');
    displayDate.innerHTML = jourtxt + " " + year + "-" + mois + "-" + jour;

    //afficher l'heure
    let displayHeure = document.getElementById('heure');
    displayHeure.innerHTML = heure + ":" + minutes + ":" + secondes + " AM";
    
    if(heure >= 13){
        let heure = dateActuelle.getHours() - 12;
        displayHeure.innerHTML = heure + ":" + minutes + ":" + secondes + " PM";
    }
    //afficher la date et l'heure dans la balise html heureCopilot
    let displayHeureCopilot = document.getElementById('heureCopilot');
    displayHeureCopilot.innerHTML = jourtxt + " " + year + "-" + mois + "-" + jour + " " + heure + ":" + minutes + ":" + secondes;
}
setInterval(afficheDate, 1000);