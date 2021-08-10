const humberger = document.querySelector(".header .nav-bar .nav-list .humberger");
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");

humberger.addEventListener("click",function(){
    humberger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll",function(){
    var scrollPosition = window.scrollY;
    if(scrollPosition>250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

menuItem.forEach(function(item){
    item.addEventListener("click",function(){
        humberger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    })
});

