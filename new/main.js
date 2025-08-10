// PDF Export Function
function exportPDF() {
    const element = document.getElementById("applicationForm");

    // Candidate name और Application No लेकर filename बनाना
    const name = document.querySelector("input[name='name']").value.trim() || "Candidate";
    const appNo = document.querySelector("input[name='appNo']").value.trim() || "AppNo";
    const fileName = `${name}_${appNo}_Application.pdf`;

    const opt = {
        margin:       0.5,
        filename:     fileName,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}