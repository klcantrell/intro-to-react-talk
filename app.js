const FRUIT_EMOJIS = ['🍓', '🍎', '🍇', '🍌', '🫐'];

const countDisplay = document.getElementById('countDisplay');
const addButton = document.getElementById('addButton');
const fruitContainer = document.getElementById('fruitContainer');
const fruitsUnboppedCount = document.getElementById('fruitsUnboppedCount');
const totalFruitsBoppedCount = document.getElementById('totalBoppedCount');

addButton.addEventListener('click', onAddClicked);
countDisplay.addEventListener('change', onCountDisplayChanged);

function onAddClicked() {
  const currentCount = parseInt(countDisplay.value)
  const newCount = currentCount + 1
  countDisplay.value = newCount;

  renderFruitEmoji();
}

function renderFruitEmoji() {
  const fruitElement = document.createElement('div');
  fruitElement.className = 'fruit-element';
  fruitElement.style.top = `${Math.random() * fruitContainer.getBoundingClientRect().height}px`;
  fruitElement.style.left = `${Math.random() * fruitContainer.getBoundingClientRect().width}px`;
  fruitElement.textContent = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
  fruitElement.addEventListener('click', onFruitEmojiClicked);
  fruitContainer.appendChild(fruitElement);

  fruitsUnboppedCount.textContent = getFruitEmojisRemaining();
}

function onFruitEmojiClicked(event) {
  fruitContainer.removeChild(event.currentTarget);
  const fruitEmojisRemaining = getFruitEmojisRemaining();
  countDisplay.value = fruitEmojisRemaining;
  fruitsUnboppedCount.textContent = fruitEmojisRemaining;
  incrementTotalBopCount();
}

function onCountDisplayChanged(event) {
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
    renderFruitEmoji();
  }
}

function getFruitEmojisRemaining() {
  return document.querySelectorAll('.fruit-element').length;
}

function incrementTotalBopCount() {
  const currentTotalBopped = parseInt(totalFruitsBoppedCount.textContent);
  totalFruitsBoppedCount.textContent = currentTotalBopped + 1;
}
