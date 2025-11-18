function convertUnit() {
    let km = document.getElementById("km").value;
    document.getElementById("meter").innerText = km * 1000 + " meters";
}
