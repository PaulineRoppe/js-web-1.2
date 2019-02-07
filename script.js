
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
document.querySelector("#buttonAdd").addEventListener("click",() => {
  var n1 = parseFloat(document.getElementById('textOne').value);
  var n2 = parseFloat(document.getElementById('textTwo').value);
  document.querySelector("#result").value=n1 + n2;
});

document.querySelector("#buttonSub").addEventListener("click",() => {
  var n1 = parseFloat(document.getElementById('textOne').value);
  var n2 = parseFloat(document.getElementById('textTwo').value);
  document.querySelector("#result").value=n1 - n2;
});


document.querySelector("#buttonMul").addEventListener("click",() => {
  var n1 = parseFloat(document.getElementById('textOne').value);
  var n2 = parseFloat(document.getElementById('textTwo').value);
  document.querySelector("#result").value=n1 * n2;
});


document.querySelector("#buttonSou").addEventListener("click",() => {
  var n1 = parseFloat(document.getElementById('textOne').value);
  var n2 = parseFloat(document.getElementById('textTwo').value);
  document.querySelector("#result").value=n1 / n2;
});
