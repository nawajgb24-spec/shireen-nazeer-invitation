/*==================================================
SHIREEN & NAZEER
PREMIUM WEDDING WEBSITE
SCRIPT.JS
PART 1
==================================================*/

"use strict";

/*==================================================
LOADER
==================================================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

document.body.style.overflow="visible";

},2200);

});

/*==================================================
COUNTDOWN
==================================================*/

const weddingDate=new Date("December 20, 2026 11:30:00").getTime();

const day=document.getElementById("days");
const hour=document.getElementById("hours");
const minute=document.getElementById("minutes");
const second=document.getElementById("seconds");

function updateCountdown(){

const now=new Date().getTime();

const gap=weddingDate-now;

const d=Math.floor(gap/(1000*60*60*24));

const h=Math.floor(
(gap%(1000*60*60*24))
/
(1000*60*60)
);

const m=Math.floor(
(gap%(1000*60*60))
/
(1000*60)
);

const s=Math.floor(
(gap%(1000*60))
/
1000
);

if(day) day.innerHTML=d<10?"0"+d:d;
if(hour) hour.innerHTML=h<10?"0"+h:h;
if(minute) minute.innerHTML=m<10?"0"+m:m;
if(second) second.innerHTML=s<10?"0"+s:s;

if(gap<0){

clearInterval(counter);

document.getElementById("countdown").innerHTML=

"<h2 style='color:#d4af37'>💖 Nikah Mubarak 💖</h2>";

}

}

updateCountdown();

const counter=setInterval(updateCountdown,1000);

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({

top:target.offsetTop-40,

behavior:"smooth"

});

}

});

});

/*==================================================
BACK TO TOP
==================================================*/

const backBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

backBtn.classList.add("show");

}else{

backBtn.classList.remove("show");

}

});

if(backBtn){

backBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/*==================================================
SCROLL REVEAL
==================================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

document.querySelectorAll(

".fade-up,.person,.detail-box,.invite-box,.glass-card"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

/*==================================================
SHARE BUTTON
==================================================*/

const shareBtn=document.getElementById("shareBtn");

if(shareBtn){

shareBtn.addEventListener("click",async()=>{

const shareData={

title:"Shireen ❤️ Nazeer Wedding Invitation",

text:"You are warmly invited to our Nikah Ceremony.",

url:window.location.href

};

if(navigator.share){

try{

await navigator.share(shareData);

}catch(e){}

}else{

navigator.clipboard.writeText(window.location.href);

alert("Invitation link copied successfully.");

}

});

}

/*==================================================
FLOATING GOLDEN PARTICLES
==================================================*/

function createParticle(){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

const size=(Math.random()*5)+2;

particle.style.width=size+"px";

particle.style.height=size+"px";

particle.style.animationDuration=

(Math.random()*10+12)+"s";

particle.style.animationDelay=

(Math.random()*5)+"s";

particle.style.opacity=Math.random();

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},25000);

}

setInterval(createParticle,250);

/*==================================================
TWINKLING STARS
==================================================*/

function createStar(){

const star=document.createElement("span");

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.width="2px";

star.style.height="2px";

star.style.borderRadius="50%";

star.style.background="#fff";

star.style.opacity=Math.random();

star.style.boxShadow="0 0 10px white";

star.style.pointerEvents="none";

star.style.zIndex="-2";

star.style.animation=

"starBlink "+(Math.random()*3+2)+"s infinite";

document.body.appendChild(star);

}

for(let i=0;i<180;i++){

createStar();

}

const starStyle=document.createElement("style");

starStyle.innerHTML=`

@keyframes starBlink{

0%{

opacity:.2;

transform:scale(.8);

}

50%{

opacity:1;

transform:scale(1.5);

}

100%{

opacity:.2;

transform:scale(.8);

}

}

`;

document.head.appendChild(starStyle);

/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(

".hero-btn,.calendar-btn,.share-btn,.contact-btn"

).forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.35)";

circle.style.transform="scale(0)";

circle.style.left=

e.offsetX-diameter/2+"px";

circle.style.top=

e.offsetY-diameter/2+"px";

circle.style.animation="ripple .6s linear";

circle.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

const ripple=document.createElement("style");

ripple.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(ripple);

/*==================================================
MOUSE GLOW EFFECT
==================================================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="280px";
glow.style.height="280px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background=
"radial-gradient(circle,rgba(212,175,55,.15),transparent 70%)";
glow.style.filter="blur(18px)";
glow.style.zIndex="-1";
glow.style.transition="transform .08s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=(e.clientX-140)+"px";

glow.style.top=(e.clientY-140)+"px";

});

/*==================================================
NAVBAR ACTIVE LINKS
==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(window.scrollY>=top){

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

/*==================================================
PAGE TITLE ANIMATION
==================================================*/

const originalTitle=document.title;

let titleTimer=null;

window.addEventListener("blur",()=>{

let state=false;

titleTimer=setInterval(()=>{

document.title=

state

?

"💖 We Are Waiting For You"

:

"✨ Shireen ❤️ Nazeer";

state=!state;

},1500);

});

window.addEventListener("focus",()=>{

clearInterval(titleTimer);

document.title=originalTitle;

});

/*==================================================
IMAGE HOVER ZOOM
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".6s";

img.style.transform="scale(1.04)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*==================================================
FLOATING ICONS
==================================================*/

const icons=["✨","🌙","⭐","🤍","🕌"];

function floatingIcon(){

const icon=document.createElement("div");

icon.innerHTML=

icons[Math.floor(Math.random()*icons.length)];

icon.style.position="fixed";

icon.style.left=Math.random()*100+"vw";

icon.style.bottom="-60px";

icon.style.fontSize=

(Math.random()*16+18)+"px";

icon.style.pointerEvents="none";

icon.style.opacity=".65";

icon.style.zIndex="-1";

icon.style.animation=

"iconFloat "+(Math.random()*8+10)+"s linear forwards";

document.body.appendChild(icon);

setTimeout(()=>{

icon.remove();

},20000);

}

setInterval(floatingIcon,1800);

const iconStyle=document.createElement("style");

iconStyle.innerHTML=`

@keyframes iconFloat{

0%{

transform:

translateY(0) rotate(0deg);

opacity:0;

}

10%{

opacity:.8;

}

100%{

transform:

translateY(-120vh)

rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(iconStyle);

/*==================================================
PERFORMANCE
==================================================*/

window.addEventListener(

"touchstart",

()=>{},

{passive:true}

);

window.addEventListener(

"wheel",

()=>{},

{passive:true}

);

/*==================================================
PREVENT IMAGE DRAG
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/*==================================================
CONSOLE MESSAGE
==================================================*/

console.clear();

console.log(

"%c✨ Shireen ❤️ Nazeer Premium Wedding Website",

"color:#d4af37;font-size:22px;font-weight:bold;"

);

console.log(

"%cDesigned with ❤️",

"color:white;font-size:14px;"

);

/*==================================================
END OF SCRIPT
VERSION 2.0
==================================================*/
