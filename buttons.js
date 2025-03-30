document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const dropArea = document.getElementById("drop-area");
    const extractButton = document.getElementById("extractButton");
    const sampleButton = document.getElementById("sampleButton");

    // Handle file selection
    dropArea.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            extractButton.style.display = "block";
        }
    });

    // Handle drag and drop
    dropArea.addEventListener("dragover", function (e) {
        e.preventDefault();
        dropArea.classList.add("dragover");
    });

    dropArea.addEventListener("dragleave", function () {
        dropArea.classList.remove("dragover");
    });

    dropArea.addEventListener("drop", function (e) {
        e.preventDefault();
        dropArea.classList.remove("dragover");
        fileInput.files = e.dataTransfer.files;
        if (fileInput.files.length > 0) {
            extractButton.style.display = "block";
        }
    });

    // Handle sample button click
    sampleButton.addEventListener("click", function () {
        alert("Using sample image for extraction.");
        extractButton.style.display = "block";
    });

    // Handle extract button click
    extractButton.addEventListener("click", function () {
        alert("Extracting event details...");
    });
});
