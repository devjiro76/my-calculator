import Calculator from "./calculator";

const myCalc1 = new Calculator({
  el: document.querySelector("#calculator1"),
  template: "default",
  style: {
    width: 450
  }
});

const myCalc2 = new Calculator({
  el: document.querySelector("#calculator2"),
  template: "dark",
  style: {
    width: 450
  }
});

console.log(myCalc1);
