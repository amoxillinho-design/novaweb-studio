// ======================================
// ROYAL TASTE RESTAURANT
// script.js
// ======================================

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// Sticky Header

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.9)";

header.style.boxShadow="0 8px 25px rgba(0,0,0,.3)";

}else{

header.style.background="rgba(0,0,0,.55)";

header.style.boxShadow="none";

}

});


// Scroll Reveal

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});


document.querySelectorAll(".card,.about,.gallery img,.contact form").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

observer.observe(item);

});


// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Back To Top Button

const topBtn=document.createElement("div");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.background="#f59e0b";
topBtn.style.color="white";
topBtn.style.display="flex";
topBtn.style.justifyContent="center";
topBtn.style.alignItems="center";
topBtn.style.borderRadius="50%";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="22px";
topBtn.style.opacity="0";
topBtn.style.transition=".3s";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";

}else{

topBtn.style.opacity="0";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Reservation Form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your reservation request has been received.");

form.reset();

});

}