let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");

let p1 = document.getElementById("info1");
let p2 = document.getElementById("info2");
let p3 = document.getElementById("info3");

inp1.addEventListener("input", () => {
    if (inp1.value.length <= 3) {
        p1.innerHTML = "введите текст длиной больше 8ми символов !БЛИН!";
        p1.style.color = "red";
    } else {
        p1.innerHTML = "Всё норм";
        p1.style.color = "green";
    }
});

inp2.addEventListener("input", () => {
    if (inp2.value.search("@mail,ru" || "@gmail.com")<1) {
        p2.innerHTML = "не правильно";
        p2.style.color = "red";
    } else {
        p2.innerHTML = "Всё норм";
        p2.style.color = "green";
    }
});

inp3.addEventListener("input", () => {
    if (inp3.value.length <= 8) {
        p3.innerHTML = "введите текст длиной больше 8ми символов !БЛИН!";
        p3.style.color = "red";
    } else {
        p3.innerHTML = "Всё норм";
        p3.style.color = "green";
    }
});
function func1(){
    let newwindow = window.open();
    let newe = document.createElement("p");
    let newe2 = document.createElement("p");
    let newe3 = document.createElement("h1");
    newe.innerHTML = "вы вошли в акккаунт:" + inp1.value;
    newe2.innerHTML = "ваш пароль:" + inp3.value;
    newe2.innerHTML = "ИЗВИНИТЕ НО ФАНДОМ ТОЛЬКО СТРОИТСЯ" ;
    newwindow.document.body.append(newe);
    newwindow.document.body.append(newe2);
}