import pageLoad from "./home";
import menu from "./menu";
import clearBox from "./clear-box";
import replace from "./replace-content";
const content = document.querySelector(".content")
const menuBtn = document.querySelector(".menu")
const homeBtn = document.querySelector(".home")
const card = document.querySelector(".card")
pageLoad()


homeBtn.addEventListener("click", () => {
  clearBox(content, card)
    pageLoad()
    
})



menuBtn.addEventListener("click", () => {
   clearBox()
   menu()
    
    
})

