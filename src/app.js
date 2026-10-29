import { add, multiply } from "./calc.js";

document.getElementById("result").textContent =
  `2 + 3 = ${add(2, 3)}, 4 x 5 = ${multiply(4, 5)}`;