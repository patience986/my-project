function validateForm() {
    let isValid = true;

    // Product Name Validation
    const productName = document.getElementById("product_name").value.trim();
    if (productName.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(productName)) {
        document.getElementById("productNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("productNameError").style.display = "none";
    }

    // Type Validation
    const type = document.getElementById("type").value.trim();
    if (type.length < 2 || !/^[a-zA-Z\s]+$/.test(type)) {
        document.getElementById("typeError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("typeError").style.display = "none";
    }

    // Date Validation
    const date = document.getElementById("date").value;
    if (date === "") {
        document.getElementById("dateError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("dateError").style.display = "none";
    }

    // Tonnage Validation
    const tonnage = document.getElementById("tonnage").value;
    if (tonnage < 100 || isNaN(tonnage)) {
        document.getElementById("tonnageError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("tonnageError").style.display = "none";
    }

    // Cost Validation
    const cost = document.getElementById("cost").value;
    if (cost < 10000 || isNaN(cost)) {
        document.getElementById("costError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("costError").style.display = "none";
    }

    // Dealer Validation
    const dealer = document.getElementById("dealer").value.trim();
    if (dealer.length < 2 || !/^[a-zA-Z0-9\s]+$/.test(dealer)) {
        document.getElementById("dealerError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("dealerError").style.display = "none";
    }

    // Contact Validation
    const contact = document.getElementById("contact").value;
    if (!/^[0-9]{10}$/.test(contact)) {
        document.getElementById("contactError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("contactError").style.display = "none";
    }

    // Price Validation
    const price = document.getElementById("price").value;
    if (price === "" || isNaN(price)) {
        document.getElementById("priceError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("priceError").style.display = "none";
    }

    return isValid;
}