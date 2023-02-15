console.log(`Wassup World?!`);

// function to pull information from user input on submit
function submitForm(event) {
    event.preventDefault();
    let firstName = document.querySelector('#firstNameInput').value;
    let lastName = document.querySelector('#lastNameInput').value;
    let idNumber = document.querySelector('#idInput').value;
    let jobTitle = document.querySelector('#jobTitleInput').value;
    let annualSal = Number(document.querySelector('#salaryInput').value);

    console.log(firstName);
    console.log(lastName);
    console.log(idNumber);
    console.log(jobTitle);
    console.log(annualSal);

}