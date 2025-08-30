const questions = [
    {q: "Which vitamin is essential for blood clotting?", options:["Vitamin A","Vitamin K","Vitamin C","Vitamin D"], answer:1},
    {q: "Paracetamol is also known as?", options:["Acetaminophen","Ibuprofen","Aspirin","Diclofenac"], answer:0},
    {q: "Insulin is secreted by which organ?", options:["Liver","Pancreas","Kidney","Heart"], answer:1},
    {q: "Amoxicillin belongs to which class?", options:["Beta-lactam","Macrolide","Tetracycline","Fluoroquinolone"], answer:0},
    {q: "Which drug is used as an anticoagulant?", options:["Warfarin","Paracetamol","Omeprazole","Atorvastatin"], answer:0},
    {q: "Which is an NSAID?", options:["Aspirin","Insulin","Amoxicillin","Metformin"], answer:0},
    {q: "Which route is fastest for drug absorption?", options:["Oral","Intravenous","Topical","Rectal"], answer:1},
    {q: "Which organ metabolizes most drugs?", options:["Liver","Kidney","Heart","Lungs"], answer:0},
    {q: "Metformin is used to treat?", options:["Hypertension","Diabetes","Asthma","Pain"], answer:1},
    {q: "Which drug is used for allergies?", options:["Antihistamine","Antibiotic","Analgesic","Diuretic"], answer:0},
    {q: "Which antibiotic treats TB?", options:["Rifampicin","Ceftriaxone","Azithromycin","Clindamycin"], answer:0},
    {q: "Ceftriaxone is given by which route?", options:["Oral","IV","Topical","Inhalation"], answer:1},
    {q: "Which is a proton pump inhibitor?", options:["Omeprazole","Metformin","Aspirin","Warfarin"], answer:0},
    {q: "Which vitamin deficiency causes scurvy?", options:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"], answer:2},
    {q: "Which drug is used for epilepsy?", options:["Phenytoin","Paracetamol","Amoxicillin","Insulin"], answer:0},
    {q: "Which class does Atorvastatin belong?", options:["Statin","Beta blocker","Diuretic","NSAID"], answer:0},
    {q: "Which is an antifungal?", options:["Clotrimazole","Cefixime","Metformin","Paracetamol"], answer:0},
    {q: "Which drug treats malaria?", options:["Chloroquine","Ibuprofen","Insulin","Warfarin"], answer:0},
    {q: "Which electrolyte imbalance causes arrhythmia?", options:["Low Potassium","High Glucose","Low Calcium","High Sodium"], answer:0},
    {q: "Which is used in hypertension?", options:["Amlodipine","Paracetamol","Amoxicillin","Omeprazole"], answer:0},
    {q: "Heparin is used as?", options:["Anticoagulant","Analgesic","Antibiotic","Antipyretic"], answer:0},
    {q: "Which is a corticosteroid?", options:["Prednisone","Ibuprofen","Amoxicillin","Insulin"], answer:0},
    {q: "Which vitamin is fat soluble?", options:["Vitamin C","Vitamin B1","Vitamin A","Vitamin B12"], answer:2},
    {q: "Which treats hypothyroidism?", options:["Levothyroxine","Insulin","Metformin","Omeprazole"], answer:0},
    {q: "Which is used for pain?", options:["Paracetamol","Omeprazole","Aspirin","Both A & C"], answer:3},
    {q: "Which drug treats asthma?", options:["Salbutamol","Warfarin","Amoxicillin","Omeprazole"], answer:0},
    {q: "Which is a diuretic?", options:["Furosemide","Amlodipine","Insulin","Ceftriaxone"], answer:0},
    {q: "Which is an opioid analgesic?", options:["Morphine","Ibuprofen","Paracetamol","Metformin"], answer:0},
    {q: "Which drug treats bacterial infections?", options:["Antibiotic","Analgesic","Diuretic","Antihistamine"], answer:0},
    {q: "Which vaccine prevents polio?", options:["OPV","BCG","Hepatitis B","MMR"], answer:0},
];

const questionsDiv = document.getElementById("questions");

// Load questions
function loadQuestions() {
    questions.forEach((q, index) => {
        const card = document.createElement("div");
        card.className = "question-card";

        let optionsHTML = "";
        q.options.forEach((opt, i) => {
            optionsHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${opt}
                </label>
            `;
        });

        card.innerHTML = `<h3>${index+1}. ${q.q}</h3>${optionsHTML}<div class="feedback" id="feedback${index}"></div>`;
        questionsDiv.appendChild(card);
    });

    // Add event listeners for instant feedback
    questions.forEach((q, index) => {
        const inputs = document.querySelectorAll(`input[name="q${index}"]`);
        inputs.forEach(input => {
            input.addEventListener("change", () => {
                const feedback = document.getElementById(`feedback${index}`);
                if(parseInt(input.value) === q.answer){
                    feedback.innerText = "✅ Correct!";
                    feedback.style.color = "green";
                } else {
                    feedback.innerText = `❌ Wrong! Correct answer: ${q.options[q.answer]}`;
                    feedback.style.color = "red";
                }
            });
        });
    });
}

loadQuestions();


// 1. SGPA to Percentage
function convertSGPA() {
    const sgpa = parseFloat(document.getElementById("sgpa").value);
    if(isNaN(sgpa) || sgpa < 0 || sgpa > 10){
        document.getElementById("sgpaResult").innerText = "Please enter a valid SGPA (0-10)";
        return;
    }
    const percentage = (sgpa - 0.75) * 10; // Common formula
    document.getElementById("sgpaResult").innerText = `Percentage: ${percentage.toFixed(2)}%`;
}

// 2. Dose Calculation (mg)
function calculateDose() {
    const weight = parseFloat(document.getElementById("weight").value);
    const dosePerKg = parseFloat(document.getElementById("dosePerKg").value);
    if(isNaN(weight) || isNaN(dosePerKg) || weight <= 0 || dosePerKg <= 0){
        document.getElementById("doseResult").innerText = "Please enter valid values";
        return;
    }
    const dose = weight * dosePerKg;
    document.getElementById("doseResult").innerText = `Required Dose: ${dose.toFixed(2)} mg`;
}

// 3. CGPA to Percentage
function convertCGPA() {
    const cgpa = parseFloat(document.getElementById("cgpa").value);
    if(isNaN(cgpa) || cgpa < 0 || cgpa > 10){
        document.getElementById("cgpaResult").innerText = "Please enter a valid CGPA (0-10)";
        return;
    }
    const percentage = cgpa * 9.5; // Standard formula
    document.getElementById("cgpaResult").innerText = `Percentage: ${percentage.toFixed(2)}%`;
}

