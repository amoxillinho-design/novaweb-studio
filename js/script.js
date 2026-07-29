/*==================================================
            NOVAWEB STUDIO
              SCRIPT.JS
==================================================*/

/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuBtn.classList.toggle("open");

    });

}

/*==============================
SMOOTH NAVIGATION
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        nav.classList.remove("active");

    });

});

/*==============================
HEADER ON SCROLL
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(5,15,30,.85)";
        header.style.backdropFilter="blur(25px)";
        header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(5,15,30,.55)";
        header.style.boxShadow="none";

    }

});

/*==============================
ACTIVE MENU
==============================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/*==============================
COUNTER ANIMATION
==============================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==============================
FADE IN ANIMATION
==============================*/

const reveal=document.querySelectorAll(

".service-card,.portfolio-card,.price-card,.testimonial-card,.feature,.stat-box"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

reveal.forEach(item=>{

item.classList.add("fade-up");

observer.observe(item);

});
/*==================================================
            HERO PARALLAX
==================================================*/

const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");
const cards = document.querySelectorAll(".floating-card");

if(hero){

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/30;
const y=(window.innerHeight/2-e.clientY)/30;

heroImage.style.transform=`
rotateY(${-x}deg)
rotateX(${y}deg)
translateZ(30px)
`;

cards.forEach((card,index)=>{

const speed=(index+1)*8;

card.style.transform=`
translate(${x*speed}px,${y*speed}px)
`;

});

});

hero.addEventListener("mouseleave",()=>{

heroImage.style.transform="rotateX(0deg) rotateY(0deg)";

cards.forEach(card=>{

card.style.transform="translate(0px,0px)";

});

});

}

/*==================================================
        BACK TO TOP BUTTON
==================================================*/

const topButton=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topButton.style.opacity="1";
topButton.style.visibility="visible";
topButton.style.transform="translateY(0px)";

}

else{

topButton.style.opacity="0";
topButton.style.visibility="hidden";
topButton.style.transform="translateY(30px)";

}

});

if(topButton){

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==================================================
        CURSOR GLOW
==================================================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

/*==================================================
        MAGNETIC BUTTONS
==================================================*/

const buttons=document.querySelectorAll(".primary-btn,.secondary-btn,.btn");

buttons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

button.style.transform=`
translate(
${(x-rect.width/2)/10}px,
${(y-rect.height/2)/10}px)
`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

/*==================================================
      FLOATING BLOBS RANDOM MOVEMENT
==================================================*/

const blobs=document.querySelectorAll(".blob");

setInterval(()=>{

blobs.forEach(blob=>{

const x=Math.random()*80-40;

const y=Math.random()*80-40;

blob.style.transform=`
translate(${x}px,${y}px)
`;

});

},5000);

/*==================================================
        HERO IMAGE FLOAT
==================================================*/

let angle=0;

setInterval(()=>{

angle+=0.02;

heroImage.style.marginTop=(Math.sin(angle)*10)+"px";

},30);
/*==================================================
        3D CARD TILT EFFECT
==================================================*/

const tiltCards=document.querySelectorAll(
".service-card,.portfolio-card,.price-card,.testimonial-card"
);

tiltCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/18);

const rotateX=((rect.height/2-y)/18);

card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-12px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});

/*==================================================
        PAGE FADE-IN
==================================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

});

/*==================================================
        SCROLL PROGRESS BAR
==================================================*/

const progress=document.createElement("div");

progress.id="scrollProgress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressWidth=(scrollTop/height)*100;

progress.style.width=progressWidth+"%";

});

/*==================================================
        CLICK SPARKLE EFFECT
==================================================*/

document.addEventListener("click",(e)=>{

for(let i=0;i<10;i++){

const particle=document.createElement("span");

particle.className="spark";

particle.style.left=e.clientX+"px";

particle.style.top=e.clientY+"px";

particle.style.setProperty("--x",(Math.random()*200-100)+"px");

particle.style.setProperty("--y",(Math.random()*200-100)+"px");

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},1000);

}

});

/*==================================================
        HERO TEXT TYPE EFFECT
==================================================*/

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

const text=heroTitle.innerText;

heroTitle.innerText="";

let index=0;

function typeWriter(){

if(index<text.length){

heroTitle.innerHTML+=text.charAt(index);

index++;

setTimeout(typeWriter,35);

}

}

setTimeout(typeWriter,700);

}

/*==================================================
        FLOATING ICONS
==================================================*/

const icons=document.querySelectorAll(".service-card i");

icons.forEach((icon,index)=>{

setInterval(()=>{

icon.style.transform=`translateY(${Math.sin(Date.now()/500+index)*8}px)`;

},20);

});

/*==================================================
        RANDOM GLOW PULSE
==================================================*/

setInterval(()=>{

document.querySelectorAll(".service-card,.price-card").forEach(card=>{

card.style.boxShadow=`
0 0 ${20+Math.random()*40}px
rgba(37,99,235,.25)
`;

});

},2500);

/*==================================================
        CONSOLE SIGNATURE
==================================================*/

console.log("%cNovaWeb Studio","font-size:30px;color:#38bdf8;font-weight:bold;");
console.log("%cDesigned with ❤️","font-size:16px;color:white;");