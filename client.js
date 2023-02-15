console.log(`Wassup World?!`);
// Global Variables
let totalMonthlyCost = 1666.67;
let monthlySpan = document.querySelector('.total-monthly');

// function to pull information from user input on submit
function submitForm(event) {
    event.preventDefault();
    // storing inputs into variables
    let employeeDiv = document.querySelector('#employee-list');
    let firstName = document.querySelector('#firstNameInput').value;
    let lastName = document.querySelector('#lastNameInput').value;
    let idNumber = document.querySelector('#idInput').value;
    let jobTitle = document.querySelector('#jobTitleInput').value;
    let annualSal = Number(document.querySelector('#salaryInput').value);
    // store monthly calculations
    let monthlyCost = annualSal / 12;
    totalMonthlyCost += monthlyCost;
    monthlySpan.innerHTML = `${totalMonthlyCost.toFixed(2)}`;
    //! parseFloat(var.toFixed(2)); will round to the second decimal place, as indicated by the 2
    employeeDiv.innerHTML += `
        <tr>
            <td>${lastName}</td>
            <td>${firstName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSal}</td>
            <td>${parseFloat(monthlyCost.toFixed(2))}</td>
            <td><button id="delete-button" onclick="deleteRow(event)" >Delete</button></td>
        </tr>
    `
    if (monthlyCost > 20000) {
        
    }
}