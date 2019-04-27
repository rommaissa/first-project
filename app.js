const openMenu = document.querySelector(".nav-bar__menu");
const overlay = document.querySelector("#nav-menu");

openMenu.addEventListener("click",function(){
    if(openMenu.classList.contains("open-menu")){
        openMenu.classList.remove("open-menu");
        
    }else{
        openMenu.classList.add("open-menu");

    }
});