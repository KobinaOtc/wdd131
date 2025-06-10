// --- Array of product names (customize as needed) ---
const productNames = [
    "Product A - Model 123",
    "Product B - Xtreme Edition",
    "Product C - Eco Series",
    "Product D - Smart Home Hub",
    "Product E - Wireless Headphones",
    "Product F - Gaming Console",
    "Product G - Smartwatch",
    "Product H - Robot Vacuum"
];

// --- Function to dynamically populate the select element ---
function populateProductNames() {
    const selectElement = document.getElementById('product-name');

    // Clear any existing options to prevent duplicates on hot reload in dev servers
    selectElement.innerHTML = '';

    // Create and append the initial "Choose a Product..." option
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Choose a Product ...";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);

    // Iterate over the productNames array to create and append options
    productNames.forEach(product => {
        const option = document.createElement('option');
        option.value = product; // Value sent with the form
        option.textContent = product; // Text displayed in the dropdown
        selectElement.appendChild(option);
    });
}

// --- Main DOMContentLoaded Listener ---
document.addEventListener('DOMContentLoaded', () => {
    // Populate the product name dropdown
    populateProductNames();

    // Increment review count on form submission
    const reviewForm = document.querySelector('.product-review-form');
    reviewForm.addEventListener('submit', () => {
        let reviewCount = localStorage.getItem('numReviews');

        if (reviewCount === null) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount);
        }

        reviewCount++;
        localStorage.setItem('numReviews', reviewCount.toString());
    });

    // Update current year in footer
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Update last modified date in footer
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});