/*==================================================
SHIREEN ❤️ NAZEER
PREMIUM WEDDING INVITATION
SCRIPT.JS
PART 1
==================================================*/

"use strict";

/*==============================
ELEMENTS
==============================*/

const header=document.getElementById("header");

const nav=document.getElementById("nav");

const menuButton=document.getElementById("menuButton");

const topButton=document.getElementById("topButton");

const shareButton=document.getElementById("shareButton");

const year=document.getElementById("year");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

const galleryImages=document.querySelectorAll(".gallery-item img");

const starsBack=document.getElementById("stars-back");

const starsMiddle=document.getElementById("stars-middle");

const starsFront=document.getElementById("stars-front");

const particles=document.getElementById("gold-particles");

const shooting=document.getElementById("shooting-stars");

/*==============================
YEAR
==============================*/

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
HEADER
==============================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==============================
TOP BUTTON
==============================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
MOBILE MENU
==============================*/

menuButton.addEventListener("click",()=>{

nav.classList.toggle("active");

});

document.querySelectorAll("#nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});

/*==============================
LIGHTBOX
==============================*/

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=img.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});

/*==============================
PART 2
==============================*/
/*==============================
SHARE BUTTON
==============================*/

if(shareButton){

shareButton.addEventListener("click",async()=>{

const shareData={

title:"Shireen ❤️ Nazeer Wedding Invitation",

text:"You are warmly invited to our wedding ceremony.",

url:window.location.href

};

if(navigator.share){

try{

await navigator.share(shareData);

}catch(error){

console.log(error);

}

}else{

navigator.clipboard.writeText(window.location.href);

alert("Invitation link copied successfully.");

}

});

}

/*==============================
FADE ANIMATION
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

},{

threshold:.15

});

document.querySelectorAll("section,.glass-card,.person-card,.family-card,.detail-card,.gallery-item").forEach(item=>{

observer.observe(item);

});

/*==============================
CREATE STARS
==============================*/

function createStars(layer,total,size){

for(let i=0;i<total;i++){

const star=document.createElement("span");

const s=Math.random()*size+1;

star.style.position="absolute";

star.style.width=s+"px";

star.style.height=s+"px";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.background="#ffffff";

star.style.borderRadius="50%";

star.style.opacity=Math.random();

star.style.animation=

`twinkle ${2+Math.random()*4}s infinite`;

star.style.animationDelay=

Math.random()*6+"s";

layer.appendChild(star);

}

}

createStars(starsBack,120,2);

createStars(starsMiddle,80,3);

createStars(starsFront,40,4);

/*==============================
GOLD PARTICLES
==============================*/

function createParticle(){

const dot=document.createElement("span");

const size=Math.random()*5+2;

dot.style.position="absolute";

dot.style.width=size+"px";

dot.style.height=size+"px";

dot.style.left=Math.random()*100+"%";

dot.style.bottom="-20px";

dot.style.borderRadius="50%";

dot.style.background="rgba(212,175,55,.9)";

dot.style.boxShadow="0 0 12px gold";

dot.style.animation=

`floatDust ${6+Math.random()*6}s linear forwards`;

particles.appendChild(dot);

setTimeout(()=>{

dot.remove();

},12000);

}

setInterval(createParticle,250);

/*==============================
PART 3
==============================*/
/*==============================
SHOOTING STARS
==============================*/

function createShootingStar(){

const star=document.createElement("span");

star.style.position="absolute";

star.style.top=Math.random()*35+"%";

star.style.right="-200px";

star.style.width=220+"px";

star.style.height="2px";

star.style.background=

"linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))";

star.style.transform="rotate(315deg)";

star.style.opacity="0";

star.style.animation=

`shooting ${2+Math.random()}s linear forwards`;

shooting.appendChild(star);

setTimeout(()=>{

star.remove();

},3500);

}

setInterval(()=>{

createShootingStar();

},4000);

/*==============================
SMOOTH ACTIVE MENU
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

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

/*==============================
PARALLAX
==============================*/

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

starsBack.style.transform=

`translate(${x*8}px,${y*8}px)`;

starsMiddle.style.transform=

`translate(${x*15}px,${y*15}px)`;

starsFront.style.transform=

`translate(${x*25}px,${y*25}px)`;

});

/*==============================
PREVENT IMAGE DRAG
==============================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/*==============================
SCRIPT COMPLETE
==============================*/

console.log(

"✨ Premium Wedding Invitation Loaded Successfully ✨"

);
