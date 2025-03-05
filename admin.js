// const loadAddStudentForm = () => {
//     const defaultContent = document.querySelector('#main-content h1, #main-content p');
//     if (defaultContent) {
//         defaultContent.style.display = 'none';
//     }

//     const dynamicContent = document.getElementById('dynamic-content');
//     dynamicContent.innerHTML = '';

//     const formHTML = `
//         <div class="add-student-form">
//             <h2>Add Student</h2>
//             <form id="add-student-form">
//                 <div class="form-group">
//                     <label for="name">Full Name</label>
//                     <input type="text" id="name" name="name" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="email">Email</label>
//                     <input type="email" id="email" name="email" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="password">Password</label>
//                     <input type="password" id="password" name="password" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="phone">Phone Number</label>
//                     <input type="tel" id="phone" name="phone" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="dob">Date of Birth</label>
//                     <input type="date" id="dob" name="dob" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <button type="submit">Add Student</button>
//                 </div>
//             </form>
//         </div>
//     `;

//     dynamicContent.innerHTML = formHTML;

//     const addStudentForm = document.getElementById('add-student-form');
//     if (addStudentForm) {
//         addStudentForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const formData = new FormData(this);

//             fetch('submit_student.php', {
//                 method: 'POST',
//                 body: formData
//             })
//             .then(response => response.text())
//             .then(message => {
//                 alert(message);
//                 if (message.includes('successfully')) {
//                     this.reset();
//                 }
//             })
//             .catch(error => console.error('Error:', error));
//         });
//     }
// };
// const loadAddBookForm = () => {
//     const defaultContent = document.querySelector('#main-content h1, #main-content p');
//     if (defaultContent) {
//         defaultContent.style.display = 'none';
//     }

//     const dynamicContent = document.getElementById('dynamic-content');
//     dynamicContent.innerHTML = '';

//     const formHTML = `
//         <div class="add-book-form">
//             <h2>Add Book</h2>
//             <form id="add-book-form" enctype="multipart/form-data">
//                 <div class="form-group">
//                     <label for="book-name">Book Name</label>
//                     <input type="text" id="book-name" name="book_name" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="author">Author</label>
//                     <input type="text" id="author" name="author" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="publication">Publication</label>
//                     <input type="text" id="publication" name="publication" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="genre">Genre</label>
//                     <select id="genre" name="genre" required>
//                         <option value="fiction">Fiction</option>
//                         <option value="non-fiction">Non-Fiction</option>
//                         <option value="science">Science</option>
//                         <option value="history">History</option>
//                         <option value="biography">Biography</option>
//                         <option value="other">Other</option>
//                     </select>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="price">Price</label>
//                     <input type="number" id="price" name="price" step="0.01" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="quantity">Quantity</label>
//                     <input type="number" id="quantity" name="quantity" required>
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <label for="book-photo">Book Photo</label>
//                     <input type="file" id="book-photo" name="book_photo" accept="image/*">
//                     <div class="error-message"></div>
//                 </div>
//                 <div class="form-group">
//                     <button type="submit">Add Book</button>
//                 </div>
//             </form>
//         </div>
//     `;

//     dynamicContent.innerHTML = formHTML;

//     const addBookForm = document.getElementById('add-book-form');
//     if (addBookForm) {
//         addBookForm.addEventListener('submit', function (event) {
//             event.preventDefault();

//             const formData = new FormData(this); // Create FormData object from the form

//             fetch('submit_book.php', {
//                 method: 'POST',
//                 body: formData // Send form data as multipart/form-data
//             })
//                 .then(response => response.text())
//                 .then(message => {
//                     alert(message); // Show success or error message
//                     if (message.includes('successfully')) {
//                         this.reset(); // Reset the form on success
//                     }
//                 })
//                 .catch(error => console.error('Error submitting form:', error));
//         });
//     }
// };

// const showContent = (option) => {
//     const mainContent = document.getElementById('main-content');
//     const defaultContent = mainContent.querySelector('h1, p');
//     const dynamicContent = document.getElementById('dynamic-content');

//     if (defaultContent) {
//         defaultContent.style.display = 'none';
//     }

//     dynamicContent.innerHTML = '';

//     if (option === 'book-report') {
//         // Load the book report table
//         dynamicContent.innerHTML = `
//             <h1>Book Report</h1>
//             <table id="book-report-table">
//                 <thead>
//                     <tr>
//                         <th>Book Name</th>
//                         <th>Author</th>
//                         <th>Publication</th>
//                         <th>Genre</th>
//                         <th>Quantity</th>
//                         <th>Book Photo</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <!-- Rows will be populated dynamically -->
//                 </tbody>
//             </table>
//         `;
//         fetchBooks(); // Fetch and populate book data
//     } else {
//         dynamicContent.innerHTML = `<h1>${option.replace('-', ' ')}</h1><p>This is the ${option.replace('-', ' ')} section.</p>`;
//     }
// };

// const fetchBooks = () => {
//     fetch('fetch_book.php')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Fetched data:', data); // Debug: Check fetched data
//             const tableBody = document.querySelector('#book-report-table tbody');
//             tableBody.innerHTML = '';
//             data.forEach(book => {
//                 const row = `
//                 <tr>
//                     <td>${book.book_name}</td>
//                     <td>${book.author}</td>
//                     <td>${book.publication}</td>
//                     <td>${book.genre}</td>
//                     <td>${book.quantity}</td>
//                     <td><img src="uploads/${book.book_photo}" alt="${book.book_name}" style="max-width: 100px; height: auto;"></td>
//                 </tr>
//             `;
//                 tableBody.innerHTML += row;
//             });
//         })
//         .catch(error => console.error('Error fetching books:', error));
// };

// const populateBookReportTable = (bookData) => {
//     const tbody = document.querySelector('#book-report-table tbody');
//     tbody.innerHTML = ''; // Clear existing rows

//     // Populate the table with book data
//     bookData.forEach(book => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${book.book_name}</td>
//             <td>${book.author}</td>
//             <td>${book.publication}</td>
//             <td>${book.genre}</td>
//             <td>${book.quantity}</td>
//             <td><img src="${book.book_photo}" alt="${book.book_name}" width="50"></td>
//         `;
//         tbody.appendChild(row);
//     });
// };

// const logout = () => {
//     alert("You have been logged out.");
//     window.location.href = "index.html"; 
// };

const loadAddStudentForm = () => {
    const defaultContent = document.querySelector('#main-content h1, #main-content p');
    if (defaultContent) {
        defaultContent.style.display = 'none';
    }

    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = '';

    const formHTML = `
        <div class="add-student-form">
            <h2>Add Student</h2>
            <form id="add-student-form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <label for="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" required>
                    <div class="error-message"></div>
                </div>
                <div class="form-group">
                    <button type="submit">Add Student</button>
                </div>
            </form>
        </div>
    `;

    dynamicContent.innerHTML = formHTML;

    const addStudentForm = document.getElementById('add-student-form');
    if (addStudentForm) {
        addStudentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            fetch('submit_student.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(message => {
                alert(message);
                if (message.includes('successfully')) {
                    this.reset();
                }
            })
            .catch(error => console.error('Error:', error));
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

    if (option === 'book-report') {
        dynamicContent.innerHTML = `
            <h1>Book Report</h1>
            <table id="book-report-table">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Publication</th>
                        <th>Genre</th>
                        <th>Quantity</th>
                        <th>Book Photo</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        fetchBooks();
    } 
    else if (option === 'student-report') {
        dynamicContent.innerHTML = `
            <h1>Student Report</h1>
            <table id="student-report-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
        fetchStudents(); // Fetch and populate student data
    } 
    else {
        dynamicContent.innerHTML = `<h1>${option.replace('-', ' ')}</h1><p>This is the ${option.replace('-', ' ')} section.</p>`;
    }
};

// Fetch Books Data
const fetchBooks = () => {
    fetch('fetch_book.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#book-report-table tbody');
            tableBody.innerHTML = '';
            data.forEach(book => {
                const row = `
                <tr>
                    <td>${book.book_name}</td>
                    <td>${book.author}</td>
                    <td>${book.publication}</td>
                    <td>${book.genre}</td>
                    <td>${book.quantity}</td>
                    <td><img src="uploads/${book.book_photo}" alt="${book.book_name}" style="max-width: 100px; height: auto;"></td>
                </tr>
            `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching books:', error));
};

// Fetch Students Data (NEW FUNCTION)
// Fetch Students Data (Updated)
const fetchStudents = () => {
    fetch('fetch_student.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#student-report-table tbody');
            tableBody.innerHTML = '';
            
            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.phone}</td>
                    <td>${student.dob}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching students:', error);
            // Optional: Show error message to user
        });
};

const logout = () => {
    alert("You have been logged out.");
    window.location.href = "index.html"; 
};