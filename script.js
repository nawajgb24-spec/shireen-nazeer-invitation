/*==================================================
SHIREEN ❤️ NAZEER
PREMIUM WEDDING WEBSITE
SCRIPT.JS
PART 1
==================================================*/

"use strict";

/*==================================================
SELECTORS
==================================================*/

const header = document.querySelector("header");

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".navbar a");

const sections = document.querySelectorAll("section");

const backToTop = document.querySelector(".back-to-top");

const heroButton = document.querySelector(".hero-btn");

const countdown = document.getElementById("countdown");

const modal = document.querySelector(".image-modal");

const modalImage = document.querySelector(".image-modal img");

const modalClose = document.querySelector(".image-modal .close");

const invitationImage = document.querySelector(".invitation-image");

const galleryImages = document.querySelectorAll(".gallery-item img");

const shareButton = document.querySelector(".share-btn");

const fadeElements = document.querySelectorAll(".fade-up");

/*==================================================
WEDDING DATE
CHANGE ONLY THIS DATE IF REQUIRED
==================================================*/

const weddingDate = new Date(

"2026-08-23T11:00:00"

);

/*==================================================
SMOOTH SCROLL
==================================================*/

navLinks.forEach(link=>{

link.addEventListener("click",e=>{

const href=link.getAttribute("href");

if(!href.startsWith("#")) return;

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

/*==================================================
HEADER EFFECT
==================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.padding="0";

navbar.style.background="rgba(0,0,0,.65)";

navbar.style.backdropFilter="blur(22px)";

navbar.style.boxShadow="0 20px 60px rgba(0,0,0,.45)";

}else{

navbar.style.background="rgba(0,0,0,.35)";

navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.28)";

}

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

navLinks.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(href==="#"+entry.target.id){

link.classList.add("active");

}

});

}

});

},

{

threshold:.45

}

);

sections.forEach(section=>observer.observe(section));

/*==================================================
BACK TO TOP
==================================================*/

/*==================================================
BACK TO TOP
==================================================*/

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==================================================
HERO BUTTON
==================================================*/

if(heroButton){

heroButton.addEventListener("click",()=>{

const target=document.querySelector("#nikah");

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

}

/*==================================================
LIVE COUNTDOWN
==================================================*/

function updateCountdown(){

const now=new Date().getTime();

const distance=weddingDate.getTime()-now;

if(distance<=0){

countdown.innerHTML=`

<div class="count-box pulse">

<span>0</span>

<small>Days</small>

</div>

<div class="count-box pulse">

<span>0</span>

<small>Hours</small>

</div>

<div class="count-box pulse">

<span>0</span>

<small>Minutes</small>

</div>

<div class="count-box pulse">

<span>0</span>

<small>Seconds</small>

</div>

`;

launchConfetti();

return;

}

const days=Math.floor(

distance/

(1000*60*60*24)

);

const hours=Math.floor(

(distance%(1000*60*60*24))/

(1000*60*60)

);

const minutes=Math.floor(

(distance%(1000*60*60))/

(1000*60)

);

const seconds=Math.floor(

(distance%(1000*60))/

1000

);

countdown.innerHTML=`

<div class="count-box">

<span>${days}</span>

<small>Days</small>

</div>

<div class="count-box">

<span>${hours}</span>

<small>Hours</small>

</div>

<div class="count-box">

<span>${minutes}</span>

<small>Minutes</small>

</div>

<div class="count-box">

<span>${seconds}</span>

<small>Seconds</small>

</div>

`;

}

updateCountdown();

setInterval(updateCountdown,1000);

/*==================================================
SCROLL REVEAL
==================================================*/

const revealObserver=new IntersectionObserver(entries=>{

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

fadeElements.forEach(el=>{

revealObserver.observe(el);

});

/*==================================================
IMAGE MODAL
==================================================*/

function openImage(src){

modalImage.src=src;

modal.classList.add("show");

document.body.style.overflow="hidden";

}

function closeImage(){

modal.classList.remove("show");

document.body.style.overflow="auto";

}

if(invitationImage){

invitationImage.addEventListener("click",()=>{

openImage(invitationImage.src);

});

}

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

openImage(image.src);

});

});

modalClose.addEventListener("click",closeImage);

modal.addEventListener("click",e=>{

if(e.target===modal){

closeImage();

}

});

window.addEventListener("keydown",e=>{

if(e.key==="Escape"){

closeImage();

}

});

/*==================================================
SHARE INVITATION
==================================================*/

if(shareButton){

shareButton.addEventListener("click",async()=>{

const shareData={

title:"Shireen ❤️ Nazeer Wedding Invitation",

text:"You are warmly invited to celebrate the Nikah Ceremony of Shireen & Nazeer.",

url:window.location.href

};

try{

if(navigator.share){

await navigator.share(shareData);

}else{

await navigator.clipboard.writeText(window.location.href);

alert("Invitation link copied successfully.");

}

}catch(error){

console.log(error);

}

});

}

/*==================================================
OPEN GOOGLE MAP
==================================================*/

const mapButtons=document.querySelectorAll(".open-map");

mapButtons.forEach(button=>{

button.addEventListener("click",()=>{

window.open(

"https://maps.app.goo.gl/8X64YJ5tFzhLU9hC9",

"_blank"

);

});

});

/*==================================================
GOLDEN PARTICLES
==================================================*/

const particleContainer=document.querySelector(".gold-particles");

function createParticle(){

if(!particleContainer) return;

const particle=document.createElement("span");

const size=Math.random()*6+2;

particle.style.position="absolute";

particle.style.width=size+"px";

particle.style.height=size+"px";

particle.style.borderRadius="50%";

particle.style.background="rgba(212,175,55,.9)";

particle.style.boxShadow="0 0 12px rgba(212,175,55,.8)";

particle.style.left=Math.random()*100+"%";

particle.style.bottom="-20px";

particle.style.opacity=Math.random();

particle.style.pointerEvents="none";

particle.style.transition="transform linear, opacity linear";

particleContainer.appendChild(particle);

const duration=7000+Math.random()*5000;

requestAnimationFrame(()=>{

particle.style.transform=`translateY(-${window.innerHeight+200}px)`;

particle.style.opacity="0";

particle.style.transitionDuration=duration+"ms";

});

setTimeout(()=>{

particle.remove();

},duration);

}

setInterval(createParticle,350);

/*==================================================
SHOOTING STARS
==================================================*/

const shootingStars=document.querySelectorAll(".shooting-stars span");

function randomStar(){

shootingStars.forEach(star=>{

star.style.top=Math.random()*80+"%";

star.style.left=(-20-Math.random()*30)+"%";

star.style.animationDelay=(Math.random()*8)+"s";

star.style.animationDuration=(5+Math.random()*5)+"s";

});

}

randomStar();

setInterval(randomStar,9000);

/*==================================================
HERO PARALLAX
==================================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(!hero) return;

const offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*0.35+"px";

});

/*==================================================
CONFETTI CELEBRATION
==================================================*/

let confettiRunning=false;

function launchConfetti(){

if(confettiRunning) return;

confettiRunning=true;

const container=document.createElement("div");

container.style.position="fixed";

container.style.inset="0";

container.style.pointerEvents="none";

container.style.overflow="hidden";

container.style.zIndex="999999";

document.body.appendChild(container);

const colors=[

"#D4AF37",

"#FFD86B",

"#ffffff",

"#7A0019"

];

for(let i=0;i<180;i++){

const piece=document.createElement("span");

piece.style.position="absolute";

piece.style.width=(6+Math.random()*8)+"px";

piece.style.height=(10+Math.random()*16)+"px";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.background=

colors[Math.floor(Math.random()*colors.length)];

piece.style.opacity=".95";

piece.style.borderRadius="2px";

piece.style.transform=

`rotate(${Math.random()*360}deg)`;

piece.style.transition=

`transform ${4+Math.random()*4}s linear,
 top ${4+Math.random()*4}s linear,
 opacity 1s linear`;

container.appendChild(piece);

requestAnimationFrame(()=>{

piece.style.top="110vh";

piece.style.transform=

`translateX(${(Math.random()-.5)*250}px)
rotate(${Math.random()*1080}deg)`;

});

}

setTimeout(()=>{

container.remove();

confettiRunning=false;

},9000);

}

/*==================================================
FLOATING GLOW ORBS
==================================================*/

const glowContainer=document.querySelector(".night-sky");

function createGlow(){

if(!glowContainer) return;

const orb=document.createElement("span");

const size=30+Math.random()*120;

orb.style.position="absolute";

orb.style.width=size+"px";

orb.style.height=size+"px";

orb.style.borderRadius="50%";

orb.style.pointerEvents="none";

orb.style.filter="blur(25px)";

orb.style.opacity=".08";

orb.style.background=

"radial-gradient(circle,#D4AF37,transparent)";

orb.style.left=Math.random()*100+"%";

orb.style.top=(50+Math.random()*40)+"%";

orb.style.transition="12s linear";

glowContainer.appendChild(orb);

requestAnimationFrame(()=>{

orb.style.transform=

`translateY(-500px)
translateX(${(Math.random()-.5)*250}px)
scale(${.4+Math.random()})`;

orb.style.opacity="0";

});

setTimeout(()=>{

orb.remove();

},12000);

}

setInterval(createGlow,2500);

/*==================================================
CARD HOVER EFFECT
==================================================*/

document.querySelectorAll(

".glass-card,.hero-card,.detail-box,.language-card,.person"

).forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*10;

const rotateX=((y/rect.height)-0.5)*-10;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/*==================================================
PRELOAD IMAGES
==================================================*/

document.querySelectorAll("img").forEach(image=>{

const preload=new Image();

preload.src=image.src;

});

/*==================================================
LOADING SCREEN
==================================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.transition="all .8s ease";

setTimeout(()=>{

loader.remove();

},900);

}

});

/*==================================================
CURRENT YEAR
==================================================*/

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==================================================
NAVBAR MOBILE TOGGLE
==================================================*/

const menuButton=document.querySelector(".menu-toggle");

const navMenu=document.querySelector(".navbar ul");

if(menuButton && navMenu){

menuButton.addEventListener("click",()=>{

navMenu.classList.toggle("open");

menuButton.classList.toggle("active");

});

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("open");

menuButton.classList.remove("active");

});

});

}

/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(

".hero-btn,.calendar-btn,.contact-btn,.share-btn"

).forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.position="absolute";

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.35)";

ripple.style.transform="scale(0)";

ripple.style.pointerEvents="none";

ripple.style.transition="transform .6s, opacity .6s";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(3)";

ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},650);

});

});

/*==================================================
TYPEWRITER EFFECT
==================================================*/

const heroSubtitle=document.querySelector(".hero-subtitle");

if(heroSubtitle){

const text=heroSubtitle.textContent;

heroSubtitle.textContent="";

let index=0;

function typeWriter(){

if(index<text.length){

heroSubtitle.textContent+=text.charAt(index);

index++;

setTimeout(typeWriter,30);

}

}

setTimeout(typeWriter,800);

}

/*==================================================
PAGE VISIBILITY
==================================================*/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="🌙 We are waiting for you...";

}else{

document.title="Shireen ❤️ Nazeer Wedding Invitation";

}

});

/*==================================================
PERFORMANCE
==================================================*/

window.addEventListener("resize",()=>{

randomStar();

});

console.log(

"%c✨ Premium Wedding Website Loaded Successfully ✨",

"color:#D4AF37;font-size:16px;font-weight:bold;"

);
