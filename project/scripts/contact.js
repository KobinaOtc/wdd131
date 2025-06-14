document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('contact-confirmation-message');

    if (contactForm && confirmationMessage) {
        // --- Handle form submission ---
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Basic client-side validation using HTML5 built-in checks
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity(); // Show browser's validation messages
                return;
            }

            // --- Data Collection (using FormData and template literals) ---
            const formData = new FormData(contactForm);
            const messageDetails = {};
            for (let [key, value] of formData.entries()) {
                messageDetails[key] = value;
            }

            // For the checkbox, FormData gets "on" if checked, or omits if not checked.
            // Explicitly set it to false if not present.
            if (!messageDetails.newsletterOptin) {
                messageDetails.newsletterOptin = false;
            } else {
                messageDetails.newsletterOptin = true; // Convert "on" to true
            }

            console.log("Contact Message Details:", messageDetails); // Log message details to console

            // --- Simulate Confirmation ---
            confirmationMessage.classList.remove('hidden'); // Show confirmation message
            contactForm.reset(); // Clear the form

            // Optionally scroll to confirmation message for better UX
            confirmationMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // In a real application, you would send this data to a server here (e.g., using fetch API)
            // fetch('/api/contact', {
            //     method: 'POST',
            //     body: JSON.stringify(messageDetails),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     confirmationMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
            //     confirmationMessage.classList.remove('hidden');
            //     contactForm.reset();
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     confirmationMessage.textContent = 'There was an error sending your message. Please try again.';
            //     confirmationMessage.style.backgroundColor = 'var(--red-color)'; // Example error styling
            //     confirmationMessage.classList.remove('hidden');
            // });
        });
    }
});