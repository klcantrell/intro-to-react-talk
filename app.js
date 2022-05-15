const FRUIT_EMOJIS = ['🍓', '🍎', '🍇', '🍌', '🫐'];

const countDisplay = document.getElementById('countDisplay');
const addButton = document.getElementById('addButton');
const fruitContainer = document.getElementById('fruitContainer');

addButton.addEventListener('click', onAddClicked);

function onAddClicked() {
  const currentCount = parseInt(countDisplay.textContent)
  const newCount = currentCount + 1
  countDisplay.textContent = newCount;

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
}

function onFruitEmojiClicked(event) {
  fruitContainer.removeChild(event.currentTarget);
  countDisplay.textContent = document.querySelectorAll('.fruit-element').length;
}
