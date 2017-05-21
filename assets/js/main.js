//var pictures = ["../img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
var fotos =["assets/img/a1.jpg","assets/img/a2.jpg","assets/img/a3.jpg","assets/img/a4.jpg"];

var contenedor01 = document.getElementById("01");
var img01 = document.createElement("img");
img01.setAttribute("src", fotos[0]);
img01.setAttribute("class", "imagen");
contenedor01.appendChild(img01);

var contenedor02 = document.getElementById("02");
var img02 = document.createElement("img");
img02.setAttribute("src", fotos[1]);
img02.setAttribute("class", "imagen");
contenedor02.appendChild(img02);

var contenedor03 = document.getElementById("03");
var img03 = document.createElement("img");
img03.setAttribute("src", fotos[2]);
img03.setAttribute("class", "imagen");
contenedor03.appendChild(img03);

var contenedor04 = document.getElementById("04");
var img04 = document.createElement("img");
img04.setAttribute("src", fotos[3]);
img04.setAttribute("class", "imagen");
contenedor04.appendChild(img04);

