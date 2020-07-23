function del() {
    var val = document.getElementById("del");
    var res = val.value;
    var res = "empty"
    console.log(res);
    var check = document.createElement("p");

    console.log(a);
    var a = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[8];
    var a = document.getElementById('del')
    console.log(a.childNodes[1]);
    var b = a.childNodes[1];
    var c = a.childNodes[3];
    var d = a.childNodes[5];
    a.removeChild(b);
    a.removeChild(c);
    a.removeChild(d);
    a.removeChild(a.lastElementChild);
}
// task 2 //
function incr() {
    var counter = 0;
    var a = document.getElementById('data');
    counter++;
    a.innerHTML = counter;
    counter++;
    a.innerHTML = counter;
}
var clicks = 0;

function incr() {
    clicks += 1;
    document.getElementById("data").innerHTML = clicks;
}

function decr() {
    clicks -= 1;
    document.getElementById("data").innerHTML = clicks; // function incr(){
    var counter = 0;
    var a = document.getElementById('data');
    counter++;
    a.innerHTML = counter;
    counter++;
    a.innerHTML = counter;
}
var clicks = 0;

function incr() {
    clicks += 1;
    document.getElementById("data").innerHTML = clicks;
}

function decr() {
    clicks -= 1;
    document.getElementById("data").innerHTML = clicks; // function incr(){
    var counter = 0;
    var a = document.getElementById('data');
    counter++;
    a.innerHTML = counter;
    counter++;
    a.innerHTML = counter;
}
var clicks = 0;

function incr() {
    clicks += 1;
    document.getElementById("data").innerHTML = clicks;
}

function decr() {
    clicks -= 1;
    document.getElementById("data").innerHTML = clicks;