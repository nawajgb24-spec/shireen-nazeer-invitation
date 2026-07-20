window.addEventListener("load", () => {

const loading = document.querySelector(".loading-screen");

setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.visibility = "hidden";
}, 2500);

});

const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(button => {

button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
});

});

if (navigator.share) {

const shareButton = document.createElement("button");

shareButton.innerText = "📤 Share Invitation";

shareButton.style.marginTop = "20px";
shareButton.style.padding = "15px";
shareButton.style.background = "#8b0000";
shareButton.style.color = "#fff";
shareButton.style.border = "none";
shareButton.style.borderRadius = "10px";
shareButton.style.cursor = "pointer";

shareButton.onclick = () => {

navigator.share({

title: "Shireen & Nazeer Wedding Invitation",

text: "You are cordially invited to our Nikah Ceremony.",

url: window.location.href

});

};

document.body.appendChild(shareButton);

}
