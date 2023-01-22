import './styles/main.css'
import home from "./home";
import menu from "./menu";
import clearBox from "./clear-box";
import contanct from "./contact";

const content = document.querySelector(".content")
const container = document.querySelector("container")
const menuBtn = document.querySelector(".menu")
const homeBtn = document.querySelector(".home")
const contanctBtn = document.querySelector(".contanct")
home()


homeBtn.addEventListener("click", () => {
  // move the card declaration here
  const container = document.querySelector(".container")
  clearBox(content, container)
    home()
    
})



menuBtn.addEventListener("click", () => {
  // and moved the card declaration here
  const container = document.querySelector(".container")
  clearBox(content, container)
  menu()
})

contanctBtn.addEventListener("click", () => {
  // and moved the card declaration here
  const container = document.querySelector(".container")
  clearBox(content, container)
  contanct()
})
