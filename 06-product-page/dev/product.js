let counterValue = 0;

function updateCounter() {
  const counterInput = document.getElementById('counter');
  counterInput.value = counterValue;
}

function increment() {
  counterValue += 1;
  updateCounter();
}

function decrement() {
  counterValue -= 1;
  updateCounter();
}