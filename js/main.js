'use strict';

//

const INPUTS_REG_EXP = {
  'first-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  'last-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  email: /^.+@.+\.[a-z]{2,3}$/,
  'phone-number': /^\d{3}$/,
};

const formInputs = document.querySelectorAll('.formInput');

formInputs.forEach((i) => i.addEventListener('input', inputHandler));

function inputHandler(e) {
  e.preventDefault();

  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  }
}
