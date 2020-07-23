function power(a, b) {
    alert(a + b);
}
power(5, 2);
Task - 2
var found = false;
var leap_year = ["2012", "2016", "2020"];
var inp = prompt("Enter the year:");
for (var i = 0; i < leap_year.length; i++) {
    if (inp === leap_year[i]) {
        found = true;
        alert("found");
        break;
    }
}
if (found === false) {
    alert("no year found");
}

Task - 3

function area(a, b, c) {
    function s() {
        var s = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
        return s;
    }
    var val = s();
    var result = (val) * (val - a) * (val - b) * (val - c);
    return result;
}
var a = prompt("Enter value of a: ");
var b = prompt("Enter value of b: ");
var c = prompt("Enter value of c: ");
var a_int = parseInt(a);
var b_int = parseInt(b);
var c_int = parseInt(c);
alert(area(a_int, b_int, c_int));

Task - 4

function main_func(m1, m2, m3, t) {
    function percentage() {
        var sum = m1 + m2 + m3;
        var result = (sum * 100) / t;
        return result;
    }

    function average() {
        var result_a = (m1 + m2 + m3) / 3;
        return result_a;
    }
    var p_res = percentage();
    alert("Calculated Percentage: " + p_res);
    var a_res = average();
    alert("Calculated Average: " + a_res);
}
var a = prompt("Enter marks of  1st sub:");
var b = prompt("Enter marks of 2nd sub: ");
var c = prompt("Enter marks of 3rd sub: ");
var d = prompt("Enter Total: ");
var a_int = parseInt(a);
var b_int = parseInt(b);
var c_int = parseInt(c);
var d_int = parseInt(d);
main_func(a_int, b_int, c_int, d_int);


Task 5

function find_index(string, index_to_find) {
    for (var i = 0; i < string.length; i++) {
        if (string.slice(i, i + 1) === index_to_find) {
            alert("The index of " + index_to_find + " is: " + i);
            break;
        }
    }
}
var string = prompt("Enter string");
var index_of = prompt("Enter the character to find the index of: ")
find_index(string, index_of);

Task 6

function delete_vowels(x) {
    var s_new = x.replace(/[aeiou]/g, "");
    return s_new;
}

var s = "hello world pakistan ";
alert(delete_vowels(s));

Task 7

function consecutive_vowels(str, vowel) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (s.slice(i, i + 2) === vowel) {
            count++;
            alert("The consecutive vowel " + vowel + " occur " + count + " times");
            continue;
        }

    }
}
var s = prompt("Enter the string: ");
var vowels = prompt("Enter any two consecutive vowels which you want to find in string");
consecutive_vowels(s, vowels);

Task 8

function cal_dis(x) {
    function meters() {
        var value = parseInt(x);
        var meters = value * 1000;
        return meters;
    }
    var result_m = meters();
    alert("The distance in meters is: " + result_m);

    function feet() {
        var value = parseInt(x);
        var foot = value * 3280.84;
        return foot;
    }
    var result_f = feet();
    alert("The distance in feet is: " + result_f);

    function inch() {
        var value = parseInt(x);
        var inch = value * 39370.1;
        return inch;
    }
    var result_i = inch();
    alert("The distance in inch is: " + result_i);

    function cm() {
        var value = parseInt(x);
        var cm = value * 100000;
        return cm;
    }
    var result_cm = cm();
    alert("The distance in cm is: " + result_cm);
}
var data = prompt("Enter the distance between two cities in kilometers");
cal_dis(data);

Task - 9

function overtime_pay(x) {
    var hrs = parseInt(x);
    var rate = 12;
    var result = rate * hrs;
    alert("Your pay is: " + result);
}
var data = prompt("Enter your working hours: ");
overtime_pay(data);

Task - 10
var data = prompt("Enter your total amount");
var amount = parseInt(data);
var hun = amount / 100;
var hun_v = Math.floor(hun);
alert("You have " + hun_v + " hundress ruppes note");