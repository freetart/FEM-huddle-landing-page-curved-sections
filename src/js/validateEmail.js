const validateEmail = () => {
  const form = document.querySelector('.form');
  const emailInput = document.querySelector('.form__input');

  // check email input
  const checkInput = () => {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
      setErrorMsg(emailInput, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorMsg(emailInput, 'Email is not valid');
    } else {
      setSuccess(emailInput);
    }
  };

  // error message
  const setErrorMsg = (input, message) => {
    const inputGroup = input.parentElement.parentElement;
    const errorMessage = inputGroup.querySelector('.form__message');
    errorMessage.innerText = message;
    inputGroup.classList.remove('success');
    inputGroup.classList.add('error');
  };

  // success icon
  const setSuccess = (input) => {
    const inputGroup = input.parentElement.parentElement;
    inputGroup.classList.remove('error');
    inputGroup.classList.add('success');
  };

  // check if valid email
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  // submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
  });
};

export default validateEmail;
