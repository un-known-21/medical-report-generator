const name_EL = document.getElementById("nameEl");
const age_EL = document.getElementById("ageEl");
const symptoms_EL = document.getElementById("symptomsEl");
const generate_Report = document.getElementById("generateRpt");

let user = [];
generate_Report.addEventListener("click", function () {
    
    let name = name_EL.value;
    let age = age_EL.value;
    let symptoms = symptoms_EL.value;

    //* Diagnosis --
    let diagnosis;
    if (symptoms.toLowerCase().includes("fever")){
        diagnosis = "Possible viral Infection. Take rest and stay hydrated.";
        
    } else if (symptoms.toLowerCase().includes("sneeze")){
        diagnosis = "Possible cold or flu. Consider warm Herbal Tea.";

    } else {
        diagnosis = "Consult a doctor for proper diagnosis.";
    }

    let person = {
        name: name,
        age: age,
        symptoms: symptoms,
        diagnosis: diagnosis
    };
    user.push(person);

    // Save the entire array
    localStorage.setItem("users", JSON.stringify(user));

    //Go to Next Page
    window.location.href = "report.html";

    //* Medical Report --
    // let report = `
    //    <h3>Medical Report</h3>
    //    <p><strong>Name:</strong> ${name_EL.value}</p>
    //    <p><strong>Age:</strong> ${age_EL.value}</p>
    //    <p><strong>Symptoms:</strong> ${symptoms_EL.value}</p>
    //    <p><strong>Report:</strong> ${diagnosis}</p>
    // `;

    // document.getElementById("report").innerHTML = report;
});