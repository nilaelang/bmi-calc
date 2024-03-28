window.onload = function() {  
    document.getElementById("resultContainer").style.display = "none";  
  };
  
function calculateBmi() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; 
    let errorMessage = ""; 
  
    // Input validation
    if (isNaN(weight) || weight <= 0) {
      errorMessage = "Please enter a valid weight (positive number).";
    } else if (isNaN(height) || height <= 0) {
      errorMessage = "Please enter a valid height (positive number).";
    }
  
    if (errorMessage) {
      
      document.getElementById("result").innerHTML = errorMessage;
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);
    let resultText = "Your calculated BMI is: <strong>" + bmiRounded + "</strong><br>";
  
    let textColor = '';
    let backgroundColor = '';  
    if (bmi < 18.5) {
      resultText += "Remarks: Underweight";
      textColor = '#00264d';
      backgroundColor = '#99ddff'; 
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText += "Remarks: Healthy Weight";
      textColor = ' #004d13';
      backgroundColor = '#ccff99'; 
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText += "Remarks: Overweight";
      textColor = '#e68a00';
      backgroundColor = '#ffff99';  
    } else {
      resultText += "Remarks: Obese";
      textColor = '#990000';
      backgroundColor = '#ffb3b3';  
    }
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';
    resultContainer.style.backgroundColor = backgroundColor;
  
    const resultValue = document.getElementById('resultValue');
    resultValue.innerHTML = resultText;
    resultValue.style.color = textColor;
  }
  
  function clearFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("resultContainer").style.display = "none";
  }
  
