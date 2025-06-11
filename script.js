const inputs = document.querySelectorAll('.code');

window.addEventListener('DOMContentLoaded', () => {
  inputs[0].focus();
});

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      } else {
        input.value = '';
      }
    }
  });
});
