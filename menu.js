
function showMenu() {
    const menu = document.querySelector(".display")
    menu.style.height = "100%";
  
    
}
function closeMenu() {
    const menu = document.querySelector(".display");
    menu.style.height = "0";
}
function addClickToMenuItems() {
    const menuItems = document.querySelectorAll("section .display .mobile-nav");
    for (let menuItem of menuItems) {
        menuItem.addEventListener("click", closeMenu)
    }
}
document.getElementById("button-menu").addEventListener("click", showMenu)
document.getElementById("close").addEventListener("click", closeMenu)
addClickToMenuItems();
