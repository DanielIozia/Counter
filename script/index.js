let count = 0;
const counterElement = document.getElementById('counter');

const updateCounter =()=> {
  counterElement.textContent = count;
}

const incrementa=()=> {

  if(count < 0) {
    counterElement.style.color = 'red';
  }

  if(count == -1){
    counterElement.style.color = 'white';
  }

  if(count >= 0) {
    counterElement.style.color = 'green';
  }
  
  count++;
  updateCounter();
}

const decrementa=()=> {

  if(count > 0) {
    counterElement.style.color = 'green';
  }

  if(count == 1){
    counterElement.style.color = 'white';
  }

  if(count <= 0) {
    counterElement.style.color = 'red';
  }
  count--;
  
  updateCounter();
}

const reset=()=> {
    count = 0;
    counterElement.style.color = 'white';
    updateCounter();
}

updateCounter();