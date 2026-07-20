/* ==========================================
   SHIREEN & NAZEER
   Premium Wedding Website
========================================== */

// Loader
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Share Button
const shareButton = document.getElementById("shareButton");

if (shareButton) {

    shareButton.addEventListener("click", async () => {

        if (navigator.share) {

            try {

                await navigator.share({

                    title: "Shireen ❤️ Nazeer Wedding Invitation",

                    text: "You are cordially invited to our Nikah Ceremony.",

                    url: window.location.href

                });

            } catch (err) {

                console.log(err);

            }

        } else {

            navigator.clipboard.writeText(window.location.href);

            alert("Invitation link copied successfully.");

        }

    });

}

/* ==========================================
   SCROLL ANIMATIONS
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".info-card,.couple,.dua-section,.card-section,.english-section,.kannada-section,footer"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

Object.assign(topButton.style, {

    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#8b0000",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,.25)",
    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    Object.assign(heart.style, {

        position: "fixed",
        left: Math.random() * window.innerWidth + "px",
        top: window.innerHeight + "px",
        fontSize: (18 + Math.random() * 18) + "px",
        opacity: ".35",
        pointerEvents: "none",
        zIndex: "2",
        transition: "transform 7s linear, opacity 7s linear"

    });

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 250}px) rotate(${360 + Math.random() * 360}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(createHeart, 2200);


/* ==========================================
   MOBILE TAP EFFECT
========================================== */

document.querySelectorAll(".btn,.main-btn,#shareButton").forEach(button => {

    button.addEventListener("touchstart", () => {

        button.style.transform = "scale(.96)";

    });

    button.addEventListener("touchend", () => {

        button.style.transform = "scale(1)";

    });

});


/* ==========================================
   WEBSITE READY
========================================== */

console.log("✅ Shireen & Nazeer Wedding Website Loaded Successfully");
