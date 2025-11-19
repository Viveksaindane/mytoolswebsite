function countWords() {
    let text = document.getElementById("textInput").value.trim();
    let words = text === "" ? 0 : text.split(/\s+/).length;
    let chars = text.length;
    document.getElementById("result").innerHTML =
        `Words: ${words} <br> Characters: ${chars}`;
}
