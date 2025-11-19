function calcEMI() {
    let P = parseFloat(document.getElementById("loan").value);
    let r = parseFloat(document.getElementById("rate").value) / 1200;
    let n = parseFloat(document.getElementById("months").value);

    let emi = (P * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
    document.getElementById("emiResult").innerText = "EMI: ₹" + emi.toFixed(2);
}
