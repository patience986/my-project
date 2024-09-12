// Get the form element
const form = document.getElementById('myForm');

// Get all form fields by their IDs
const buyerName = document.getElementById('name');
const nationalId = document.getElementById('nationalId');
const location = document.getElementById('location');
const contact = document.getElementById('contact');
const amountDue = document.getElementById('amountDue');
const salesAgent = document.getElementById('salesAgent');
const dueDate = document.getElementById('dueDate');
const produce = document.getElementById('produce');
const productType = document.getElementById('productType');
const tonnage = document.getElementById('tonnage');
const dispatchDate = document.getElementById('dispatchDate');

// Get the error message spans by their IDs
const buyerNameError = document.getElementById('buyerNameError');
const nationalIdError = document.getElementById('nationalIdError');
const locationError = document.getElementById('locationError');
const contactError = document.getElementById('contactError');
const amountDueError = document.getElementById('amountDueError');
const salesAgentError = document.getElementById('salesAgentError');
const dueDateError = document.getElementById('dueDateError');
const produceError = document.getElementById('produceError');
const productTypeError = document.getElementById('productTypeError');
const tonnageError = document.getElementById('tonnageError');
const dispatchDateError = document.getElementById('dispatchDateError');

// Add form submit event listener
form.addEventListener('submit', function (event) {
  // Prevent form submission by default
  event.preventDefault();

  // Initialize validation flag
  let isValid = true;

  // Clear all previous error messages
  clearErrors();

  // Validate Buyer Name (alpha-numeric, minimum 2 characters)
  if (!/^[a-zA-Z0-9 ]{2,}$/.test(buyerName.value)) {
    buyerNameError.textContent = 'Buyer\'s name must be alphanumeric and at least 2 characters long.';
    buyerName.classList.add('error');
    isValid = false;
  }

  // Validate National ID (must be exactly 13 characters alphanumeric)
  if (!/^[A-Z0-9]{13}$/.test(nationalId.value)) {
    nationalIdError.textContent = 'National ID must be exactly 13 alphanumeric characters.';
    nationalId.classList.add('error');
    isValid = false;
  }

  // Validate Location (alpha-numeric, minimum 2 characters)
  if (!/^[a-zA-Z0-9 ]{2,}$/.test(location.value)) {
    locationError.textContent = 'Location must be alphanumeric and at least 2 characters long.';
    location.classList.add('error');
    isValid = false;
  }

  // Validate Contact (valid phone format +256XXXXXXXXX or 07XXXXXXXX)
  if (!/^(\+256|07)\d{8}$/.test(contact.value)) {
    contactError.textContent = 'Enter a valid contact number in the format +256XXXXXXXXX or 07XXXXXXXX.';
    contact.classList.add('error');
    isValid = false;
  }

  // Validate Amount Due (must not be empty and at least 5 digits long)
  if (amountDue.value.length < 5) {
    amountDueError.textContent = 'Amount Due must be at least 5 digits long.';
    amountDue.classList.add('error');
    isValid = false;
  }

  // Validate Sales Agent Name (alpha-numeric, minimum 2 characters)
  if (!/^[a-zA-Z0-9 ]{2,}$/.test(salesAgent.value)) {
    salesAgentError.textContent = 'Sales agent\'s name must be alphanumeric and at least 2 characters long.';
    salesAgent.classList.add('error');
    isValid = false;
  }

  // Validate Due Date (must not be empty)
  if (dueDate.value === '') {
    dueDateError.textContent = 'Please select a valid due date.';
    dueDate.classList.add('error');
    isValid = false;
  }

  // Validate Produce Name (must be selected)
  if (produce.value === '') {
    produceError.textContent = 'Please select a produce.';
    produce.classList.add('error');
    isValid = false;
  }

  // Validate Product Type (must not be empty)
  if (productType.value.trim() === '') {
    productTypeError.textContent = 'Please provide the product type.';
    productType.classList.add('error');
    isValid = false;
  }

  // Validate Tonnage (must be a positive number and not empty)
  if (tonnage.value === '' || tonnage.value <= 0) {
    tonnageError.textContent = 'Please enter a valid tonnage (kg).';
    tonnage.classList.add('error');
    isValid = false;
  }

  // Validate Dispatch Date (must not be empty)
  if (dispatchDate.value === '') {
    dispatchDateError.textContent = 'Please select a valid dispatch date.';
    dispatchDate.classList.add('error');
    isValid = false;
  }

  // If all validations pass, submit the form
  if (isValid) {
    form.submit();
  }
});

// Function to clear error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => {
    error.textContent = '';
  });

  const formElements = document.querySelectorAll('input, select');
  formElements.forEach(element => {
    element.classList.remove('error');
  });
}
