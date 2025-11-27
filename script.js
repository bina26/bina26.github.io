// 1. Select the button and the HTML element
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const icon = toggleButton.querySelector('i');

// 2. Check for saved user preference on load
const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'dark'){
    htmlElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// 3. Add Event Listener for the click
toggleButton.addEventListener('click', () => {
    //Get current theme
    let theme = htmlElement.getAttribute('data-theme');

    if(theme === 'dark'){
        //Switch to light
        htmlElement.setAttribute('data-theme', 'Light');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }else{
        //Switch to Dark
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
})

//Get the button
const mybutton = document.getElementById('scrollTopBtn');

//When the user scrolls down 300px from teh top of the document, show the button
window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    //specific syntax to support safari (body) and Chrome/Firefox (documentElement)
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', () => {
    window.scrollTo({
        top:0,
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

// CONTACT FORM HANDLER
const contactForm = document.getElementById('contactForm');

if(contactForm){
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); //STOP the page from reloading

        // 1. Get the User's Name
        const nameField = document.getElementById('name');
        const name = nameField.value;

        // 2. Show a friendly success message
        alert(`Thanks, ${name}! Your message has been received. (This is a demo form).`);

        // 3. Clear the form fields
        contactForm.reset();
    });
}