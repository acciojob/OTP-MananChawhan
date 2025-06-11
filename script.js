//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((input, idx) => {
  input.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key >= '0' && key <= '9') {
      input.value = '';
      setTimeout(() => {
        if (idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      }, 10);
    } else if (key === 'Backspace') {
      input.value = '';
      if (idx > 0) {
        setTimeout(() => {
          codes[idx - 1].focus();
        }, 10);
      }
    } else {
      e.preventDefault(); // Prevent non-numeric input
    }
  });
});
