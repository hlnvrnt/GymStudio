function init() {

    // Lancement de la function Display quand click logo sur page HTML "activities" : 
    document.getElementById("boxPicto").onclick = functionDisplay; // document.getElementById("boxPicto") = correspond à l'objet BoxPicto. On pointe vers la fonction, donc pas de (), sinon ca va l'appeler.
    document.getElementById("cardioPicto").onclick = functionDisplay;
    document.getElementById("musculationPicto").onclick = functionDisplay;
    document.getElementById("yogaPicto").onclick = functionDisplay;
    document.getElementById("aquagymPicto").onclick = functionDisplay;
    document.getElementById("aquabikePicto").onclick = functionDisplay;

    console.log(document.getElementById("global").dataset.active)

    function functionDisplay() {

        if (document.getElementById("global").dataset.active != this.dataset.section) {

            let articleActive = document.getElementById("global").dataset.active; // on récupère l'élément précédent actif
            console.log(articleActive);

            document.getElementById(articleActive).classList.add("disappear"); // on le fait dispparaitre (via ajout class disappear)
            document.getElementById(articleActive).classList.remove("appear"); // on nettoye son ancienne classe appear


            setTimeout(() => {
                console.log(this);
                document.getElementById(this.dataset.section).classList.add("appear"); // on ajoute la classe appear à l'élément qui a été séléctionné pour le faire apparaitre
                document.getElementById(this.dataset.section).classList.remove("disappear"); // on nettoye son ancienne classe dissappear

                document.getElementById("global").dataset.active = this.dataset.section; // on associe que l'élément séléctionné devient aussi l'élément "précédent actif" pour le prochain move
                console.log(this.dataset.section);
            }, 700);

        }
    }
}
