const loadAddBookForm = () => {
    const defaultContent = document.querySelector('#main-content h1, #main-content p');
    if (defaultContent) {
        defaultContent.style.display = 'none';
    }

    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = '';

    const formHTML = `
        <div class="add-book-form">
            <h2>Add Book</h2>
            <form id="add-book-form">
                <div class="form-group">
                    <label for="book-name">Book Name</label>
                    <input type="text" id="book-name" name="book-name" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="author">Author</label>
                    <input type="text" id="author" name="author" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="publication">Publication</label>
                    <input type="text" id="publication" name="publication" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="genre">Genre</label>
                    <select id="genre" name="genre" required>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                        <option value="biography">Biography</option>
                        <option value="other">Other</option>
                    </select>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" id="price" name="price" step="0.01" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" id="quantity" name="quantity" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="book-photo">Book Photo</label>
                    <input type="file" id="book-photo" name="book-photo" accept="image/*">
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <button type="submit">Add Book</button>
                </div>
            </form>
        </div>
    `;

    dynamicContent.innerHTML = formHTML;

    const addBookForm = document.getElementById('add-book-form');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Book added successfully!');
            this.reset();
        });
    }
};

const showContent = (option) => {
    const mainContent = document.getElementById('main-content');
    const defaultContent = mainContent.querySelector('h1, p');
    const dynamicContent = document.getElementById('dynamic-content');

    if (defaultContent) {
        defaultContent.style.display = 'none';
    }

    dynamicContent.innerHTML = '';

    dynamicContent.innerHTML = `<h1>${option.replace('-', ' ')}</h1><p>This is the ${option.replace('-', ' ')} section.</p>`;
};

const logout = () => {
    alert("You have been logged out.");
    window.location.href = "index.html"; 
};