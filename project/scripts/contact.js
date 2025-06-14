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
        });
    }
});