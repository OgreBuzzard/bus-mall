'use strict';

// A list of images in an array.
var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// A constructor function that creates objects out of each image in the array and applies properties to them.
function Product(name) {
  var nameArray = name.split('');
  var firstLetter = name.split('')[0].toUpperCase();
  nameArray[0] = firstLetter;
  this.name = nameArray.join('');
  this.fileName = 'image/' + name + '.jpg';
  this.totalClicks = 0;
  this.totalShown = 0;
  this.justShown = false;
};

// Use the constructor function to push the objects into a new array.
var products = [];
for (var i = 0; i < images.length; i++) {
  products.push (new Product(images[i]));
};

// Create a click counter, a trigger, and an array for which products are in each slot
var trialCounter = 0;
var trialTrigger = 25;
var imageSlot = [];

// Pick a random product from the array
var randomProduct = function() {
  return Math.floor(Math.random() * (products.length));
};

// grab the image locations and counter position
// var progress = document.getElementById('progress');

// Assign a random image to each of the three product slots, make sure no picture is shown twice or was just shown in that slot, and track how many times each image was shown
var pickProducts = function() {
  var prodLeft = randomProduct();
  while (products[prodLeft].justShown === true) {
    prodLeft = randomProduct();
  }
  var prodCenter = randomProduct();
  while ((products[prodCenter].justShown === true) || (prodCenter === prodLeft)) {
    prodCenter = randomProduct();
  };
  var prodRight = randomProduct();
  while ((products[prodRight].justShown === true) || (prodRight === prodLeft) || (prodRight === prodCenter)) {
    prodRight = randomProduct();
  }
  if (imageSlot.length > 0) {
    justShownFalse(imageSlot[0], imageSlot[1], imageSlot[2]);
  }
  console.log('Left: ', prodLeft, 'Center: ', prodRight, 'Right: ', prodCenter);
  return [prodLeft, prodCenter, prodRight];
};

// Reset justShown to false
function justShownFalse(left, center, right) {
  products[left].justShown = false;
  products[center].justShown = false;
  products[right].justShown = false;
};

// Draw the three products on the page, increment the counter for each product shown, and set the justShown flag to true
var drawProduct = function() {
  imageSlot = pickProducts();
  document.getElementById('prodLeft').src = products[imageSlot[0]].fileName;
  document.getElementById('prodCenter').src = products[imageSlot[1]].fileName;
  document.getElementById('prodRight').src = products[imageSlot[2]].fileName;

  products[imageSlot[0]].totalShown++;
  products[imageSlot[1]].totalShown++;
  products[imageSlot[2]].totalShown++;
  products[imageSlot[0]].justShown = true;
  products[imageSlot[1]].justShown = true;
  products[imageSlot[2]].justShown = true;
};

drawProduct();

// Check for clicks on the three products
document.getElementById('prodLeft').addEventListener('click', clickEvent);
document.getElementById('prodCenter').addEventListener('click', clickEvent);
document.getElementById('prodRight').addEventListener('click', clickEvent);

// Track which product the user clicked on, run updateCounters, then generate a new set of pictures
function clickEvent(event) {
  var targetFileName = event.target.src;
  targetFileName = targetFileName.split('bus-mall/')[1];
  updateCounters(targetFileName);
  if (trialCounter >= trialTrigger) {
    showResult();
    return;
  }
  drawProduct();
}

// Increment the click counter for the selected product, and the trial counter
function updateCounters(targetFileName) {
  for (var j = 0; j < products.length; j++) {
    if (targetFileName === products[j].fileName) {
      products[j].totalClicks++;
      trialCounter++;
      break;
    }
  }
}

function showResult() {
  document.getElementById('prodLeft').removeEventListener('click', clickEvent);
  document.getElementById('prodCenter').removeEventListener('click', clickEvent);
  document.getElementById('prodRight').removeEventListener('click', clickEvent);
  var li = '';
  var ul = document.getElementById('results');
  for (var i = 0;i < products.length; i++) {
    li = li + '<li>' + products[i].totalClicks + ' click out of ' + products[i].totalShown + ' for the ' + products[i].name + '</li>';
  }
  ul.innerHTML = li;
}

// // When the user has clicked on 25 products, display a table at the bottom that shows:
// // - how many times each product was picked
// // - how many times each product was displayed
// // - number of times it was picked as a percentage of number of times shown
//
// prodPicker
//
// cat.addEventListener('click', function() {
//   counter++;
//   var src = this.getAttribute('src');
//   console.log('image src:', src);
//   console.log('total cat clicks:', counter);
// });
//
// dog.addEventListener('click', function() {
//   var src = this.getAttribute('src');
//   var name = this.getAttribute('id');
//
//   images.push(new Tracker(name, src));
//   console.log(images);
// });
//
// // JEREMY'S CODE
//
// // give a ticker +1 for objects selected
// function displayRandomImages() {
//   var randImageLeft = -1;
//   var randImageCenter = -1;
//   var randImageRight = -1;
// }
//
// // increment trial counter
// trialCounter++
//
//
// // check if trial counter is less than 25
// // after 25 trials (or assigned number) then display statistics
// if (trialCounter === numOfTrials) {
//   var entryPoint;
//   var prodPercent;
//   for (var j = 0; j < arrOfProd.length; j++) {
//     entryPoint = document.createElement('p');
//     prodPercent = Math.round(arrOfProd[j].clicks / arrOfProd[j].totalShown * 100);
//     entryPoint.innerHTML = 'Product: ' + arrOfProd[j].name + ', Number of times shown.';
//   }
//   imageLeft.style.display = 'none';
//   imageCenter.style.display = 'none';
//   imageRight.style.display = 'none';
// }
//
// // place images on page
//
// progress.innerHTML = 'Product trial ' + trialCounter = '/25';
//
// imageLeft.addEventListener

// Jordan's CODE

// var previousImage = [1, 2, 3]; // array to hold the three previous images
//
// var objectNames = []
// var objectShowings = []
// var objectClickings = []
//
// var makeChar = function() {
//   var ctx = document.getElementById('dataChart').getContext('2d');
//   ctx.canvas.width = '1000';
//   ctx.canvas.height = '250';
//   var chart = new Chart(ctx, {
//     type: 'bar',
//
//     data: {
//       labels: objectNames,
//       datasets: [{
//         label: "Times Seen",
//         background-color: '#f2f2f2',
//         borderColor: '#000',
//         data: objectShowings,
//       },
//       {
//         label: "Times Clicked",
//         background-color: #000,
//       }
//     ]
//     }
//   })
//
// options: {
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero: true;
//       }
//     }]
//   }
// }
//
// }
