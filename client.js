console.log(`Wassup World?!`);
// Global Variables
let totalMonthlyCost = 1666.67;
let monthlySpan = document.querySelector('.starting-monthly');
let monthlyDiv = document.querySelector('#total-monthly');

//TODO function to pull information from user input on submit on the form
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
        monthlyDiv.style.color = "white";
    }
} 

//TODO This function will delete the row and subtract from the total monthly cost
function deleteRow(event) {
    //! setting a var equal to the value of the previous Element sibling, which is the monthly cost for that employee
    let cost = event.target.parentElement.previousElementSibling;
    console.log(cost);
    //! converts the innerHTML of that element into a number
    let subCost = Number(cost.innerHTML);
    console.log(subCost);
    //! subtracts that number from the totalMonthlyCost to give an accurate amount
    totalMonthlyCost -= subCost;

    // this will make sure that if the totalMonthlyCost is less than 0, it will set it back to 0 instead
    if (totalMonthlyCost < 0) {
        totalMonthlyCost = 0;
    }

    // displays the totalMonthlyCost onto the DOM
    monthlySpan.innerHTML = `${totalMonthlyCost.toFixed(2)}`;

    // checks to see if removing the employee will lower totalMonthlyCost
    // this will change color back if ocndition is met
    if (totalMonthlyCost < 20000) {
        //! setting color to "transparent" or "initial" will clear the color to its default state"
        monthlyDiv.style.backgroundColor = "initial";
        monthlyDiv.style.color = "initial";
    }
    // removes the entire tr that holds all of that employee's info
    event.target.parentElement.parentElement.remove();
}

//! You can add two different functions two a single onClick or onSubmit event
//TODO function to clear the input fields after submit in the form
function clearInput(event) {
    //! .reset() is a function that will reset all input fields inside of a form
    event.target.reset();
}