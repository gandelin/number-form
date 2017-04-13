var numbers;

// Submit the number into the numbers array
function putNumber(num) {
  event.preventDefault();
  var aNum = parseInt(num);
  if (!isNaN(aNum)) {
    if(typeof(numbers) == "undefined") {
      numbers = [];
    }
    numbers.push(aNum);
    updateDisplay();    
  } 
}

window.onload = function() {
  document.getElementById('resetButton').onclick = function() {
    // reset the numbers array
    numbers = [];
    updateDisplay();
  }  
}

function updateDisplay() {
  // clear out number
  var ele = document.getElementById('number');
  ele.value = NaN;
  
  var nbrs = "";
  // update Number Array
  for (var i=0;i<numbers.length;i++) {
    nbrs += numbers[i];
    if (i < numbers.length - 1) {
      nbrs += ', '
    }
  }
  ele = document.getElementById('numbersId');
  ele.innerHTML = nbrs;

  
  // update count
  var val = calcCount();
  ele = document.getElementById('cnt');
  ele.innerHTML = val;
  
  // update sum
  val = calcSum();
  ele = document.getElementById('sum');
  ele.innerHTML = val;
  
  // update ave
  val = calcAverage();
  ele = document.getElementById('ave');
  ele.innerHTML = val;
}

function calcCount() {
  return numbers.length;
}

function calcSum() {
  var mySum = 0.0;
  for (var i=0;i<numbers.length;i++) {
    mySum += numbers[i];
  }
  return mySum;
}

function calcAverage() {
  var result = "";
  if (calcCount() > 0) {
    result = calcSum()/calcCount();
  }
  return result;
}