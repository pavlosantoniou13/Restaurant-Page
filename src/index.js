import pageLoad from "./home";
import menu from "./menu";
import clearBox from "./clear-box";
import replace from "./replace-content";
const content = document.querySelector(".content")
const menuBtn = document.querySelector(".menu")
const homeBtn = document.querySelector(".home")
pageLoad()


homeBtn.addEventListener("click", () => {
  // move the card declaration here
  const card = document.querySelector(".card")
  clearBox(content, card)
    pageLoad()
    
})



menuBtn.addEventListener("click", () => {
  // and moved the card declaration here
  const card = document.querySelector(".card")
  clearBox(content, card)
  menu()
})
