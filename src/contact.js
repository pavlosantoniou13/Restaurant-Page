const content = document.querySelector(".content")

function contanct(){
    //Create all elements
    let container = document.createElement("div")
    let card = document.createElement("div");
    let title = document.createElement("h1")
    let cardText = document.createElement("div")
    let para = document.createElement("p");

    content.appendChild(container).className = "container";
    container.appendChild(card).className = "card"
    card.appendChild(title).className = "title";
    card.appendChild(cardText).className = "card-text";
    cardText.appendChild(para).className = "para";

    title.innerHTML = "Contact"
    cardText.innerHTML = "htan enas gaidaros me megala autia cringe"



    
}

export default contanct