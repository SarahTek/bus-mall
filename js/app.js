'use script';
let imageContainer = document.getElementById('imageContainer');
let showResults = document.getElementById('show-results');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');


let results = document.getElementById('display-results');
const imageArray = [];
let maxClick = 25;
let totalClicks = 0;


function ListedImages(name, filePath = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${filePath}`;
  this.votes = 0;
  this.views = 0;

}


function showProducts() {
  imageArray.push(new ListedImages('bag'));
  imageArray.push(new ListedImages('bathroom'));
  imageArray.push(new ListedImages('boots'));
  imageArray.push(new ListedImages('breakfast'));
  imageArray.push(new ListedImages('bubblegum'));
  imageArray.push(new ListedImages('chair'));
  imageArray.push(new ListedImages('cthulhu'));
  imageArray.push(new ListedImages('dog-duck'));
  imageArray.push(new ListedImages('dragon'));
  imageArray.push(new ListedImages('pen'));
  imageArray.push(new ListedImages('pet-sweep'));
  imageArray.push(new ListedImages('scissors'));
  imageArray.push(new ListedImages('shark'));
  imageArray.push(new ListedImages('sweep', 'png'));
  imageArray.push(new ListedImages('tauntaun'));
  imageArray.push(new ListedImages('unicorn'));
  imageArray.push(new ListedImages('water-can'));
  imageArray.push(new ListedImages('wine-glass'));
}

itemStorage();
function itemStorage() {
  if (localStorage.getItem('imageArray')) {
    let parseImages = JSON.parse(localStorage.getItem('imageArray'));
    for (let i = 0; i < parseImages.length; i++) {
      console.log(parseImages[i]);
      let newProduct = new ListedImages(parseImages[i].name, (parseImages[i].src));
      newProduct.src = parseImages[i].src;
      newProduct.votes = parseImages[i].votes;
      newProduct.views = parseImages[i].views;
      imageArray.push(newProduct);
    }
  } else {
    showProducts();
  }
}
function saveProducts() {
  let imageStringified = JSON.stringify(imageArray);
  localStorage.setItem('imageArray', imageStringified);

}


function randomImage() {
  let randomIndex = Math.floor(Math.random() * imageArray.length);
  return randomIndex;
}

let uniqueProductIndexes = []; // this a global variable for randomized images.
function renderImages() {

  while (uniqueProductIndexes.length < 6) {
    let num = randomImage();
    while (uniqueProductIndexes.includes(num)) {
      num = randomImage();
    }
    uniqueProductIndexes.push(num);
  }
  
  let index1 = uniqueProductIndexes.shift();
  let index2 = uniqueProductIndexes.shift();
  let index3 = uniqueProductIndexes.shift();

  image1.src = imageArray[index1].src;
  image1.alt = imageArray[index1].name;
  imageArray[index1].views++;

  image2.src = imageArray[index2].src;
  image2.alt = imageArray[index2].name;
  imageArray[index2].views++;


  image3.src = imageArray[index3].src;
  image3.alt = imageArray[index3].name;
  imageArray[index3].views++;
}

renderImages();



function handleImageClick(event) {
  totalClicks++;
  console.log(totalClicks);
  let imagesClicked = event.target.alt;

  for (let i = 0; i < imageArray.length; i++) {
    if (imageArray[i].name === imagesClicked)
      imageArray[i].votes++;
  }
  if (totalClicks === maxClick) {
    imageContainer.removeEventListener('click', handleImageClick);
    saveProducts();
  }
  renderImages();
}




function handleResults() {
  if (totalClicks === maxClick) {
    for (let i = 0; i < imageArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${imageArray[i].name} had ${imageArray[i].votes} votes, and was seen ${imageArray[i].views} times.`;
      results.appendChild(li);
    }
    showResults.removeEventListener('click', handleResults);
  }
  renderChart();
}

imageContainer.addEventListener('click', handleImageClick);
showResults.addEventListener('click', handleResults);


function renderChart() {
  let views = [];
  let votes = [];
  let name = [];

  for (let i = 0; i < imageArray.length; i++) {
    let ListedImages = imageArray[i];
    views.push(ListedImages.views); // pushing image views into views array container.
    votes.push(ListedImages.votes);// pushing image votes
    name.push(ListedImages.name);
  }
  console.log(views);



  const ctx = document.getElementById('myChart').getContext('2d');

  let config = {
    type: 'bar',
    data: {
      labels: name,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: '# of Views',
        data: views,
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },

      //it fits to the box or screen that's put inside of / its a default
      responsive: true
    }
  };
  const myChart = new Chart(ctx, config);

}
