
// Lien entre page coach et formulaire



// Récupérer la data des boutons des Coach avant d'arriver sur le formulaire
const tab2 = document.querySelectorAll(".buttonCoach2")
console.log("blabla" + tab2)

tab2.forEach((element) => {
    element.addEventListener("click", functionFromCoach);
    console.log(element)
})

function functionFromCoach(e) {
    localStorage.removeItem("sport");
    const result2 = e.target.dataset.button;
    localStorage.setItem("sport2", result2);
    console.log("blabalzdeznfizn" + result2)
}



// // Arrivée sur le formulaire pour choix du coach
// const selectedCoach2 = document.querySelector("#selectCoachName")
// // let choiceCoach = selectedCoach.dataset.select;

// for (let i = 0; i < selectedCoach2.length; i++) {
//     console.log("zaajdbnazl" + selectedCoach2[i].value)
// }


// function init2() {

//     let coachOrigin = localStorage.getItem("sport2");
//     console.log(coachOrigin)

//     for (let i = 0; i < selectedCoach.length; i++) {
//         if (coachOrigin === selectedCoach[i].dataset.select) {
//             selectedCoach[i].style.display = "block";
//         }
//     }


// }
