'use strict';

// Create all the product variables and push them into an array
var bag = new Image('Bag', 'image/bag.jpg');
var banana = new Image('Banana', 'image/banana.jpg');
var bathroom = new Image('Bathroom', 'image/bathroom.jpg');
var boots = new Image('boots', 'image/boots.jpg');
var breakfast = new Image('breakfast', 'image/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'image/bubblegum.jpg');
var chair = new Image('chair', 'image/chair.jpg');
var cthulhu = new Image('cthulhu', 'image/cthulhu.jpg');
var dogduck = new Image('dog-duck', 'image/dog-duck.jpg');
var dragon = new Image('dragon', 'image/dragon.jpg');
var pen = new Image('pen', 'image/pen.jpg');
var petsweep = new Image('pet-sweep', 'image/pet-sweep.jpg');
var scissors = new Image('scissors', 'image/scissors.jpg');
var shark = new Image('shark', 'image/shark.jpg');
var sweep = new Image('sweep', 'image/sweep.png');
var tauntaun = new Image('tauntaun', 'image/tauntaun.jpg');
var unicorn = new Image('unicorn', 'image/unicorn.jpg');
var usb = new Image('usb', 'image/usb.gif');
var watercan = new Image('water-can', 'image/water-can.jpg');
var wineglass = new Image('wine-glass', 'image/wine-glass.jpg');
var images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

var counter = 0;

var cat = document.getElementById('cat');
var dog = document.getElementById('dog');

function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
}

// Pick a random image from the array

Tracker.prototype.randomProduct = function() {
  return Math.floor(Math.random() * (images.length + 1));
};

// Assign a random image to each of the three product slots, make sure no picture is shwon twice or was just shown in that slot, and track how many times each image was shown

Tracker.prototype.pickProducts = function() {
  product1 = this.randomProduct();
  product2 = this.randomProduct();
  while (product2 === product1) {
    product2 = this.randomProduct();
  };
  product3 = this.randomProduct();
  while (product3 === product1 || product2) {
    product3 = this.randomProduct();
  }
};

// Draw the three products on the page

Tracker.prototype.drawProducts = function() {
  var getProd1 = document.getElementById('prod1');
  var placeProd1 = document.createElement('img');

  tHeaderRow.appendChild(placeProd1);
};

// Track which product the user clicked on, increase the click counter by 1, then generate a new set of pictures

// When the user has clicked on 25 products, display a table at the bottom that shows:
// - how many times each product was picked
// - how many times each product was displayed
// - number of times it was picked as a percentage of number of times shown


cat.addEventListener('click', function() {
  counter++;
  var src = this.getAttribute('src');
  console.log('image src:', src);
  console.log('total cat clicks:', counter);
});

dog.addEventListener('click', function() {
  var src = this.getAttribute('src');
  var name = this.getAttribute('id');

  images.push(new Tracker(name, src));
  console.log(images);
});
