const content = document.querySelector(".content")

function pageLoad(){
    //Create all elements
    let card1 = document.createElement("div");
    let title = document.createElement("h1")
    let cardText = document.createElement("div")
    let para = document.createElement("p");

    content.appendChild(card1).className = "card";
    card1.appendChild(title).className = "title";
    card1.appendChild(cardText).className = "card-text";
    cardText.appendChild(para).className = "para";

    title.innerHTML = "gamieste"
    cardText.innerHTML = "htan enas gaidaros me megala autia cringe"



    
}

export default pageLoad