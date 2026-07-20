/*==================================================
SHIREEN ❤️ NAZEER
PREMIUM ISLAMIC WEDDING INVITATION
SCRIPT.JS
PART 1
==================================================*/

"use strict";

/*==============================
SELECTORS
==============================*/

const loader=document.querySelector(".loader");

const header=document.querySelector("header");

const menuToggle=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".navbar ul");

const navItems=document.querySelectorAll(".navbar ul li a");

const backToTop=document.querySelector(".back-to-top");

const imageModal=document.querySelector(".image-modal");

const modalImage=imageModal?
imageModal.querySelector("img"):null;

const galleryImages=document.querySelectorAll(".gallery-item img");

const shareButton=document.querySelector(".share-btn");

const countdown=document.getElementById("countdown");

const year=document.querySelector(".current-year");

const goldParticles=document.querySelector(".gold-particles");

/*==============================
CURRENT YEAR
==============================*/

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
LOADER
==============================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.pointerEvents="none";

}

},1200);

});

/*==============================
HEADER EFFECT
==============================*/

window.addEventListener("scroll",()=>{

if(!header) return;

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==============================
BACK TO TOP
==============================*/

window.addEventListener("scroll",()=>{

if(!backToTop) return;

if(window.scrollY>600){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==============================
MOBILE MENU
==============================*/

if(menuToggle && navLinks){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("open");

menuToggle.classList.toggle("active");

});

}

navItems.forEach(link=>{

link.addEventListener("click",()=>{

if(menuToggle && navLinks){

navLinks.classList.remove("open");

menuToggle.classList.remove("active");

}

});

});

/*==============================
SMOOTH ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(href===`#${current}`){

link.classList.add("active");

}

});

});

/*==============================
COUNTDOWN
==============================*/

/*
IMPORTANT

Replace the date below with your
actual Nikah date and time.

Example:
2026-12-25T11:00:00

*/

const weddingDate=new Date("2026-12-25T11:00:00").getTime();

function updateCountdown(){

if(!countdown) return;

const now=new Date().getTime();

const distance=weddingDate-now;

if(distance<=0){

countdown.innerHTML=`

<div class="count-box">

<h2>🎉</h2>

<span>Wedding Day Mubarak</span>

</div>

`;

return;

}

const days=Math.floor(

distance/(1000*60*60*24)

);

const hours=Math.floor(

(distance%(1000*60*60*24))

/

(1000*60*60)

);

const minutes=Math.floor(

(distance%(1000*60*60))

/

(1000*60)

);

const seconds=Math.floor(

(distance%(1000*60))

/

1000

);

countdown.innerHTML=`

<div class="count-box">

<h2>${days}</h2>

<span>Days</span>

</div>

<div class="count-box">

<h2>${hours}</h2>

<span>Hours</span>

</div>

<div class="count-box">

<h2>${minutes}</h2>

<span>Minutes</span>

</div>

<div class="count-box">

<h2>${seconds}</h2>

<span>Seconds</span>

</div>

`;

}

updateCountdown();

setInterval(updateCountdown,1000);

/*==============================
SCROLL REVEAL
==============================*/

const revealItems=document.querySelectorAll(".fade-up");

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*==============================
IMAGE MODAL
==============================*/

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

if(!imageModal || !modalImage) return;

modalImage.src=image.src;

imageModal.classList.add("show");

document.body.style.overflow="hidden";

});

});

if(imageModal){

imageModal.addEventListener("click",()=>{

imageModal.classList.remove("show");

document.body.style.overflow="";

});

}

/*==============================
SHARE BUTTON
==============================*/

if(shareButton){

shareButton.addEventListener("click",async()=>{

const shareData={

title:"Shireen ❤️ Nazeer Wedding",

text:"You are warmly invited to our wedding ceremony.",

url:window.location.href

};

try{

if(navigator.share){

await navigator.share(shareData);

}else{

await navigator.clipboard.writeText(window.location.href);

alert("Invitation link copied successfully.");

}

}catch(e){

console.log(e);

}

});

}

/*==============================
GOLDEN FLOATING PARTICLES
==============================*/

if(goldParticles){

for(let i=0;i<45;i++){

const particle=document.createElement("span");

const size=Math.random()*6+2;

particle.style.position="absolute";

particle.style.width=size+"px";

particle.style.height=size+"px";

particle.style.borderRadius="50%";

particle.style.background="rgba(212,175,55,.85)";

particle.style.left=Math.random()*100+"%";

particle.style.top=Math.random()*100+"%";

particle.style.opacity=(Math.random()*0.7+0.2).toFixed(2);

particle.style.animation=`
floatParticle
${Math.random()*12+10}s
linear
infinite`;

particle.style.animationDelay=`
-${Math.random()*12}s`;

goldParticles.appendChild(particle);

}

}

/*==============================
SHOOTING STARS
==============================*/

const shootingStars=document.querySelectorAll(".shooting-stars span");

shootingStars.forEach((star,index)=>{

star.style.top=Math.random()*50+"%";

star.style.left=Math.random()*100+"%";

star.style.animationDelay=(index*2)+"s";

star.style.animationDuration=(6+Math.random()*4)+"s";

});

/*==============================
KEYBOARD SHORTCUTS
==============================*/

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape" && imageModal){

imageModal.classList.remove("show");

document.body.style.overflow="";

}

});

/*==============================
PREVENT IMAGE DRAG
==============================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/*==============================
PREVENT RIGHT CLICK
(OPTIONAL - REMOVE IF NOT NEEDED)
==============================*/

// document.addEventListener("contextmenu",(e)=>{
// e.preventDefault();
// });

/*==============================
WINDOW RESIZE
==============================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>992){

if(navLinks){

navLinks.classList.remove("open");

}

if(menuToggle){

menuToggle.classList.remove("active");

}

}

});

/*==============================
INITIALIZATION
==============================*/

console.log(

"✨ Premium Islamic Wedding Invitation Loaded Successfully"

);

console.log(

"❤️ Shireen & Nazeer"

);

/*==================================================
SCRIPT.JS COMPLETED
==================================================*/
