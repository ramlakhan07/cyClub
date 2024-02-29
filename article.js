var nav = document.querySelector(".sidebar")
var main = document.querySelector(".main")
var nvMenu = document.querySelector(".nav-item")
var isExpended = false
var w = main.width;
var eve = document.querySelector("#id")


function menu(){
    if(window.innerWidth<=1000){
    if(isExpended){
        nav.style.overflow="hidden"
        nav.style.height="10vh"
    }
    else{
        nav.style.height="36vh"
        nav.style.background="white"
    }
    isExpended=!isExpended

    }
    
}
    // if(window.innerWidth<=700){
    //     nvMenu.style.background="white"
    // }


