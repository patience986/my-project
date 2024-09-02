document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle custom validation

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Get all form inputs
    const name = document.getElementById('name');
    const nationalId = document.getElementById('nationalId');
    const location = document.getElementById('location');
    const contact = document.getElementById('contact');
    const amountDue = document.getElementById('amountDue');
    const salesAgent = document.getElementById('salesAgent');
    const dueDate = document.getElementById('dueDate');
    const productName = document.getElementById('productName');
    const productType = document.getElementById('productType');
    const tonnage = document.getElementById('tonnage');
    const dispatchDate = document.getElementById('dispatchDate');

    // Validate Buyer's Name
    if (!/^[A-Za-z0-9\s]{2,}$/.test(name.value)) {
        showError('nameError', 'Please enter a valid buyer name (alphanumeric, at least 2 characters).');
        isValid = false;
    }

    // Validate National ID (NIN)
    if (!/^[A-Za-z0-9]{10,}$/.test(nationalId.value)) {
        showError('nationalIdError', 'Please enter a valid National ID (at least 10 characters).');
        isValid = false;
    }

    // Validate Location
    if (!/^[A-Za-z0-9\s]{2,}$/.test(location.value)) {
        showError('locationError', 'Please enter a valid location (alphanumeric, at least 2 characters).');
        isValid = false;
    }

    // Validate Contact
    if (!/^\+?\d{10,15}$/.test(contact.value)) {
        showError('contactError', 'Please enter a valid phone number (10 to 15 digits).');
        isValid = false;
    }

    // Validate Amount Due
    if (amountDue.value.toString().length < 5) {
        showError('amountDueError', 'Amount due must be at least 10,000 UgX.');
        isValid = false;
    }

    // Validate Sales Agent
    if (!/^[A-Za-z0-9\s]{2,}$/.test(salesAgent.value)) {
        showError('salesAgentError', 'Please enter a valid sales agent name (alphanumeric, at least 2 characters).');
        isValid = false;
    }

    // Validate Due Date
    if (!dueDate.value) {
        showError('dueDateError', 'Please select a due date.');
        isValid = false;
    }

    // Validate Product Name
    if (!/^[A-Za-z0-9\s]{2,}$/.test(productName.value)) {
        showError('productNameError', 'Please enter a valid product name (alphanumeric, at least 2 characters).');
        isValid = false;
    }

    // Validate Type of Produce
    if (!/^[A-Za-z\s]{2,}$/.test(productType.value)) {
        showError('productTypeError', 'Please enter a valid product type (alphabetic, at least 2 characters).');
        isValid = false;
    }

    // Validate Tonnage
    if (tonnage.value < 1) {
        showError('tonnageError', 'Tonnage must be a positive number.');
        isValid = false;
    }

    // Validate Date of Dispatch
    if (!dispatchDate.value) {
        showError('dispatchDateError', 'Please select a valid date of dispatch.');
        isValid = false;
    }

    // If the form is valid, proceed to submit or perform further actions
    if (isValid) {
        alert('Form submitted successfully!');
        // form.submit(); // Uncomment this line to submit the form
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.textContent = '';
    });
}