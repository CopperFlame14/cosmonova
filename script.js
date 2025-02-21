document.addEventListener('DOMContentLoaded', () => {
            // Load saved profile data
            const savedUsername = localStorage.getItem('username');
            const savedBio = localStorage.getItem('bio');
            const savedProfilePicture = localStorage.getItem('profilePicture');

            if (savedUsername) {
                document.getElementById('username').value = savedUsername;
            }

            if (savedBio) {
                document.getElementById('bio').value = savedBio;
            }

            if (savedProfilePicture) {
                // Display the saved profile picture (if any)
                document.getElementById('profile-picture').src = savedProfilePicture;
            }
        });

        // Handle form submission
        document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form values
            const username = document.getElementById('username').value;
            const bio = document.getElementById('bio').value;
            const profilePicture = document.getElementById('profile-picture').files[0];

            // Save username and bio to localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('bio', bio);

            // Save profile picture to localStorage (if a new one is uploaded)
            if (profilePicture) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    localStorage.setItem('profilePicture', e.target.result);
                };
                reader.readAsDataURL(profilePicture);
            }

            // Redirect back to the profile page
            window.location.href = 'main.html';
        });

        const overlay = document.querySelector('.overlay');
const darkerOverlay = document.querySelector('.darker-overlay');
const formContainer = document.getElementById('formContainer');
const aboutUsPage = document.getElementById('aboutUsPage');
const contactUsPage = document.getElementById('contactUsPage');

document.getElementById('loginBtn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    formContainer.classList.remove('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    aboutUsPage.classList.add('hidden'); // Hide About Us page
    contactUsPage.classList.add('hidden'); // Hide Contact Us page
    overlay.classList.remove('hidden'); // Show white overlay
    darkerOverlay.classList.remove('hidden'); // Show darker overlay
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    formContainer.classList.remove('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
    aboutUsPage.classList.add('hidden'); // Hide About Us page
    contactUsPage.classList.add('hidden'); // Hide Contact Us page
    overlay.classList.remove('hidden'); // Show white overlay
    darkerOverlay.classList.remove('hidden'); // Show darker overlay
});

document.getElementById('backBtn').addEventListener('click', function() {
    formContainer.classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    overlay.classList.add('hidden'); // Hide white overlay
    darkerOverlay.classList.add('hidden'); // Hide darker overlay
});

document.getElementById('backBtnSignup').addEventListener('click', function() {
    formContainer.classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    overlay.classList.add('hidden'); // Hide white overlay
    darkerOverlay.classList.add('hidden'); // Hide darker overlay
});

// Handle About Us Button
document.getElementById('aboutUsBtn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    formContainer.classList.add('hidden'); // Hide login/signup forms
    aboutUsPage.classList.remove('hidden');
    contactUsPage.classList.add('hidden'); // Hide Contact Us page
    overlay.classList.remove('hidden'); // Show overlay
});

// Handle Contact Us Button
document.getElementById('contactUsBtn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('hidden');
    formContainer.classList.add('hidden'); // Hide login/signup forms
    aboutUsPage.classList.add('hidden'); // Hide About Us page
    contactUsPage.classList.remove('hidden');
    overlay.classList.remove('hidden'); // Show overlay
});

// Handle Back to Main Page from About Us
document.getElementById('backToMainFromAbout').addEventListener('click', function() {
    aboutUsPage.classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    overlay.classList.add('hidden'); // Hide overlay
});

// Handle Back to Main Page from Contact Us
document.getElementById('backToMainFromContact').addEventListener('click', function() {
    contactUsPage.classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    overlay.classList.add('hidden'); // Hide overlay
});

// Handle form submission (for demonstration purposes)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to main page
    window.location.href = 'main.html'; // Change to your main page URL
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to main page
    window.location.href = 'main.html'; // Change to your main page URL
});
    
