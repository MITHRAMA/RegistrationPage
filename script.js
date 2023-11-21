document.addEventListener('DOMContentLoaded', function () {
    
    const registrationForm = document.getElementById('registrationForm');
    const dataTableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

       
        const dobInput = document.getElementById('date');
        const dobValue = new Date(dobInput.value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dobValue.getFullYear();

        if (age < 18 || age > 55) {
            alert('DOB must be between ages 18 and 55.');
            return;
        }

       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = dobValue.toISOString().split('T')[0]; 
        const acceptedTerms = document.getElementById('terms').checked;

        // Create a new table row with the form data
        const newRow = dataTableBody.insertRow();
        newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptedTerms}</td>`;

        // Clear form fields after submission
        registrationForm.reset();
    });
});
