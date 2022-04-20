// contatori
let contatoreMain = 2;
let contatoreSlider = 0;//questo deve andare da 0 a 4

// prendo riquadro grande
let bigPic = document.getElementById("big-pic");
let smallPicsBoxes = document.getElementsByClassName("sm-img-box");
let smallPics = document.getElementsByClassName("sm-img");//array
let layovers = document.getElementsByClassName("layover");//array

// prima schermata
generaBigCard();

generasmallCards();

// bottone su
const up = document.getElementById("icon-up");
up.addEventListener("click", contatoreMainMinus);
up.addEventListener("click", generaBigCard);

// bottone giù
const down = document.getElementById("icon-down");
down.addEventListener("click", contatoreMainPlus);
down.addEventListener("click", generaBigCard);

function generaBigCard(){
    let oggetto = myPhotos[contatoreMain];
    bigPic.innerHTML = `
    <img class="big-img" src="${oggetto.immagine}"></img>
    
    <div id="description">
        <h2>${oggetto.titolo}</h2>
        <p>${oggetto.descrizione}</p>
    </div>
    `
    let elemento = document.querySelector(".big-img");
    elemento.classList.add("animato");
    console.log(elemento)
}

function generasmallCards(){
    let k = 0;
    let i = 0;
    let newContatore = contatoreMain - 2;

    // check per numeri negativi
    if (newContatore == -2){
        newContatore = myPhotos.length - 2;
    }
    else if (newContatore == -1){
        newContatore = myPhotos.length - 1;
    }
    
    // ciclo vero e proprio
    for (i = 0; i < 5; i++){
        
        let smImg = smallPics[i];
        // smImg.addEventListener("click", allertaMeteo);
        let thisLay = layovers[i];
        console.log("smImg creata");
        let counter = i + newContatore;

        if (counter >= myPhotos.length){
            counter = 0 + k;
            k++;
        }
        console.log("counter: ", counter)
        console.log("new contatore: ", newContatore)
        smImg.setAttribute("src", `${myPhotos[counter].immagine}`);
        

        if (i === 2) {
            smImg.setAttribute("style", "border-radius: 15px;");
            smImg.classList.add("border");
            thisLay.classList.add("sm-active");
            
        }
    }
}

setInterval(contatoreMainPlus, 1000);

function contatoreMainPlus() {
    contatoreMain++;
    refreshSmallCards();
    if(contatoreMain === myPhotos.length){
        contatoreMain = 0;
    }
    console.log("contatoreMain main: ", contatoreMain)
    generaBigCard();
}
function contatoreMainMinus(){
    if(contatoreMain === 0){
        contatoreMain = myPhotos.length;
    }
    contatoreMain--;
    refreshSmallCards();
    console.log("contatoreMain main: ", contatoreMain)
}

function refreshSmallCards(){
    generasmallCards();
}