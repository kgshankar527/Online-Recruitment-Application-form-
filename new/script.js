// आपका Google Apps Script Web App URL डालें
const scriptURL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";

document.getElementById("appForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch(scriptURL, { method: "POST", body: formData })
        .then(response => {
            if (response.ok) {
                alert("✅ Form submitted successfully!");
                document.getElementById("appForm").reset();
            } else {
                alert("❌ Error submitting form.");
            }
        })
        .catch(error => {
            console.error("Error!", error);
            alert("❌ Could not submit form.");
        });
});

function exportPDF() {
    const element = document.getElementById("applicationForm");

    const name = document.querySelector("input[name='name']").value.trim() || "Candidate";
    const appNo = document.querySelector("input[name='appNo']").value.trim() || "AppNo";
    const fileName = `${name}_${appNo}_Application.pdf`;

    const opt = {
        margin: 0.5,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

function shareForm() {
    if (navigator.share) {
        navigator.share({
            title: 'Recruitment Application Form',
            text: 'Here is my application form.',
            url: window.location.href
        }).catch(console.error);
    } else {
        alert("❌ Sharing not supported in this browser.");
    }
}

function previewForm() {
    alert("👀 Preview feature coming soon!");
}