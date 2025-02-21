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
