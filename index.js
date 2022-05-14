const menuButton = document.querySelector(".menu-button")
const unList = document.querySelector(".un-list")
menuButton.addEventListener("click",()=>{
    unList.classList.toggle("mobile-menu")
})