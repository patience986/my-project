document.getElementById("myForm").addEventListener("submit", function (event) {
    // Get form inputs
    const producename = document.getElementById("producename").value;
    const tonnage = document.getElementById("tonnage").value;
    const amountpaid = document.getElementById("amountPaid").value;
    const buyername = document.getElementById("buyerName").value;
    const salesagent = document.getElementById("salesAgent").value;
    const branch = document.getElementById("branch").value;
    const datetime = document.getElementById("dateTime").value;

    // Get error spans
    const productnameError = document.getElementById("productnameError");
    const tonnageError = document.getElementById("tonnageError");
    const amountPaidError = document.getElementById("amountPaidError");
    const buyerNameError = document.getElementById("buyerNameError");
    const salesAgentError = document.getElementById("salesAgentError");
    const dateTimeError = document.getElementById("dateTimeError");

    let isValid = true;

    // Clear all previous error messages
    productnameError.innerHTML = "";
    tonnageError.innerHTML = "";
    amountPaidError.innerHTML = "";
    buyerNameError.innerHTML = "";
    salesAgentError.innerHTML = "";
    dateTimeError.innerHTML = "";

    // Validate produce name (must be selected)
    if (producename === "") {
        productnameError.innerHTML = "Please select a produce.";
        isValid = false;
    }

    // Validate tonnage (must be a positive number)
    if (tonnage <= 0) {
        tonnageError.innerHTML = "Tonnage must be a positive number.";
        isValid = false;
    }

    // Validate amount paid (at least 5 characters)
    if (amountpaid.length < 5) {
        amountPaidError.innerHTML = "Amount paid must be at least 5 characters.";
        isValid = false;
    }

    // Validate buyer's name (alphanumeric, at least 2 characters)
    if (!/^[a-z0-9]+$/i.test(buyername) || buyername.length < 2) {
        buyerNameError.innerHTML = "Buyer's name must be alphanumeric and at least 2 characters long.";
        isValid = false;
    }

    // Validate sales agent's name (alphanumeric, at least 2 characters)
    if (!/^[a-z0-9]+$/i.test(salesagent) || salesagent.length < 2) {
        salesAgentError.innerHTML = "Sales agent's name must be alphanumeric and at least 2 characters long.";
        isValid = false;
    }

    // Validate date and time (must not be empty)
    if (datetime === "") {
        dateTimeError.innerHTML = "Please select a valid date and time.";
        isValid = false;
    }

    // If the form is invalid, prevent submission
    if (!isValid) {
        event.preventDefault();
    }
});
