'use strict';

const REG_EXPS = {
  'first-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  'last-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
};

function validateName(e) {
  if (REG_EXPS['first-name'].test(e.target)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
  }
}
