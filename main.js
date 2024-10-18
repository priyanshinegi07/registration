document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    // Validate name
    const name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Validate email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // If valid, you can proceed with form submission
    if (isValid) {
        alert("Form submitted successfully!");
        // You can uncomment the next line to actually submit the form
        // this.submit();
    }
});
