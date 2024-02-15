let count = 0;
const counterElement = document.getElementById('counter');

const updateCounter =()=> {
  counterElement.textContent = count;
}

const incrementa=()=> {
  count++;
  updateCounter();
}

const decrementa=()=> {
  if(count == 0) return;
  count--;
  updateCounter();
}

const reset=()=> {
    count = 0;
    updateCounter();
}

updateCounter();