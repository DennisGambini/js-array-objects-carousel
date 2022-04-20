const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const bigImgsList = document.getElementsByClassName("big-img");
const smImgList = document.getElementsByClassName("sm-img");
const h2 = document.getElementsByTagName("h2");
const p = document.getElementsByTagName("p");
const lays = document.getElementsByClassName("layover");

const prev = document.getElementById("icon-up");
const next = document.getElementById("icon-down");

h2[0].innerHTML = title[0];
p[0].innerHTML = text[0].slice(0, 35) + "...";

prev.addEventListener("click", backFunction);
next.addEventListener("click", forwardFunction);

let contatore = 0;

function forwardFunction () {
    bigImgsList[contatore].classList.remove("active");
    smImgList[contatore].classList.remove("border");
    lays[contatore].classList.remove("sm-active");
    if (contatore < 4) {
        contatore++;
    }
    else {
        contatore = 0;
    }
    console.log("contatore :" + contatore);
    bigImgsList[contatore].classList.add("active");
    smImgList[contatore].classList.add("border");
    h2[0].innerHTML = title[contatore];
    p[0].innerHTML = text[contatore].slice(0, 35) + "...";
    lays[contatore].classList.add("sm-active");
}

function backFunction () {
    bigImgsList[contatore].classList.remove("active");
    smImgList[contatore].classList.remove("border");
    lays[contatore].classList.remove("sm-active");
    if (contatore > 0) {
        contatore--;
    }
    else {
        contatore = 4;
    }
    console.log("contatore :" + contatore);
    bigImgsList[contatore].classList.add("active");
    smImgList[contatore].classList.add("border");
    h2[0].innerHTML = title[contatore];
    p[0].innerHTML = text[contatore].slice(0, 30) + "...";
    lays[contatore].classList.add("sm-active");
}