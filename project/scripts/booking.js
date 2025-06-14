import { packages } from './data.js'; // Import the packages array from data.js

document.addEventListener('DOMContentLoaded', () => {
    const packageSelect = document.getElementById('package-select');
    const bookingForm = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('booking-confirmation-message');

    const summaryPackageName = document.getElementById('summary-package-name');
    const summaryPackageDescription = document.getElementById('summary-package-description');
    const summaryPackagePrice = document.getElementById('summary-package-price');
    const bookingSummaryDisplay = document.getElementById('booking-summary-display');

    // --- Function to populate the package dropdown ---
    function populatePackageDropdown() {
        packageSelect.innerHTML = '<option value="" disabled selected>Select an Encounter</option>'; // Clear existing and add default

        packages.forEach(pkg => {
            const option = document.createElement('option');
            option.value = pkg.id;
            option.textContent = `${pkg.name} (${pkg.duration}, ${pkg.location})`;
            packageSelect.appendChild(option);
        });
    }

    // --- Function to update the booking summary ---
    function updateBookingSummary(selectedPackageId) {
        const selectedPackage = packages.find(pkg => pkg.id === selectedPackageId);

        if (selectedPackage) {
            summaryPackageName.textContent = selectedPackage.name;
            summaryPackageDescription.textContent = selectedPackage.description;
            summaryPackagePrice.textContent = `Price: ${selectedPackage.price}`;
            bookingSummaryDisplay.classList.remove('hidden'); // Show summary if a package is selected
        } else {
            summaryPackageName.textContent = "No package selected yet.";
            summaryPackageDescription.textContent = "";
            summaryPackagePrice.textContent = "";
            // bookingSummaryDisplay.classList.add('hidden'); // Or keep it visible with default message
        }
    }

    // --- Handle URL parameter for pre-selecting package ---
    function getPackageIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('packageId');
    }

    // --- Initialize the page ---
    populatePackageDropdown(); // Populate dropdown on load

    const preselectedPackageId = getPackageIdFromUrl();
    if (preselectedPackageId) {
        packageSelect.value = preselectedPackageId; // Set dropdown value
        updateBookingSummary(preselectedPackageId); // Update summary
    } else {
        // If no packageId in URL, hide summary initially
        bookingSummaryDisplay.classList.add('hidden');
    }

    // --- Event listener for package selection change ---
    packageSelect.addEventListener('change', (event) => {
        updateBookingSummary(event.target.value);
    });

    // --- Handle form submission ---
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission to process with JS

        // Basic client-side validation (HTML 'required' attribute handles some)
        if (!bookingForm.checkValidity()) {
            // Trigger browser's default validation UI
            bookingForm.reportValidity();
            return;
        }

        // --- Data Collection (using template literals for output) ---
        const formData = new FormData(bookingForm);
        const bookingDetails = {};
        for (let [key, value] of formData.entries()) {
            bookingDetails[key] = value;
        }

        // Add package details to bookingDetails
        const selectedPkgId = bookingDetails.packageId;
        const selectedPkg = packages.find(pkg => pkg.id === selectedPkgId);
        if (selectedPkg) {
            bookingDetails.packageName = selectedPkg.name;
            bookingDetails.packagePrice = selectedPkg.price;
            bookingDetails.packageLocation = selectedPkg.location;
            bookingDetails.packageDuration = selectedPkg.duration;
        }

        console.log("Booking Details Submitted:", bookingDetails); // Log to console for now

        // --- Simulate Confirmation ---
        confirmationMessage.classList.remove('hidden'); // Show confirmation message
        bookingForm.reset(); // Clear the form
        bookingSummaryDisplay.classList.add('hidden'); // Hide summary after booking
        packageSelect.value = ""; // Reset dropdown to default
        packageSelect.dispatchEvent(new Event('change')); // Trigger change to reset summary properly

        // You might store successful booking count in localStorage here if needed for analytics
        // Example:
        // let successfulBookings = localStorage.getItem('successfulBookings') || 0;
        // successfulBookings = parseInt(successfulBookings) + 1;
        // localStorage.setItem('successfulBookings', successfulBookings);

        // Optionally scroll to confirmation message
        confirmationMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});