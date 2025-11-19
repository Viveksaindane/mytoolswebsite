function calcBMI() {
    let w = parseFloat(document.getElementById("weight").value);
    let h = parseFloat(document.getElementById("height").value) / 100;
    let bmi = (w / (h * h)).toFixed(2);
    document.getElementById("bmiResult").innerText = "BMI: " + bmi;
}
