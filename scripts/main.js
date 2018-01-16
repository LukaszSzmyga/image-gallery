var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

function addImages() {
    for(var i = 1; i <= 5; i++) {
        var newImage = document.createElement('img');
        newImage.setAttribute('src', 'images/pic' + i + '.jpg');
        thumbBar.appendChild(newImage);
        }
}

var imageClickHandler = function(event) {
    var clickedImage = event.target.getAttribute('src');
    displayImage(clickedImage);
}

function displayImage (clickedImage) {
    displayedImage.setAttribute('src', clickedImage);
}

function registerListeners() {
  btn.onclick = function() {
    var btnClass = btn.getAttribute('class'); 
    if(btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
  } 
  thumbBar.addEventListener('click', imageClickHandler);
}

addImages();
registerListeners();