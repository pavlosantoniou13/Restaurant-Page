const content = document.querySelector(".content")

function menu(){
    let container = document.createElement("div")
    let card = document.createElement("div");
    let title = document.createElement("h1")
    let cardText = document.createElement("div")
    let para = document.createElement("p");

    let card1 = document.createElement("div");
    let title1 = document.createElement("h1")
    let cardText1 = document.createElement("div")
    let para1 = document.createElement("p");

    let card2 = document.createElement("div");
    let title2 = document.createElement("h1")
    let cardText2 = document.createElement("div")
    let para2 = document.createElement("p");

    let card3 = document.createElement("div");
    let title3 = document.createElement("h1")
    let cardText3 = document.createElement("div")
    let para3 = document.createElement("p");
    
    

    content.appendChild(container).className = "container";
    container.appendChild(card).className = "menu-card"
    card.appendChild(title).className = "title-menu";
    card.appendChild(cardText).className = "card-text-menu";
    cardText.appendChild(para).className = "para";

    content.appendChild(container).className = "container";
    container.appendChild(card1).className = "menu-card"
    card.appendChild(title1).className = "title";
    card.appendChild(cardText1).className = "card-text-menu";
    cardText.appendChild(para1).className = "para";
    
    content.appendChild(container).className = "container";
    container.appendChild(card2).className = "menu-card"
    card.appendChild(title2).className = "title";
    card.appendChild(cardText2).className = "card-text-menu";
    cardText.appendChild(para2).className = "para";
    
    content.appendChild(container).className = "container";
    container.appendChild(card3).className = "menu-card"
    card.appendChild(title3).className = "title";
    card.appendChild(cardText3).className = "card-text-menu";
    cardText.appendChild(para3).className = "para";
    

    title.innerHTML = "Menu"
    
    
    title1.innerHTML = "ZUCCHINI CHIPS"
    cardText1.innerHTML = "accompanied by cool yogurt sauce"

    title2.innerHTML = "Souvlaki"
    cardText2.innerHTML = "fried potatos"

    title3.innerHTML = "mousakas"
    cardText3.innerHTML = "mousakas einai ti allo thes "
}


export  default menu
