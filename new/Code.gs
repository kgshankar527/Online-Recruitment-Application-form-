function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1️⃣ Personal Details Sheet
  var personalSheet = ss.getSheetByName("PersonalDetails");
  if (!personalSheet) personalSheet = ss.insertSheet("PersonalDetails");

  var personalData = [
    e.parameter["post"] || "",
    e.parameter["appNo"] || "",
    e.parameter["appDate"] || "",
    e.parameter["UID"] || "",
    e.parameter["name"] || "",
    e.parameter["fatherName"] || "",
    e.parameter["motherName"] || "",
    e.parameter["gender"] || "",
    e.parameter["dob"] || "",
    e.parameter["maritalStatus"] || "",
    e.parameter["religion"] || "",
    e.parameter["disabled"] || "",
    e.parameter["category"] || "",
    e.parameter["mobile"] || "",
    e.parameter["email"] || "",
    e.parameter["address"] || "",
    e.parameter["city"] || "",
    e.parameter["declare"] || ""
  ];
  personalSheet.appendRow(personalData);

  // 2️⃣ Education Details Sheet
  var eduSheet = ss.getSheetByName("EducationDetails");
  if (!eduSheet) eduSheet = ss.insertSheet("EducationDetails");

  var exams = [
    {prefix: "sec", title: "Secondary"},
    {prefix: "sr", title: "Sr. Secondary"},
    {prefix: "grad", title: "Graduation"},
    {prefix: "pg", title: "Post Graduation"},
    {prefix: "bed", title: "B.Ed"},
    {prefix: "reet", title: "REET"},
    {prefix: "dip", title: "Diploma (Computer)"},
    {prefix: "rkcl", title: "RKCL"}
  ];

  exams.forEach(function(exam) {
    eduSheet.appendRow([
      e.parameter["appNo"] || "",
      exam.title,
      e.parameter[exam.prefix + "_sub"] || "",
      e.parameter[exam.prefix + "_board"] || "",
      e.parameter[exam.prefix + "_roll"] || "",
      e.parameter[exam.prefix + "_year"] || "",
      e.parameter[exam.prefix + "_percent"] || ""
    ]);
  });

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
