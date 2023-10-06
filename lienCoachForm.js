
// Lien entre page coach et formulaire



// Récupérer la data des boutons des Coach avant d'arriver sur le formulaire
const tab2 = document.querySelectorAll(".buttonCoach2")


tab2.forEach((element) => {
    element.addEventListener("click", functionFromCoach);

})

function functionFromCoach(e) {
    localStorage.removeItem("sport");
    const result2 = e.target.dataset.button;
    localStorage.setItem("sport2", result2);
}


// // Arrivée sur le formulaire pour choix du coach

function init2() {

    let coachOrigin = localStorage.getItem("sport2");
    const selectedCoach2 = document.querySelector("#selectCoachName")
    const selectedSport2 = document.querySelector("#selectSportName")
    const choiceBoxe = document.querySelectorAll(".sportBoxe")
    const choiceCardio = document.querySelectorAll(".sportCardio")
    const choiceMuscu = document.querySelectorAll(".sportMuscu")
    const choiceAquaBike = document.querySelectorAll(".sportAquaBike")
    const choiceAquaGym = document.querySelectorAll(".sportAquaGym")
    const choiceYoga = document.querySelectorAll(".sportYoga")

    const allSports = [choiceBoxe, choiceMuscu, choiceCardio, choiceAquaBike, choiceAquaGym, choiceYoga]


    for (let i = 0; i < selectedCoach2.length; i++) {
        if (coachOrigin === selectedCoach2[i].value) {
            selectedCoach2[i].selected = true
            selectCoach()

            // console.log(allSports)
            // for (let m = 0; m < selectedSport2.length; m++) {
            //     allSports.forEach((element) => {
            //         console.log("allsports :" + element)
            //         if (selectedSport2[m].value === element) {
            //             element.selected = true
            //         }
            //     })

            // }


        }
    }


}

