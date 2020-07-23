//Q # 1 (i)(ii)
var d = document.getElementById('main-content');
d.childNodes;
console.log(d);

//Q # 1 (iii)
var r = document.getElementsByClassName('render');
console.log(r);

//Q # 1 (iv)
document.getElementById('first-name').value = 'Hatim';

//Q # 1 (v)
document.getElementById('last-name').value = 'Khetty';

document.getElementById('emaill').value = 'hf.khetty@gmail.com';

//Q # 2 (i)
var x = document.getElementById("form-content").nodeType;
console.log(x);

//Q # 2 (ii)
var x = document.getElementById("lastName");
x.nodeType;
x.childNodes;
console.log(x)

//Q # 2 (iv)
var a = document.getElementById('main-content').firstChild;
var b = document.getElementById('main-content').lastChild;
console.log(a, b);

//Q # 2 (v)
var l = document.getElementById('lastName').previousSibling;
var m = document.getElementById('lastName').nextSibling;
console.log(l, m);

//Q # 2 (vi)
var e = document.getElementById('emaill');
e.parentNode;
s = e.nodeType;
console.log(e, s);