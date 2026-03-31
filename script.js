const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

// Click upload
dropArea.onclick = () => fileInput.click();

// Show image
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
});

const ctx = document.getElementById("barChart");

window.onload = function () {
    const ctx = document.getElementById("barChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Scans",
                data: [35, 45, 30, 55, 48, 20, 15],
                backgroundColor: "rgba(59, 130, 246, 0.7)"
            }]
        }
    });
};