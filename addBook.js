const showError = (input, message) => {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    input.style.borderColor = '#dc3545';
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
};

const clearError = (input) => {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    input.style.borderColor = '#ddd';
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
};

const validateForm = () => {
    let isValid = true;

    const bookName = document.getElementById('book-name');
    if (bookName.value.trim() === '') {
        showError(bookName, 'Book name is required.');
        isValid = false;
    } else {
        clearError(bookName);
    }

    const author = document.getElementById('author');
    if (author.value.trim() === '') {
        showError(author, 'Author name is required.');
        isValid = false;
    } else {
        clearError(author);
    }

    const price = document.getElementById('price');
    if (price.value.trim() === '' || isNaN(price.value) || parseFloat(price.value) <= 0) {
        showError(price, 'Please enter a valid price.');
        isValid = false;
    } else {
        clearError(price);
    }

    const quantity = document.getElementById('quantity');
    if (quantity.value.trim() === '' || isNaN(quantity.value) || parseInt(quantity.value) <= 0) {
        showError(quantity, 'Please enter a valid quantity.');
        isValid = false;
    } else {
        clearError(quantity);
    }

    return isValid;
};

document.getElementById('add-book-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Book added successfully!';
        this.appendChild(successMessage);

        setTimeout(() => {
            this.reset();
            successMessage.style.display = 'none';
        }, 2000);
    }
});

const inputs = document.querySelectorAll('.form-group input, .form-group select');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        clearError(input);
    });
});