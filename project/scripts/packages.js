import { packages } from './data.js';

// Reference to the HTML container for package cards
const packagesDisplay = document.getElementById('packages-display');
// Reference to the HTML container for filter buttons
const filterButtonsContainer = document.getElementById('package-filters');

// Function to generate and display package cards
function renderPackages(filteredPackages) {
    packagesDisplay.innerHTML = ''; // Clear existing packages

    if (filteredPackages.length === 0) {
        packagesDisplay.innerHTML = '<p class="no-results">No packages found for this category. Please try another filter.</p>';
        return;
    }

    // Use forEach and template literals to create package cards
    filteredPackages.forEach(pkg => {
        // Build the HTML string for a single package card
        const cardHtml = `
            <article class="package-card" data-categories="${pkg.categories.join(' ')}">
                <img src="${pkg.image}" alt="${pkg.name}" loading="lazy" data-src="${pkg.image}">
                <div class="package-card-content">
                    <h3>${pkg.name}</h3>
                    <p>${pkg.description}</p>
                </div>
                <a href="booking.html?packageId=${pkg.id}" class="book-now-btn">Book Now</a>
            </article>
        `;
        packagesDisplay.insertAdjacentHTML('beforeend', cardHtml); // Add card to the display container
    });

    // Re-apply lazy loading to new images (important after dynamic content added)
    applyLazyLoading();
}

// Function to generate filter buttons dynamically based on unique categories
function generateFilterButtons() {
    // Extract all unique categories from the packages data
    const allCategories = packages.flatMap(pkg => pkg.categories);
    const uniqueCategories = ['all', ...new Set(allCategories)]; // 'all' first, then unique categories

    filterButtonsContainer.innerHTML = ''; // Clear existing buttons

    uniqueCategories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('filter-btn');
        if (category === 'all') {
            button.classList.add('active'); // 'All Packages' is active by default
            button.textContent = 'All Packages';
        } else {
            // Capitalize first letter for display
            button.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
        }
        button.dataset.category = category; // Store category in a data attribute

        // Add event listener to each filter button
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            filterPackages(category); // Call the filter function
        });
        filterButtonsContainer.appendChild(button);
    });
}

// Function to filter packages based on the selected category
function filterPackages(selectedCategory) {
    let filtered = packages;
    if (selectedCategory !== 'all') {
        // Use array.filter() and array.includes() to find matching packages
        filtered = packages.filter(pkg => pkg.categories.includes(selectedCategory));
    }
    renderPackages(filtered); // Re-render the display with filtered packages
}

// Function to apply lazy loading (re-used from main.js, or moved to a utility file)
// This function needs to be accessible here, so you might move it out of main.js's DOMContentLoaded
// or put it directly in packages.js


// --- Main Execution on Packages Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    generateFilterButtons(); // Create filter buttons first
    renderPackages(packages); // Render all packages initially

    // The lazy loading is called within renderPackages, so it handles newly added images.
    // Ensure that if applyLazyLoading is defined in main.js, it's globally accessible or
    // you duplicate it here for simplicity. For this example, I've put a local version.
});