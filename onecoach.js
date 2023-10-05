


function init() {
    let sportOrigin = localStorage.getItem("sport");
    console.log(sportOrigin)
    // let sportOrigin = localStorage.getItem("sport");

    function functionDisplayFromButtonCoach() {
        document.getElementById(sportOrigin).classList.add("appear"); // on ajoute la classe appear à l'élément qui a été séléctionné pour le faire apparaitre
        document.getElementById(sportOrigin).classList.remove("disappear"); // on nettoye son ancienne classe dissappear

        // setTimeout(() => {
        //     document.getElementById(sportOrigin).style.display = "none";
        // }, 700);


        document.getElementById("global").dataset.active = sportOrigin; // on associe que l'élément séléctionné devient aussi l'élément "précédent actif" pour le prochain move
        // console.log(this.dataset.section);
    };

    if (sportOrigin == null) {
        document.getElementById("box").classList.remove("disappear")
        document.getElementById("box").classList.add("appear")
    }
    else {
        functionDisplayFromButtonCoach();
    }

    // Lancement de la function Display quand click logo sur page HTML "OneCoach" : 
    document.getElementById("picboxe").onclick = functionDisplay;
    document.getElementById("piccardio").onclick = functionDisplay;
    document.getElementById("picmuscu").onclick = functionDisplay;
    document.getElementById("picyoga").onclick = functionDisplay;
    document.getElementById("picaquabike").onclick = functionDisplay;
    document.getElementById("picaquagym").onclick = functionDisplay;

    document.getElementById("button_aquagym").onclick = functionDisplay;
    document.getElementById("button_aquabike").onclick = functionDisplay;
    document.getElementById("button_yoga").onclick = functionDisplay;
    document.getElementById("button1_boxe").onclick = functionDisplay;
    document.getElementById("button2_boxe").onclick = functionDisplay;
    document.getElementById("button1_muscu").onclick = functionDisplay;
    document.getElementById("button2_muscu").onclick = functionDisplay;
    document.getElementById("button1_cardio").onclick = functionDisplay;
    document.getElementById("button2_cardio").onclick = functionDisplay;

    function functionDisplay() {

        const active = document.getElementById("global").dataset.active



        if (active != this.dataset.section) {

            let articleActive = document.getElementById("global").dataset.active; // on récupère l'élément précédent actif
            console.log(articleActive);

            document.getElementById(articleActive).classList.add("disappear"); // on le fait dispparaitre (via ajout class disappear)
            document.getElementById(articleActive).classList.remove("appear"); // on nettoye son ancienne classe appear


            setTimeout(() => {
                console.log(this);
                document.getElementById(this.dataset.section).classList.add("appear"); // on ajoute la classe appear à l'élément qui a été séléctionné pour le faire apparaitre
                document.getElementById(this.dataset.section).classList.remove("disappear"); // on nettoye son ancienne classe dissappear

                document.getElementById("global").dataset.active = this.dataset.section; // on associe que l'élément séléctionné devient aussi l'élément "précédent actif" pour le prochain move
                console.log(document.getElementById("global").dataset.active);
                console.log(this.dataset.section);
            }, 0);

        }
    }

}

// function init2() {

//     // Lancement de la function Display quand click logo sur page HTML "OneCoach" :
//     document.getElementById("button_aquagym").onclick = functionDisplay;
//     document.getElementById("button_aquabike").onclick = functionDisplay;
//     document.getElementById("button_yoga").onclick = functionDisplay;
//     document.getElementById("button1_boxe").onclick = functionDisplay;
//     document.getElementById("button2_boxe").onclick = functionDisplay;
//     document.getElementById("button1_muscu").onclick = functionDisplay;
//     document.getElementById("button2_muscu").onclick = functionDisplay;
//     document.getElementById("button1_cardio").onclick = functionDisplay;
//     document.getElementById("button2_cardio").onclick = functionDisplay;


//     function functionDisplay() {

//         if (document.getElementById("global").dataset.active != this.dataset.section) {

//             let articleActive = document.getElementById("global").dataset.active; // on récupère l'élément précédent actif
//             console.log(articleActive);

//             document.getElementById(articleActive).classList.add("disappear"); // on le fait dispparaitre (via ajout class disappear)
//             document.getElementById(articleActive).classList.remove("appear"); // on nettoye son ancienne classe appear


//             setTimeout(() => {
//                 console.log(this);
//                 document.getElementById(this.dataset.section).classList.add("appear"); // on ajoute la classe appear à l'élément qui a été séléctionné pour le faire apparaitre
//                 document.getElementById(this.dataset.section).classList.remove("disappear"); // on nettoye son ancienne classe dissappear

//                 document.getElementById("global").dataset.active = this.dataset.section; // on associe que l'élément séléctionné devient aussi l'élément "précédent actif" pour le prochain move
//                 console.log(this.dataset.section);
//             }, 700);

//         }
//     }

// }



