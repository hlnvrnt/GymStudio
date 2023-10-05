
// window.open(url, '#button_cardio')

document.getElementById("button_cardio").onclick = function () {
        location.href = "coach.html#cardio";
        document.getElementById(articleActive).classList.add("disappear"); 
        document.getElementById(articleActive).classList.remove("appear");
    };



// document.getElementById(identifiant_de_ma_div).style.display = block;