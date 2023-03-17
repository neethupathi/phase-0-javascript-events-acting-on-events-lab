
  var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#ff69b4";
dodger.style.bottom = "100px";


function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if ( left > 0 ) {
    dodger.style.left = `${left - 4}px`;
  }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if ( left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}


 document.addEventListener('keydown', function(e) {

  if ( e.key === 39)
{
  moveDodgerRight();
}
  if(e.key === "ArrowRight"){
    moveDodgerRight();
  }
});