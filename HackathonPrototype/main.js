// let newX = 0, newY = 0, startX = 0, startY = 0;

// const card = document.getElementById('card')

// card.addEventListener('mousedown', mouseDown)

// function mouseDown(e) {
//     startX = e.clientX
//     startY = e.clientY

//     document.addEventListener('mousemove', mouseMove)
//     document.addEventListener('mouseup', mouseUp)
// }

// function mouseMove(e) {
//     newX = startX - e.clientX
//     newY = startY - e.clientY

//     startX = e.clientX
//     startY = e.clientY
    
//     card.style.top = (card.offsetTop - startY) + 'px'
//     card.style.left = (card.offsetLeft - startX) + 'px'
// }

// function mouseUp(e) {
//     document.removeEventListener('mousemove', mouseMove)
// }
const card = document.getElementById('card');
const handle = document.getElementById('resize-handle');

let startX = 0, startY = 0;
let startWidth = 0, startHeight = 0;
let isResizing = false;

// Dragging
card.addEventListener('mousedown', function (e) {
  if (e.target === handle) return; // Skip drag if resizing
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopAction);
});

function drag(e) {
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  card.style.left = card.offsetLeft + dx + 'px';
  card.style.top = card.offsetTop + dy + 'px';
  startX = e.clientX;
  startY = e.clientY;
}

// Resizing
handle.addEventListener('mousedown', function (e) {
  isResizing = true;
  startX = e.clientX;
  startY = e.clientY;
  startWidth = card.offsetWidth;
  startHeight = card.offsetHeight;

  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopAction);
});

function resize(e) {
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  card.style.width = startWidth + dx + 'px';
  card.style.height = startHeight + dy + 'px';
}

function stopAction() {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopAction);
  isResizing = false;
}
