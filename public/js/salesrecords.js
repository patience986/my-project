document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle custom validation

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Get all form inputs
    const productName = document.getElementById('productName');
    const tonnage = document.getElementById('tonnage');
    const amountPaid = document.getElementById('amountPaid');
    const buyerName = document.getElementById('buyerName');
    const salesAgent = document.getElementById('salesAgent');
    const dateTime = document.getElementById('dateTime');

    // Validate Product Name
    if (!/^[A-Za-z0-9\s]{2,}$/.test(productName.value)) {
        showError('productNameError', 'Please enter a valid product name (alphanumeric, at least 2 characters).');
        isValid = false;
    } else {
        document.getElementById('productNameError').textContent = '';
    }

    // Validate Tonnage
    if (tonnage.value < 1) {
        showError('tonnageError', 'Tonnage must be a positive number.');
        isValid = false;
    } else {
        document.getElementById('tonnageError').textContent = '';
    }

    // Validate Amount Paid
    if (amountPaid.value < 10000) {
        showError('amountPaidError', 'Amount paid must be at least 10,000 UgX.');
        isValid = false;
    } else {
        document.getElementById('amountPaidError').textContent = '';
    }

    // Validate Buyer's Name
    if (!/^[A-Za-z0-9\s]{2,}$/.test(buyerName.value)) {
        showError('buyerNameError', 'Please enter a valid buyer name (alphanumeric, at least 2 characters).');
        isValid = false;
    } else {
        document.getElementById('buyerNameError').textContent = '';
    }

    // Validate Sales Agent
    if (!/^[A-Za-z0-9\s]{2,}$/.test(salesAgent.value)) {
        showError('salesAgentError', 'Please enter a valid sales agent name (alphanumeric, at least 2 characters).');
        isValid = false;
    } else {
        document.getElementById('salesAgentError').textContent = '';
    }

    // Validate Date and Time
    if (!dateTime.value) {
        showError('dateTimeError', 'Please select a date and time.');
        isValid = false;
    } else {
        document.getElementById('dateTimeError').textContent = '';
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