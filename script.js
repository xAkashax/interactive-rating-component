const btn = document.querySelector('.submit');
const cards = document.querySelector('.card');
const liCircles = document.querySelectorAll('li');
const rate = document.querySelector('span');

removeSelected = () => {
  liCircles.forEach(li => {
    li.classList.remove('selected');
  });
}

for (let i = 0; i < liCircles.length; i++ ) {
  liCircles[i].addEventListener('click', function(){
    removeSelected();
    this.classList.add('selected');
  });
}

submit = () => {
  cards.classList.toggle('active');
  const selectedRate = document.querySelector('.selected');
  rate.textContent = selectedRate.textContent;
}

btn.addEventListener('click', submit);

