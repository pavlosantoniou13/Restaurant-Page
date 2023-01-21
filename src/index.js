import pageLoad from "./home";
import menu from "./menu";
import clearBox from "./clear-box";
import replace from "./replace-content";
const content = document.querySelector(".content")
const menuBtn = document.querySelector(".menu")
const homeBtn = document.querySelector(".home")
const card = document.querySelector(".card")
const card1 = document.querySelector("card1")
const contentItem = content.children[0]
pageLoad()


homeBtn.addEventListener("click", () => {
  content.replaceChild(pageLoad,pageLoad)
    pageLoad()
    
})



menuBtn.addEventListener("click", () => {
   
    
    
})

