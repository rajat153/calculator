const fname = document.getElementById("fnum");
const sname = document.getElementById("snum");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const result = document.getElementById("result");

function calculate(sign, num1, num2) {
  let n1 = parseInt(num1)
  let n2 = parseInt(num2);
  let ans=""
  switch (sign) {
    case "+": {
      ans = `${num1}+${num2}`;
      break;
    }
    case "-": {
      ans = `${num1}-git${num2}`;
      break;
    }
    case "*": {
      ans = n1*n2;
      break;
    }
    case "/": {
      ans = n1/n2;
      break;
    }
    default:
      "";
  }
  result.innerText = `Answer is : ${ans}`;
}

add.addEventListener("click", () => {
  calculate("+", fname.value, sname.value);
});
subtract.addEventListener("click", () => {
  calculate("-", fname.value, sname.value);
});
multiply.addEventListener("click", () => {
  calculate("*", fname.value, sname.value);
}); 
division.addEventListener("cldick", () => {
  calculate("/", fname.value, sname.value);
});


