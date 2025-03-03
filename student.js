const showContent = (sectionId) => {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
};

const logout = () => {
    alert("You have been logged out.");
    window.location.href = "index.html"; 
};

window.onload = () => {
    showContent('welcome');
};