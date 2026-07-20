/*==================================================
    SHIREEN & NAZEER
    PREMIUM WEDDING WEBSITE
==================================================*/

"use strict";

/*=========================================
 LOADER
=========================================*/

window.addEventListener("load", () => {

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

setTimeout(()=>{

loader.remove();

},700);

},1800);

});

/*=========================================
 SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

});

});

/*=========================================
 COUNTDOWN
=========================================*/

const eventDate=new Date("2026-08-09T11:30:00").getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=eventDate-now;

if(distance<=0){

document.getElementById("days").textContent="00";
document.getElementById("hours").textContent="00";
document.getElementById("minutes").textContent="00";
document.getElementById("seconds").textContent="00";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

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

document.getElementById("days").textContent=String(days).padStart(2,"0");

document.getElementById("hours").textContent=String(hours).padStart(2,"0");

document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/*=========================================
 SHARE BUTTON
=========================================*/

const shareBtn=document.getElementById("shareButton");

if(shareBtn){

shareBtn.addEventListener("click",async()=>{

const shareData={

title:"Shireen ❤️ Nazeer Wedding Invitation",

text:"You are cordially invited to our Nikah Ceremony.",

url:window.location.href

};

if(navigator.share){

try{

await navigator.share(shareData);

}catch(e){

console.log(e);

}

}else{

navigator.clipboard.writeText(window.location.href);

alert("Invitation link copied successfully.");

}

});

}

/*==================================================
    SCROLL REVEAL ANIMATION
==================================================*/

const revealElements=document.querySelectorAll(

".section-title,.person,.detail-box,.contact-btn,.map-box,.invite-box,.calendar-box,.qr-box,.dua-box,.footer-box"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
observer.unobserve(entry.target);

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="all .8s ease";

observer.observe(el);

});


/*==================================================
    BACK TO TOP BUTTON
==================================================*/

const topBtn=document.createElement("button");

topBtn.id="topButton";

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{

position:"fixed",
right:"25px",
bottom:"25px",
width:"58px",
height:"58px",
borderRadius:"50%",
border:"none",
background:"#7a0019",
color:"#fff",
fontSize:"24px",
cursor:"pointer",
display:"none",
zIndex:"9999",
boxShadow:"0 10px 25px rgba(0,0,0,.25)",
transition:".3s"

});

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>350

?

"block"

:

"none";

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==================================================
    ACTIVE BUTTON EFFECT
==================================================*/

document.querySelectorAll(

".hero-btn,.contact-btn,.calendar-btn,.share-btn"

).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});


/*==================================================
    PAGE TITLE BLINK
==================================================*/

const originalTitle=document.title;

let blink=false;

setInterval(()=>{

if(document.hidden){

document.title=

blink

?

"💍 Wedding Invitation"

:

originalTitle;

blink=!blink;

}else{

document.title=originalTitle;

}

},1500);

/*==================================================
    FLOATING GOLD PARTICLES
==================================================*/

const particleContainer=document.createElement("div");

particleContainer.id="particles";

Object.assign(particleContainer.style,{

position:"fixed",
top:"0",
left:"0",
width:"100%",
height:"100%",
pointerEvents:"none",
overflow:"hidden",
zIndex:"1"

});

document.body.appendChild(particleContainer);

function createParticle(){

const p=document.createElement("span");

const size=Math.random()*8+4;

Object.assign(p.style,{

position:"absolute",
width:size+"px",
height:size+"px",
borderRadius:"50%",
background:"rgba(212,175,55,.55)",
left:Math.random()*window.innerWidth+"px",
top:window.innerHeight+20+"px",
opacity:.8,
transition:"transform 12s linear, opacity 12s linear"

});

particleContainer.appendChild(p);

requestAnimationFrame(()=>{

const x=(Math.random()*200)-100;

p.style.transform=`translate(${x}px,-${window.innerHeight+300}px)`;

p.style.opacity="0";

});

setTimeout(()=>{

p.remove();

},12000);

}

setInterval(createParticle,500);


/*==================================================
    IMAGE LAZY ANIMATION
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("load",()=>{

img.style.opacity="1";

img.style.transform="scale(1)";

});

img.style.opacity="0";

img.style.transform="scale(.96)";

img.style.transition=".6s";

});


/*==================================================
    MOBILE MENU FIX
==================================================*/

window.addEventListener("orientationchange",()=>{

setTimeout(()=>{

window.scrollTo({

top:window.scrollY

});

},300);

});


/*==================================================
    PERFORMANCE
==================================================*/

window.addEventListener("pageshow",()=>{

updateCountdown();

});


/*==================================================
    PREVENT DOUBLE TAP ZOOM
==================================================*/

let lastTouch=0;

document.addEventListener("touchend",e=>{

const now=Date.now();

if(now-lastTouch<=300){

e.preventDefault();

}

lastTouch=now;

},{passive:false});


/*==================================================
    CONSOLE MESSAGE
==================================================*/

console.log("%c🕌 Shireen & Nazeer Wedding Website","font-size:18px;color:#7a0019;font-weight:bold");

console.log("%cMay Allah bless this marriage with barakah. Ameen.","color:#b8860b");


/*==================================================
    WEBSITE READY
==================================================*/

document.documentElement.classList.add("loaded");

console.log("✅ Production Website Loaded Successfully");
