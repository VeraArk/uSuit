let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemsVisible = 4;
const maxIndex = totalItems - itemsVisible;

document.querySelector('.next').addEventListener('click', function() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

document.querySelector('.prev').addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -(100 / itemsVisible) * currentIndex;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`};