let count = 0;
const counterElement = document.getElementById('counter');

const updateCounter = () => {
  counterElement.textContent = count;
}

const updateColor = () => {
  if (count < 0) {
    counterElement.style.color = 'red';
  } else if (count == 0) {
    counterElement.style.color = 'white';
  } else {
    counterElement.style.color = 'green';
  }
}

const incrementa = () => {
  count++;
  updateColor();
  updateCounter();
};

const decrementa = () => {
  count--;
  updateColor();
  updateCounter();
};

const reset=()=> {
    count = 0;
    updateColor();
    updateCounter();
}

updateCounter();