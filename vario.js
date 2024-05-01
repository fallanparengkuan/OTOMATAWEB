function checkScientificNumber() {
  var input = document.getElementById("numberInput").value;
  var scientificNumberRegex = /^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?$/;

  if (scientificNumberRegex.test(input)) {
      document.getElementById("result").innerText = "The input is a scientific number.";
  } else {
      document.getElementById("result").innerText = "The input is not a scientific number.";
  }
}
