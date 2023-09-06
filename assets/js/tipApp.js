/*Elements*/
const bill = document.querySelector(".bill__input");
btns = document.querySelectorAll(".tips__btn");
totalPeople = document.querySelector(".people__input");
redText = document.querySelector(".span");
totalTip = document.querySelector(".total-tip");
totalPerPerson = document.querySelector(".total-person");
custom = document.querySelector(".custom");
btnReset = document.querySelector(".results__btn");

const cal = (num) => {
  /*Total bill value*/
  const totalBill = bill.value * num;
  // totalTip.value = `$${totalBill}`;

  /*TipPerPerson*/
  const tipDivided = totalBill / totalPeople.value;

  if (totalPeople.value < 1) {
    redText.textContent = "Can't be zero";
    totalPeople.style.border = "0.1rem solid #FF0000";
  } else {
    totalTip.value = `$${Math.round(totalBill)}`;
    totalPerPerson.value = `$${Math.round(tipDivided)}`;
  }
};

btns[0].addEventListener("click", () => {
  cal(0.05);
});
btns[1].addEventListener("click", () => {
  cal(0.1);
});
btns[2].addEventListener("click", () => {
  cal(0.15);
});
btns[3].addEventListener("click", () => {
  cal(0.25);
});
btns[4].addEventListener("click", () => {
  cal(0.5);
});
btns[5].addEventListener("click", () => {
  custom.value <= 10 ? cal(custom.value / 10) : cal(custom.value / 100);
  if (custom.value > 0 && totalPeople.value > 0) {
    redText.textContent = "";
    totalPeople.style.border = "0.1rem solid #000000";
  }
});

totalPeople.addEventListener("input", () => {
  if (totalPeople.value > 0) {
    redText.textContent = "";
    totalPeople.style.border = "0.1rem solid #000000";
  } else {
    redText.textContent = "Can't be zero";
    totalPeople.style.border = "0.1rem solid #FF0000";
  }
});

btnReset.addEventListener("click", () => {
  bill.value = "";
  totalPeople.value = "";
  totalPerPerson.value = "";
  custom.value = "";
  totalTip.value = "";
});
