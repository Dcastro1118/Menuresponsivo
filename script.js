const menu = document.querySelector(".more")
const dropdown = document.querySelector(".links")
let visible = true;

menu.addEventListener("click", togglemenu);


function togglemenu() {

    if (visible) {
        dropdown.style.display = "none";
    } 
    else {
        dropdown.style.display = "block";
    }
    visible = !visible;
}