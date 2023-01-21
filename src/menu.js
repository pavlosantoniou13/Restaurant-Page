const content = document.querySelector(".content")

function menu(){
    //Create all elements
    let card = document.createElement("div");
    let title = document.createElement("h1")
    let cardText = document.createElement("div")
    let para = document.createElement("p");

    content.appendChild(card).className = "card";
    card.appendChild(title).className = "title";
    card.appendChild(cardText).className = "card-text";
    cardText.appendChild(para).className = "para";

    title.innerHTML = "Menu"
    cardText.innerHTML = "tao tao tao"


    
}


export  default menu
