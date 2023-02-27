document.getElementById("decrement").addEventListener("click", myDec);

function myDec() {
  var a = parseInt(document.getElementById("counter").textContent);
  a = a -1;
  if (a < -5) {
    a = 5;
  }
  document.getElementById("counter").innerHTML = a;
}

document.getElementById("increment").addEventListener("click", myInc);

function myInc() {
    var a = parseInt(document.getElementById("counter").textContent);
    a = a + 1;
    if (a >5) {
        a = -5;
    }
    document.getElementById("counter").innerHTML = a;
}

document.getElementById("reset").addEventListener("click", myReset);

function myReset() {
    a = 0;
    document.getElementById("counter").innerHTML = a;
}