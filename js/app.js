'use script';
let imageContainer = document.getElementById('imageContainer');
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
function ListedImages(name, filePath = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${filePath}`;
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
new ListedImages('pet-sweep');
new ListedImages('scissors');
new ListedImages('shark');
// new ListedImages('sweep');
new ListedImages('tauntaun');
new ListedImages('unicorn');
new ListedImages('water-can');
new ListedImages('wine-glass');

console.log(imageArray);

function randomImage() {
  let randomIndex = Math.floor(Math.random() * imageArray.length);
  return randomIndex;
}

function renderImages() {
  let uniqueProductIndexes = [];

  while (uniqueProductIndexes.length < 6) {
    let num = randomImage();
    if (!uniqueProductIndexes.includes(num)) {
      uniqueProductIndexes.push(num);
    }
  }
  console.log(uniqueProductIndexes);
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
  }
  renderImages();
}




function handleResults() {
  // maxClick++;
  // let maxClick = event.target.alt;
  if (totalClicks === maxClick) {
    for (let i = 0; i < imageArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${imageArray[i].name} had ${imageArray[i].votes} votes, and was seen ${imageArray[i].views} times.`;
      results.appendChild(li);
    }
    showResults.removeEventListener('click', handleResults);
  }
}
// renderImages();

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      // hoverBorderColor: 'rgba(250, 50, 122, 1)',
    },
    {
      label: '# of Views',
      data: [17, 15, 5, 2, 4, 6],
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
});


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
