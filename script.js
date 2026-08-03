// 1. Select the button and the HTML element
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const icon = toggleButton.querySelector('i');

// 2. Check for saved user preference on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// 3. Add Event Listener for the click
toggleButton.addEventListener('click', () => {
    //Get current theme
    let theme = htmlElement.getAttribute('data-theme');

    if (theme === 'dark') {
        //Switch to light
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        //Switch to Dark
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
})

//Get the button
const mybutton = document.getElementById('scrollTopBtn');

//When the user scrolls down 300px from teh top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    //specific syntax to support safari (body) and Chrome/Firefox (documentElement)
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //This makes the scroll silky smooth!
    });
});

// TYPING ANIMATION
var typed = new Typed(".auto-type", {
    strings: ["CS Student", "Python Developer", "Java Learner", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// --- CONTACT FORM HANDLER (FORMSPREE) ---
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Stop the page from reloading

        // 1. Show loading state
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;
        if (formStatus) {
            formStatus.className = "form-status-msg pending";
            formStatus.innerText = "Sending your message...";
            formStatus.style.display = "block";
        }

        // 2. Prepare the data
        const formData = new FormData(contactForm);

        try {
            // 3. Send to Formspree (using the action link from HTML)
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // This tells Formspree "Don't redirect me!"
                }
            });

            // 4. Handle Response
            if (response.ok) {
                // Success!
                const name = document.getElementById('name').value;
                if (formStatus) {
                    formStatus.className = "form-status-msg success";
                    formStatus.innerText = `Thanks, ${name}! Your message has been sent successfully.`;
                }
                contactForm.reset();
            } else {
                // Error from Formspree
                const data = await response.json();
                let errorMsg = "Oops! There was a problem sending your form.";
                if (Object.hasOwn(data, 'errors')) {
                    errorMsg = data["errors"].map(error => error["message"]).join(", ");
                }
                if (formStatus) {
                    formStatus.className = "form-status-msg error";
                    formStatus.innerText = errorMsg;
                }
            }
        } catch (error) {
            // Network Error
            if (formStatus) {
                formStatus.className = "form-status-msg error";
                formStatus.innerText = "Oops! Network error submitting your form.";
            }
        } finally {
            // 5. Reset button
            submitBtn.innerText = "Send Message";
            submitBtn.disabled = false;
        }
    });
}

// --- DYNAMIC COPYRIGHT YEAR ---
document.getElementById('copyright-year').textContent = new Date().getFullYear();