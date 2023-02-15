console.log(`Wassup World?!`);
// Global Variables
let totalMonthlyCost = 1666.67;
let monthlySpan = document.querySelector('.starting-monthly');
let monthlyDiv = document.querySelector('#total-monthly');

// function to pull information from user input on submit on the form
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

    // This .innerHTML will append the totalMonthlyCost to the <p> tag inside the #total-monthly div
    monthlySpan.innerHTML = `${totalMonthlyCost.toFixed(2)}`;
    //! parseFloat(var.toFixed(2)); will round to the second decimal place, as indicated by the (2)
    employeeDiv.innerHTML += `
        <tr>
            <td>${lastName}</td>
            <td>${firstName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSal}</td>
            <td class="cost">${parseFloat(monthlyCost.toFixed(2))}</td>
            <td><button id="delete-button" onclick="deleteRow(event)" >Delete</button></td>
        </tr>
    `  
    // This will change the bg color of the total monthly cost div to red if it exceeds 20000
    if (totalMonthlyCost > 20000) {
        monthlyDiv.style.backgroundColor = "red";
    }
}

// This function will delete the row and subtract from the total monthly cost
function deleteRow(event) {
    let cost = event.target.parentElement.previousElementSibling;
    console.log(cost);
    let subCost = Number(cost.innerHTML);
    console.log(subCost);
    totalMonthlyCost -= subCost;

    monthlySpan.innerHTML = `${totalMonthlyCost.toFixed(2)}`;
    event.target.parentElement.parentElement.remove();
    if (totalMonthlyCost < 20000) {
        //! setting color to "transparent" or "initial" will clear the color to its default state"
        monthlyDiv.style.backgroundColor = "initial";
    }
}

//! You can add two different functions two a single onClick or onSubmit event
// function to clear the input fields after submit in the form
function clearInput(event) {
    //! .reset() is a funciton that will reset all input fields inside of a form
    event.target.reset();
}