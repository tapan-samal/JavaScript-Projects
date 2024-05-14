const calculateBmi = () => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  let bmi = weight / ((height / 100) ** 2);
  console.log(bmi);

  let resultMsg = "BMI is : " + bmi.toFixed(2);
  if (bmi < 18.5 && bmi > 0) {
    resultMsg = resultMsg + " (Under weight)";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultMsg = resultMsg + " (Normal)";
  } else if (bmi >= 25 && bmi < 30) {
    resultMsg = resultMsg + " (Over Weight)";
  } else {
    resultMsg = "Entered invalid height or weight !!" 
  }
  console.log(resultMsg);
  document.getElementById('result').innerHTML = resultMsg;
  
};
