const content =  document.querySelector(".content")
const contentItem = content.children[0]

function replace(newItem, oldItem){
    const contentItem = content.children[0]
    content.replaceChild(newItem, oldItem)
}

export default replace