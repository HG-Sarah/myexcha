let count = 0;

const countEl = document.getElementById('count');

// Sync the displayed number with the current count
function render() {
  countEl.textContent = count;
}

document.getElementById('increase').addEventListener('click', () => {
  count += 1;
  render();
});

document.getElementById('decrease').addEventListener('click', () => {
  count -= 1;
  render();
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  render();
});
