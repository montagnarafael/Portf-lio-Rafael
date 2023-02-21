var url = "https://github.com/montagnarafael";
var btn = document.querySelector("#bt1");


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

btn.addEventListener('click', function() {
    
  openInNewTab(url);

});

var url2 = "https://www.linkedin.com/in/montagnarafael/";
var btn = document.querySelector("#bt2");


function openInNewTab(url2) {
  var win = window.open(url2, '_blank');
  win.focus();
}

btn.addEventListener('click', function() {
    
  openInNewTab(url2);

});

var url3 = "https://twitter.com/omontagnarafael";
var btn = document.querySelector("#bt3");


function openInNewTab(url3) {
  var win = window.open(url3, '_blank');
  win.focus();
}

btn.addEventListener('click', function() {
    
  openInNewTab(url3);

});

var url4 = "https://www.instagram.com/montagna.rafael/";
var btn = document.querySelector("#bt4");


function openInNewTab(url4) {
  var win = window.open(url4, '_blank');
  win.focus();
}

btn.addEventListener('click', function() {
    
  openInNewTab(url4);

});


function meucontato() {
  window.location.href = "meucontato.html";
}