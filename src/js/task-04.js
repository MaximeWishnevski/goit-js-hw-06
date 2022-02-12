const decrementRef = document.querySelector('[data-action="decrement"]');
console.log(decrementRef);
const incrementRef = document.querySelector('[data-action="increment"]');
console.log(incrementRef);
const spanRef = document.querySelector("#value");
console.log(spanRef);
let counterValue = 0;
const changeValue = function (step) {
  counterValue += step;
  spanRef.textContent = counterValue;
};
decrementRef.addEventListener("click", () => changeValue(-1));
incrementRef.addEventListener("click", () => changeValue(1));
