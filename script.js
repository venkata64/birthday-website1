const button = document.getElementById("surpriseBtn");

button.addEventListener("click", () => {

    const music = document.getElementById("birthdayMusic");

    music.volume = 0.3;   // 30% volume
    music.play();

    document.querySelector(".container").style.display = "none";

    document.getElementById("gallery").classList.remove("hidden");

    createConfetti();

});

function createConfetti() {
    for (let i = 0; i < 200; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "absolute";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "30px";
        confetti.style.zIndex = "100";

        confetti.style.animation =
            `fall ${Math.random() * 3 + 2}s linear`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
    to{
        transform:translateY(110vh) rotate(720deg);
    }
}
`;

document.head.appendChild(style);

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {

    document.querySelector(".center-message").style.display = "none";

    document.getElementById("giftBox")
        .classList.remove("hidden");

});

const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click", () => {

    giftBox.style.display = "none";

    document.getElementById("letter")
        .classList.remove("hidden");

    typeLetter();

});

function typeLetter() {

    const message = `
Happy Birthday Teju ❤️

Today is not just another day.

It is the day a truly wonderful person came into this world and made it brighter.

Your smile has a way of making ordinary moments feel special.

Your kindness, positivity and beautiful heart make people feel comfortable around you.

I hope this year brings you countless reasons to smile, endless success, beautiful memories and every happiness you deserve.

May all your dreams slowly turn into reality and may every step you take bring you closer to the life you wish for.

Never stop being the amazing person you are.

Keep shining.
Keep smiling.
Keep being yourself.

And remember...

You are far more special than you realize. 🌸✨

Happy Birthday Once Again 🎂❤️
`;

    let i = 0;

    const textElement =
        document.getElementById("letterText");

    textElement.innerHTML = "";

    const typing = setInterval(() => {

        textElement.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {

            clearInterval(typing);

            document
                .getElementById("cakeBtn")
                .classList.remove("hidden");
        }

    }, 35);

}

const cakeBtn = document.getElementById("cakeBtn");

cakeBtn.addEventListener("click", () => {

    document.getElementById("letter").style.display = "none";

    document.getElementById("cakeScene")
        .classList.remove("hidden");

});

const cutCakeBtn =
    document.getElementById("cutCakeBtn");

cutCakeBtn.addEventListener("click", () => {

    createConfetti();

    createFireworks();

    cutCakeBtn.innerHTML =
    "🎉 Happy Birthday Teju 🎉";

    cutCakeBtn.style.background =
    "#ff1493";

    setTimeout(() => {

        document
        .getElementById("finalMsgBtn")
        .classList.remove("hidden");

    }, 2000);

});

const finalMsgBtn =
document.getElementById("finalMsgBtn");

finalMsgBtn.addEventListener("click",()=>{

    document.getElementById("cakeScene")
    .style.display = "none";

    const finalScreen =
    document.getElementById("finalScreen");

    finalScreen.classList.remove("hidden");

    finalScreen.style.display = "flex";

});

function createFireworks(){

    for(let i=0;i<80;i++){

        const firework =
        document.createElement("div");

        firework.innerHTML = "✨";

        firework.style.position = "absolute";

        firework.style.left =
        Math.random()*100 + "vw";

        firework.style.top =
        Math.random()*100 + "vh";

        firework.style.fontSize =
        Math.random()*30 + 20 + "px";

        firework.style.zIndex = "999";

        firework.style.animation =
        "boom 2s ease forwards";

        document.body.appendChild(firework);

        setTimeout(()=>{
            firework.remove();
        },2000);
    }
}

document.addEventListener("mousemove", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    heart.style.pointerEvents = "none";
    heart.style.fontSize = "20px";
    heart.style.zIndex = "9999";

    heart.style.animation = "heartFade 1.5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);

});