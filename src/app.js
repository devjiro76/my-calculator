import Calcurator from "./calcurator";

const myCalc1 = new Calcurator({
  el: document.querySelector("#calcurator1"),
  template: "default",
  style: {
    width: 450
  }
});

const myCalc2 = new Calcurator({
  el: document.querySelector("#calcurator2"),
  template: "dark",
  style: {
    width: 450
  }
});

console.log(myCalc1);
