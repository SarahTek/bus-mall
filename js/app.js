'use script'
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let list = document.getElementById('list');
let imagesListed= [1,2,3,4,5,6];

let maxClick= 25;
let totalClicks= 0;
let imageArray= [];


function listedImages(name){
  this.name = name
  this.image = `img/bus-mall{name}`;

}
new listedImages('bag');
new listedImages('banana');
new listedImages('bathroom');
new listedImages('boots');
new listedImages('breakfast');
new listedImages('bubblegum');
new listedImages('chair');
new listedImages('cthulhu');
new listedImages('dog-duck');
new listedImages('dragon');
new listedImages('pen');
new listedImages('scissirs');
new listedImages('shark');
new listedImages('sweep');
new listedImages('tauntaun');
new listedImages('unicorn');
new listedImages('water');
new listedImages('wine');
