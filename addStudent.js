document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-student-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const phone = document.getElementById("phone");
        const dob = document.getElementById("dob");

        // Function to show error message
        function showError(input, message) {
            const errorDiv = input.nextElementSibling;
            errorDiv.textContent = message;
            errorDiv.style.display = "block";
            isValid = false;
        }

        // Function to clear error message
        function clearError(input) {
            const errorDiv = input.nextElementSibling;
            errorDiv.textContent = "";
            errorDiv.style.display = "none";
        }

        // Name Validation
        if (name.value.trim() === "") {
            showError(name, "Name is required.");
        } else {
            clearError(name);
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            showError(email, "Enter a valid email.");
        } else {
            clearError(email);
        }

        // Password Validation (Minimum 6 characters)
        if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters.");
        } else {
            clearError(password);
        }

        // Phone Number Validation (10-digit number)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value)) {
            showError(phone, "Enter a valid 10-digit phone number.");
        } else {
            clearError(phone);
        }

        // Date of Birth Validation (Should not be in the future)
        if (new Date(dob.value) > new Date()) {
            showError(dob, "Date of birth cannot be in the future.");
        } else {
            clearError(dob);
        }

        if (isValid) {
            alert("Student added successfully!");
            form.submit();
        }
    });
});
