// ==========================================
// ELITE CUTS BARBER SHOP
// script.js
// ==========================================

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";

    }

});



// Scroll Reveal Animation

const revealItems = document.querySelectorAll(

".card,.barber,.gallery img,.contact form"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.2

});

revealItems.forEach(item=>{

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".8s ease";

    revealObserver.observe(item);

});



// Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#d4af37";
topButton.style.color = "#111";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// Contact Form

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name = form.querySelector("input[type='text']").value;

        if(name.trim() === ""){

            alert("Please enter your name.");

            return;

        }

        alert("Thank you " + name + "! Your appointment request has been received.");

        form.reset();

    });

}



// Hover Effect for Service Cards

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0) scale(1)";

    });

});



// Barber Image Zoom

const barberImages = document.querySelectorAll(".barber img");

barberImages.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform = "scale(1.08)";

        img.style.transition = ".5s";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform = "scale(1)";

    });

});



// Current Year

const footer = document.querySelector("footer");

if(footer){

    const year = new Date().getFullYear();

    footer.innerHTML = "© " + year + " Elite Cuts Barber Shop. All Rights Reserved.";

}
