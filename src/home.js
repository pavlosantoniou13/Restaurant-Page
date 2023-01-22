const content = document.querySelector(".content")

function home(){
    //Create all elements
    //card0
    let container = document.createElement("div")
    let card = document.createElement("div");
    let title = document.createElement("h1")
    let cardText = document.createElement("div")
    let para = document.createElement("p");
    let info = document.createElement("div")
    let location = document.createElement("p")
    let time = document.createElement("p")


    content.appendChild(container).className = "container";
    container.appendChild(card).className = "card"
    card.appendChild(title).className = "title";
    card.appendChild(cardText).className = "card-text";
    cardText.appendChild(para).className = "para";
    card.appendChild(info).className = "info"
    info.appendChild(location).className = "location"
    info.appendChild(time).className = "time"

    title.innerHTML = "Best Restaraunt in town since 1963"
    cardText.innerHTML = "Come by and try our dishes of the day!"
    location.innerHTML = `1024 Oakwood Ave San Diego, CA 22434`


    
}

export default home