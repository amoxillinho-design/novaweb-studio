// ===================================
// NAVIGATION MENU
// ===================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if(menuBtn && nav){

    menuBtn.addEventListener("click",()=>{

        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");

    });

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            menuBtn.classList.remove("active");
            nav.classList.remove("active");

        });

    });

}