
function background() {
    let index = randomize(0, 2)
    switch (index) {
        case (0): {
            document.getElementById('gameContainer').style.backgroundImage = "url('./assets/images/paysage2.png')";
            break;
        }
        case (1): {
            document.getElementById('gameContainer').style.backgroundImage = "url('./assets/images/paysage3.png')";
            break;
        }
        default: {
            document.getElementById('gameContainer').style.backgroundImage = "url('./assets/images/paysage.jpg')";
        }
    }
}
background()

let point = 0;
let myAudio = new Audio();
let index = 80;

function playAudio(urlsong) {
    myAudio.src = urlsong;
    myAudio.autoplay = true;
}
function timer(tme) {
    while (tme <= 60) {
        (function (tme) {
            setTimeout(function () {
                document.querySelector("#time").innerHTML = `${60 - tme}`;
                document.querySelector('.time').style.width = `${120 - (tme * 2)}px`;
                if (tme >= 30 && tme < 45) {
                    document.querySelector('.time').style.backgroundColor = "orange";
                }
                else if (tme >= 45) {
                    document.querySelector('.time').style.backgroundColor = "red";
                }
                if (tme == 60) {
                    document.querySelector('.gameOver').style.display = "block";
                    document.querySelector(".rumy").style.display = "none";
                    document.querySelector(".button").style.display = "block";
                    document.querySelector(".button").style.marginTop = "33px";
                    document.querySelector(".button").innerHTML = "Restart"
                }
            }, 1000 * tme)
        })(tme++)
    }
}

function translate() {
    while (index >= 0) {
        (function (index) {
            setTimeout(function () {
                let precisionX = randomize(-400, 400);
                let precisionY = randomize(-70, 70)
                document.querySelector(".rumy").style.transform = `translate(${precisionX}%, ${precisionY}%)`
            }, 750 * index)
        })(index--)
    }
}

function start() {
    let time = 0;
    index = 80;
    point = 0;
    document.querySelector('.gameOver').style.display = "none";
    document.querySelector(".button").style.display = "none";
    document.querySelector(".rumy").style.display = "block";
    document.querySelector(".point").innerHTML = point;
    timer(time);
    translate();
    if (document.querySelector(".button").innerHTML == "Restart"){
        background();
    }
}
const btn = document.querySelector(".rumy");

function clic() {
    playAudio('./assets/song/rupee.wav')
    point++;
    document.querySelector('.point').innerHTML = point;
}

btn.addEventListener("mousedown", ()=>{
    clic()
});

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}