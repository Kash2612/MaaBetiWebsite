var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


// // login
// let res = false;
// let c = 0;

// function isLoggedIn() {
//     res = true;
//     c = 1;
//     return c;
// }

// var wishlistContainer = document.getElementById('islog');

// window.onload = function () {
//     if (isLoggedIn() == 1) {
//         wishlistContainer.setAttribute("href", "wishlist.html");
//     }
//     else {
//         wishlistContainer.setAttribute("href", "login.html");
//     }
// }


// localStorage.setItem('isLoggedIn', 'true');

// // Set login status to false when user logs out
// localStorage.setItem('isLoggedIn', 'false')

// Example login logic


function login() {
    // After successful login
    localStorage.setItem('isLoggedIn', 'true');
    // window.location.href = 'Wishlist.html';

}


document.addEventListener('DOMContentLoaded', function () {
    // Check login status from localStorage or another method
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Get the profile section element
    const profileSection = document.getElementById('profile-section');

    // Function to render profile section
    function renderProfileSection() {
        if (isLoggedIn) {
            profileSection.innerHTML = `
                <a id="logout-link" href="#" style="text-decoration: none; color:white;">
                    <i class="fa-solid fa-user"></i>
                    <p>Logout</p>
                </a>`;
        } else {
            profileSection.innerHTML = `
                <a id="login-link" href="login.html" style="text-decoration: none; color:white;">
                    <i class="fa-solid fa-user"></i>
                    <p>Login</p>
                </a>`;
        }
    }

    // Function to handle logout
    function logout() {
        localStorage.setItem('isLoggedIn', 'false');
        isLoggedIn = false;
        renderProfileSection();
    }

    // Set the initial profile section state
    renderProfileSection();

    // Add event listener for logout link
    document.addEventListener('click', function (event) {
        if (event.target.id === 'logout-link' || event.target.parentElement.id === 'logout-link') {
            event.preventDefault();
            logout();
        }
    });

    // Add event listener to the wishlist link
    const wishlistLink = document.querySelector('.wishlisttt a');
    wishlistLink.addEventListener('click', function (event) {
        if (!isLoggedIn) {
            event.preventDefault();
            alert('Please log in to view your wishlist.');
            window.location.href = 'login.html';
        }
    });
});

