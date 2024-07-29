document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const totalCount = document.getElementById("totalCount");
    const remainingCount = document.getElementById("remainingCount");
    const maxChars = 50;

    textInput.addEventListener("input", function() {
        const currentLength = textInput.value.length;
        totalCount.textContent = currentLength;
        remainingCount.textContent = maxChars - currentLength;
    });
});