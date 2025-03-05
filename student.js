// student.js

const showContent = (sectionId) => {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    if (sectionId === 'request-book') {
        fetchBooks();
    }
};

const fetchBooks = () => {
    fetch('fetch_book.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data); // Debug: Check fetched data
            const tableBody = document.querySelector('#booksTable tbody');
            tableBody.innerHTML = '';
            data.forEach(book => {
                const row = `<tr>
                    <td>${book.book_name}</td>
                    <td>${book.author}</td>
                    <td>${book.publication}</td>
                    <td>${book.genre}</td>
                    <td>${book.quantity}</td>
                    <td><img src="uploads/${book.book_photo}" alt="${book.book_name}" style="max-width: 100px; height: auto;"></td>
                    <td><button onclick="requestBook(${book.id})">Request</button></td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching books:', error));
};

const requestBook = (bookId) => {
    fetch('request_book.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ book_id: bookId })
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error requesting book:', error));
};

const logout = () => {
    alert("You have been logged out.");
    window.location.href = "index.html"; 
};

window.onload = () => {
    showContent('welcome');
};
