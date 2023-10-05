function createCardActivity(sportName, desc, price1, price2, difficulty, activityImg, link) {
    return `
    <div class="cardActivity">
                <div id="sports_title">
                    <h1>${sportName}</h1>
                </div>
                <div id="sports_paragraph">
                    <p>${desc}</p>
                </div>
                <div id="sports_diff">
                    <img src= ${difficulty}>
                </div>
                <div id="sports_price">
                    <p>Séance Unique : ${price1}
                        <span style="display: block;">Pack 10 séances : ${price2}</span>
                    </p>
                </div>
                <div id="sports_illu">
                    <img src=${activityImg}/>
                </div>
                <div id="coach_button">
                    <a href=${link}>Voir les coach</a>
                </div>
            </div>
    
    `
        ;
}


export default createCardActivity;











