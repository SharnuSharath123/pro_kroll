document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting the default way
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        // Optionally, you could clear the form here
        form.reset();
    });
});
