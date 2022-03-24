'use script';
let imageContainer = document.getElementById('container');
let showResults = document.getElementById('show-results');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

// getting the ul from the DOM to manipulate
let results = document.getElementById('display-results');
const imageArray = [];
let maxClick = 25;
let totalClicks = 0;

//constructor function
function ListedImages(name, filePath = 'jpeg') {
  this.name = name;
  this.src = `img/bus-mall/${name}.${filePath}`;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.votes = 0;
  this.views = 0;
  imageArray.push(this);

}
//instantiate
new ListedImages('bag');
new ListedImages('bathroom');
new ListedImages('boots');
new ListedImages('breakfast');
new ListedImages('bubblegum');
new ListedImages('chair');
new ListedImages('cthulhu');
new ListedImages('dog-duck');
new ListedImages('dragon');
new ListedImages('pen');
new ListedImages('scissirs');
new ListedImages('shark');
new ListedImages('sweep');
new ListedImages('tauntaun');
new ListedImages('unicorn');
new ListedImages('water');
new ListedImages('wine');
new ListedImages('wine');

console.log(imageArray);

function randomImage() {
  let randomIndex = Math.floor(Math.random() * imageArray.length);
  return randomIndex;
}

function renderImages() {
  let uniqueProductIndexes = [];

  while (uniqueProductIndexes.length < 3) {
    let num = randomImage();
    while (uniqueProductIndexes.includes(num)) {
      num = randomImage();
    }
    uniqueProductIndexes.push(num);
  }
  console.log(uniqueProductIndexes);

  image1.src = imageArray[uniqueProductIndexes[0]].src;
  image1.alt = imageArray[uniqueProductIndexes[0]].name;
  imageArray[uniqueProductIndexes[0]].views++;

  image2.src = imageArray[uniqueProductIndexes[1]].src;
  image2.alt = imageArray[uniqueProductIndexes[1]].name;
  imageArray[uniqueProductIndexes[1]].views++;


  image3.src = imageArray[uniqueProductIndexes[2]].src;
  image3.alt = imageArray[uniqueProductIndexes[2]].name;
  imageArray[uniqueProductIndexes[2]].views++;


}

renderImages();



function handleImageClick(event) {
  totalClicks++;
  let imagesClicked = event.target.alt;

  console.log(imagesClicked);

  for (let i = 0; i < imageArray.length; i++) {
    if (imageArray[i].name === imagesClicked)
      imageArray[i].votes++;
  }
}
renderImages();

if (totalClicks === maxClick){
  imageContainer.removeEventListener('click', handleImageClick);
}


function handleResults(event) {
  // maxClick++;
  // let maxClick = event.target.alt;
  if (totalClicks === maxClick) {
    for (let i = 0; i < imageArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${imageArray[i].name} had ${imageArray[i].votes} votes, and was seen ${imageArray[i].views} times.`;
      results.appendChild(li);
    }
  }
}
renderImages();

imageContainer.addEventListener('click', handleImageClick);
showResults.addEventListener('click', handleResults);



















// function getThreeImages() {
  //    let getThreeImages = '';

  // while (getThreeImages.length < 3) {
  //   let num = randomImage();
  //   while (getThreeImages.includes(num)) {
  //     num = randomImage();
  //   }
  //   getThreeImages.push(num);
  // }
  // console.log(getThreeImages);


  // let leftImage = imageArray[randomImage()];
  // let rightImage = imageArray[randomImage()];
  // let middleImage = imageArray[randomImage()];
  // image1.src = leftImage.filePath;
  // image3.src = rightImage.filePath;
  // image2.src = middleImage.filePath;
  // image1.alt = leftImage.name;
  // image3.alt = rightImage.name;
  // image2.alt = middleImage.name;
  // leftImage.timesShown++;
  // rightImage.timesShown++;
  // middleImage.timesShown++;

// }
// getThreeImages();










// imageContainer.addEventListener("click", myFunction);
// imageClicked.addEventListener("click", myFunction);
// imageClicked.addEventListener("click", myFunction);

// let imgesClicked = image1.addEventListener('click', )




// function imagesClick(event){

// }

// let result = randomImage();
// console.log(result);
// function imageListed(){

//   for (let i = 0; i < imageArray.length; i++){

// image1.src = imageArray[uniqueProductIndexes[0]].src;
// image2.src = imageArray[uniqueProductIndexes[1]].src;
// image3.src = imageArray[uniqueProductIndexes[2]].src;
