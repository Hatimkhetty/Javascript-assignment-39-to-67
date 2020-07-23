//Q # 1

function open_img_box() {
    document.getElementById('model_gallery').style.display = 'block';
    document.getElementById('gallery').style.display = 'none';
}

var img_arr = [
    'images/10.jpg',
    'images/8.jpg',
    'images/6.jpg',
    'images/11.jpg',
    'images/1.jpg',
    'images/2.jpg',
    'images/4.png',
    'images/6.jpg'
];

var img = document.getElementById('model_img');
var i = img_arr.length;

function previous_img() {
    i--;
    img.src = img_arr[i];
    if (i < 0) {
        i = 7;
        img.src = img_arr[i];
    }
}

function next_img() {
    i++;
    img.src = img_arr[i];
    if (i > 7) {
        i = 0;
        img.src = img_arr[i];
    }
}

function close_img_model() {
    document.getElementById('model_gallery').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
}

//Q # 2
var p = document.getElementById('para');

function incr_f_size() {
    p.style.fontSize = '30px';
}

function dcr_f_size() {
    p.style.fontSize = '15px';
}