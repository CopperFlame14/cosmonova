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

        document.addEventListener('DOMContentLoaded', () => {
            const postButton = document.getElementById('post-button');
            const postContent = document.getElementById('post-content');
            const mediaUpload = document.getElementById('media-upload');
            const feed = document.getElementById('feed');

            // Handle post creation
            postButton.addEventListener('click', () => {
                const content = postContent.value.trim();
                const file = mediaUpload.files[0];

                if (content || file) {
                    addPost(content, file);
                    postContent.value = '';
                    mediaUpload.value = '';
                } else {
                    alert('Please add a caption or upload a picture/video.');
                }
            });

            // Add a new post
            function addPost(content, file) {
                const post = document.createElement('div');
                post.className = 'post';

                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        if (file.type.startsWith('image')) {
                            post.innerHTML = `
                                <img src="${e.target.result}" alt="Uploaded Image">
                                <p>${content}</p>
                                <small>Posted on ${new Date().toLocaleString()}</small>
                            `;
                        } else if (file.type.startsWith('video')) {
                            post.innerHTML = `
                                <video controls>
                                    <source src="${e.target.result}" type="${file.type}">
                                    Your browser does not support the video tag.
                                </video>
                                <p>${content}</p>
                                <small>Posted on ${new Date().toLocaleString()}</small>
                            `;
                        }
                        feed.prepend(post);
                    };
                    reader.readAsDataURL(file);
                } else {
                    post.innerHTML = `
                        <p>${content}</p>
                        <small>Posted on ${new Date().toLocaleString()}</small>
                    `;
                    feed.prepend(post);
                }
            }

            // Sample posts
            addPost("Just watched the SpaceX launch. Amazing!", null);
            addPost("Who's excited for the next Mars rover mission?", null);

            // Theme Toggle
            const themeToggle = document.getElementById('theme-toggle');
            const body = document.body;

            themeToggle.addEventListener('click', () => {
                const isDarkTheme = body.getAttribute('data-theme') === 'dark';
                body.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
                themeToggle.textContent = isDarkTheme ? '🌓':'🌞';
            });

            // Three-dot menu for profile editing
            const profileMenu = document.querySelector('.profile-menu');
            const editProfileButton = document.getElementById('edit-profile-button');

            profileMenu.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the click from closing the dropdown immediately
                profileMenu.classList.toggle('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                profileMenu.classList.remove('active');
            });

            // Like Button Functionality
            const likeButtons = document.querySelectorAll('.like-button');

            likeButtons.forEach((button) => {
                let isLiked = false; // Track whether the user has liked the post

                button.addEventListener('click', () => {
                    const likeCount = button.nextElementSibling; // The span containing the like count
                    let currentLikes = parseInt(likeCount.textContent); // Get the current like count

                    if (isLiked) {
                        // If already liked, decrease the like count
                        currentLikes--;
                        button.textContent = '👍 Like'; // Reset the button text
                    } else {
                        // If not liked, increase the like count
                        currentLikes++;
                        button.textContent = '👎 Unlike'; // Change the button text
                    }

                    likeCount.textContent = `${currentLikes} Likes`; // Update the like count display
                    isLiked = !isLiked; // Toggle the like state
                });
            });
        });

        // Show the selected page
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Load saved profile data
            const savedUsername = localStorage.getItem('username');
            const savedBio = localStorage.getItem('bio');
            const savedProfilePicture = localStorage.getItem('profilePicture');

            if (savedUsername) {
                document.getElementById('profile-bio').value = savedBio;
            }

            if (savedProfilePicture) {
                document.getElementById('profile-picture').src = savedProfilePicture;
                document.getElementById('profile-picture-header').src = savedProfilePicture;
            }

            if(savedUsername){
                document.getElementById('profile-username').value=savedUsername;
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const chatWindow = document.getElementById('chat-window');
            const chatInput = document.getElementById('chat-input');
            const sendButton = document.getElementById('send-button');

            // Function to add a message to the chat window
            function addMessage(sender, text) {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${sender}`;
                messageDiv.innerHTML = `<p>${text}</p>`;
                chatWindow.appendChild(messageDiv);
                chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the latest message
            }

            // Function to simulate AI response
            function getAIResponse(userMessage) {
                // Simple hardcoded responses for demonstration
                const responses = [
                    "That's fascinating! Tell me more.",
                    "I'm not sure I understand. Can you elaborate?",
                    "Interesting! What do you think about space exploration?",
                    "Wow, that's amazing! How did you learn about that?",
                    "I love talking about space! What's your favorite planet?",
                ];
                return responses[Math.floor(Math.random() * responses.length)];
            }

            // Handle sending a message
            sendButton.addEventListener('click', () => {
                const userMessage = chatInput.value.trim();
                if (userMessage) {
                    addMessage('user', userMessage);
                    chatInput.value = ''; // Clear the input field

                    // Simulate AI response after a short delay
                    setTimeout(() => {
                        const aiResponse = getAIResponse(userMessage);
                        addMessage('ai', aiResponse);
                    }, 1000);
                }
            });

            // Allow pressing Enter to send a message
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendButton.click(); // Trigger the send button click event
                }
            });

            // Add a welcome message from the AI
            addMessage('ai', "Hi! I'm your SpaceConnect AI. How can I assist you today?");
        });
        // Function to handle adding comments in the explore section
function setupCommentFunctionality() {
    const commentInputs = document.querySelectorAll('.comment-input');

    commentInputs.forEach((input) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const commentText = input.value.trim();
                if (commentText) {
                    const commentsList = input.closest('.comments-section').querySelector('.comments-list');
                    const newComment = document.createElement('li');
                    newComment.textContent = commentText;
                    commentsList.appendChild(newComment);
                    input.value = ''; // Clear the input field
                }
            }
        });
    });
}

// Call the function to set up comment functionality
setupCommentFunctionality();
