document.getElementById("salesForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll(".error").forEach(el => el.textContent = '');
    
    let valid = true;
    
    // Product Name (non-empty)
    const productName = document.getElementById("productName").value.trim();
    if (productName === "" || productName.length < 2) {
        document.getElementById("productNameError").textContent = "Please enter a valid product name (at least 2 characters).";
        valid = false;
    }
    
    // Tonnage (numeric, non-negative)
    const tonnage = document.getElementById("tonnage").value.trim();
    if (!/^\d+$/.test(tonnage) || parseInt(tonnage, 10) <= 0) {
        document.getElementById("tonnageError").textContent = "Please enter a valid tonnage (positive number).";
        valid = false;
    }
    
    // Amount Paid (numeric, at least 5 characters)
    const amountPaid = document.getElementById("amountPaid").value.trim();
    if (amountPaid === "" || !/^\d{5,}$/.test(amountPaid)) {
        document.getElementById("amountPaidError").textContent = "Please enter a valid amount paid (at least 5 digits).";
        valid = false;
    }
    
    // Buyer's Name (alphanumeric, at least 2 characters)
    const buyerName = document.getElementById("buyerName").value.trim();
    if (!/^[a-zA-Z0-9 ]{2,}$/.test(buyerName)) {
        document.getElementById("buyerNameError").textContent = "Please enter a valid buyer's name (alphanumeric, at least 2 characters).";
        valid = false;
    }
    
    // Sales Agent (alphanumeric, at least 2 characters)
    const salesAgent = document.getElementById("salesAgent").value.trim();
    if (!/^[a-zA-Z0-9 ]{2,}$/.test(salesAgent)) {
        document.getElementById("salesAgentError").textContent = "Please enter a valid sales agent name (alphanumeric, at least 2 characters).";
        valid = false;
    }
    
    // Date and Time (required)
    const dateTime = document.getElementById("dateTime").value.trim();
    if (dateTime === "") {
        document.getElementById("dateTimeError").textContent = "Please select a valid date and time.";
        valid = false;
    }
    
    // Price to be Sold (numeric, positive)
    const price = document.getElementById("price").value.trim();
    if (!/^\d+$/.test(price) || parseInt(price, 10) <= 0) {
        document.getElementById("priceError").textContent = "Please enter a valid price (positive number).";
        valid = false;
    }
    
    // If all validations pass, you can proceed with form submission
    if (valid) {
        // Uncomment the line below to actually submit the form
        this.submit();
        alert("Form submitted successfully!");
    }
});