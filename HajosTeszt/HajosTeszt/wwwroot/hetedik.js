//Valamiért csak az első kérdés kattintható, a többi nem.


var kérdések;
var aktualisKerdes = 0;
window.onload = function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}
function kérdésMegjelenítés(kérdés) {
    let ide = document.getElementById("kérdés_szöveg");
    ide.innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1
    for (var i = 1; i<=3; i++) {
        console.log(kérdések[kérdés].questionText)
        let elem = document.getElementById("válasz" + i)
        elem.innerHTML = kérdések[kérdés]["answer" + i]
    }
    if(document.getElementById("kép1").src != "")
    {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image
    }
    jóVálasz = kérdések[kérdés].correctAnswer;

    válasz1.classList.remove("jo", "rossz");
    válasz2.classList.remove("jo", "rossz");
    válasz3.classList.remove("jo", "rossz");
}

function visszaKatt() {
    if (aktualisKerdes == 0) {
        aktualisKerdes = 2;
    }
    else {
        aktualisKerdes--;
    }
    kérdésMegjelenítés(aktualisKerdes);
}
function eloreKatt() {
    aktualisKerdes++;
    if (aktualisKerdes == kérdések.length) {
        aktualisKerdes = 0;
    }
    kérdésMegjelenítés(aktualisKerdes);
}
function megjelöltválasz1() {
    let megjelöltválasz1 = document.getElementById("válasz1");
    let megjelöltválasz2 = document.getElementById("válasz2");
    let megjelöltválasz3 = document.getElementById("válasz3");
    if (jóVálasz == 1) {
        megjelöltválasz1.classList.add("jo");
        megjelöltválasz2.classList.add("rossz");
        megjelöltválasz3.classList.add("rossz");
    } else {
        megjelöltválasz1.classList.add("rossz");
    }
}
function megjelöltválasz2() {
    let megjelöltválasz1 = document.getElementById("válasz1");
    let megjelöltválasz2 = document.getElementById("válasz2");
    let megjelöltválasz3 = document.getElementById("válasz3");
    if (jóVálasz == 2) {
        megjelöltválasz2.classList.add("jo");
        megjelöltválasz1.classList.add("rossz");
        megjelöltválasz3.classList.add("rossz");
    } else {
        megjelöltválasz2.classList.add("rossz");
    }
}
function megjelöltválasz3() {
    let megjelöltválasz1 = document.getElementById("válasz1");
    let megjelöltválasz2 = document.getElementById("válasz2");
    let megjelöltválasz3 = document.getElementById("válasz3");
    if (jóVálasz == 3) {
        megjelöltválasz3.classList.add("jo");
        megjelöltválasz2.classList.add("rossz");
        megjelöltválasz1.classList.add("rossz");
    } else {
        megjelöltválasz3.classList.add("rossz");
    }
}