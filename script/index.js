let count = 0;
const counterElement = document.getElementById('counter');

const updateCounter =()=> {
  counterElement.textContent = count;
}

const incrementa = () => {
  count++;

  if (count < 0) {
    counterElement.style.color = 'red';
  } else if (count == 0) {
    counterElement.style.color = 'white';
  } else {
    counterElement.style.color = 'green';
  }

  updateCounter();
};

const decrementa = () => {
  count--;

  if (count > 0) {
    counterElement.style.color = 'green';
  } else if (count == 0) {
    counterElement.style.color = 'white';
  } else {
    counterElement.style.color = 'red';
  }

  updateCounter();
};

const reset=()=> {
    count = 0;
    counterElement.style.color = 'white';
    updateCounter();
}

updateCounter();