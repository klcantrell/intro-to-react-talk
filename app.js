const FRUIT_EMOJIS = ['🍓', '🍎', '🍇', '🍌', '🫐'];

const countDisplay = document.getElementById('countDisplay');
const fruitContainer = document.getElementById('fruitContainer');
const fruitsUnboppedCount = document.getElementById('fruitsUnboppedCount');
const totalFruitsBoppedCount = document.getElementById('totalBoppedCount');

const countIncrementer = document.getElementById('countIncrementer');
countIncrementer.addEventListener('click', () => {
  const currentCount = parseInt(countDisplay.value)
  const newCount = currentCount + 1
  countDisplay.value = newCount;

  const fruitElement = document.createElement('div');
  fruitElement.className = 'fruit-element';
  fruitElement.style.top = `${Math.random() * fruitContainer.getBoundingClientRect().height}px`;
  fruitElement.style.left = `${Math.random() * fruitContainer.getBoundingClientRect().width}px`;
  fruitElement.textContent = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
  fruitElement.addEventListener('click', () => {
    fruitContainer.removeChild(fruitElement);
    countDisplay.value = document.querySelectorAll('.fruit-element').length;
    fruitsUnboppedCount.textContent = document.querySelectorAll('.fruit-element').length;
    const currentTotalBopped = parseInt(totalFruitsBoppedCount.textContent);
    totalFruitsBoppedCount.textContent = currentTotalBopped + 1;
  });
  fruitContainer.appendChild(fruitElement);

  fruitsUnboppedCount.textContent = document.querySelectorAll('.fruit-element').length;
});

countDisplay.addEventListener('change', (event) => {
  const numFruitsToAdd = parseInt(event.target.value) < 0 || isNaN(parseInt(event.target.value))
    ? 0
    : parseInt(event.target.value);
  if (numFruitsToAdd === 0) {
    countDisplay.value = 0;
  }
  while (fruitContainer.firstChild) {
    fruitContainer.removeChild(fruitContainer.firstChild);
  }

  for (let i = 0; i < numFruitsToAdd; i++) {
    const fruitElement = document.createElement('div');
    fruitElement.className = 'fruit-element';
    fruitElement.style.top = `${Math.random() * fruitContainer.getBoundingClientRect().height}px`;
    fruitElement.style.left = `${Math.random() * fruitContainer.getBoundingClientRect().width}px`;
    fruitElement.textContent = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
    fruitElement.addEventListener('click', () => {
      fruitContainer.removeChild(fruitElement);
      countDisplay.value = document.querySelectorAll('.fruit-element').length;
      fruitsUnboppedCount.textContent = document.querySelectorAll('.fruit-element').length;
      const currentTotalBopped = parseInt(totalFruitsBoppedCount.textContent);
      totalFruitsBoppedCount.textContent = currentTotalBopped + 1;
    });
    fruitContainer.appendChild(fruitElement);
  }

  fruitsUnboppedCount.textContent = document.querySelectorAll('.fruit-element').length;
});
