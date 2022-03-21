'use script'
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let list = document.getElementById('list');
let imageArray= [];

let maxClick= 25;
let totalClicks= 0;
let imagesListed= [];


function listedImages(name, filePath, timesShown,timesClicked){
  this.name = name;
  this.filePath = filePath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  imageArray.push(this);

}

new listedImages('bag','img/bus-mall/bag.jpg');
new listedImages('banana','img/bus-mall/banana.jpg');
new listedImages('bathroom','img/bus-mall/bathroom.jpg');
new listedImages('boots','img/bus-mall/boots.jpg');
new listedImages('breakfast','img/bus-mall/breakfast.jpg');
new listedImages('bubblegum','img/bus-mall/bubblegum.jpg');
new listedImages('chair','img/bus-mall/chair.jpg');
new listedImages('cthulhu','img/bus-mall/cthulhu.jpg');
new listedImages('dog-duck','img/bus-mall/dog-duck.jpg');
new listedImages('dragon','img/bus-mall/dragon.jpg');
new listedImages('pen','img/bus-mall/pen.jpg');
new listedImages('scissirs','img/bus-mall/pet-sweep.jpg');
new listedImages('shark','img/bus-mall/scissors.jpg');
new listedImages('sweep','img/bus-mall/shark.jpg');
new listedImages('tauntaun','img/bus-mall/sweep.jpg');
new listedImages('unicorn','img/bus-mall/tauntaun.jpg');
new listedImages('water','img/bus-mall/unicorn.jpg');
new listedImages('wine','img/bus-mall/water-can.jpg');
new listedImages('wine','img/bus-mall/wine-glass.jpg');



function randomImage(){
  let randomIndex =  Math.floor(Math.random() * imageArray.length);
}

function imageListed(){
  
  for (let i = 0; i < imageArray.length; i++){
    
  }
}
