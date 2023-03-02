// Your code here  

//move left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
        
  if ( left > 0 ) {
    dodger.style.left = `${left - 1}px`;
  }
}

//move right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if ( left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

//event listeners
document.addEventListener('keydown', function(e) {
  if ( e.which === 37 ) {
    moveDodgerLeft();
  }
  if ( e.which === 39 ) {
    moveDodgerRight();
  }
});