function generateQR() {
    let text = document.getElementById("qrText").value;
    QRCode.toCanvas(text, { width: 200 }, function (err, canvas) {
        if (err) return;
        let result = document.getElementById("qrResult");
        result.innerHTML = "";
        result.appendChild(canvas);
    });
}
