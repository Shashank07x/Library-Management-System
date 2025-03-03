const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
        return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
        return "Password must contain at least one special character.";
    }
    return null; 
};
const validateStudentLogin = () => {
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    const errorElement = document.getElementById('student-error');

    if (!email || !password) {
        errorElement.textContent = "Please fill in all fields.";
        errorElement.style.display = 'block';
        return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
        errorElement.textContent = passwordError;
        errorElement.style.display = 'block';
        return;
    }

    if (email === "student@gmail.com" && password === "Student@123") {
        errorElement.style.display = 'none';
        window.location.href = "student.html";
    } else {
        errorElement.textContent = "Invalid email or password.";
        errorElement.style.display = 'block';
    }
};

const validateAdminLogin = () => {
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    const errorElement = document.getElementById('admin-error');

    if (!email || !password) {
        errorElement.textContent = "Please fill in all fields.";
        errorElement.style.display = 'block';
        return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
        errorElement.textContent = passwordError;
        errorElement.style.display = 'block';
        return;
    }

    if (email === "admin@example.com" && password === "Admin@123") {
        errorElement.style.display = 'none';
        window.location.href = "admin.html";
    } else {
        errorElement.textContent = "Invalid email or password.";
        errorElement.style.display = 'block';
    }
};