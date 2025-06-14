document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active'); // Toggles the 'active' class on the nav
            // Optional: Animate hamburger icon to X
            hamburgerBtn.classList.toggle('open');
        });

        // Close nav when a link is clicked (optional, but good for UX)
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                hamburgerBtn.classList.remove('open');
            });
        });
    }

    // --- Dynamic Footer Content ---
    // Get current year
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Get last modified date
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        // document.lastModified returns a string with date and time
        lastModifiedSpan.textContent = document.lastModified;
    }

    // --- Lazy Loading for Images ---
    // Select all images that have a 'data-src' attribute
    const lazyLoadImages = document.querySelectorAll('img[data-src]');

    // Options for the Intersection Observer
    const imgObserverOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the image is visible, load it
    };

    // Callback function for the Intersection Observer
    const imgObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Set the 'src' from 'data-src'
                img.removeAttribute('data-src'); // Remove 'data-src' to prevent re-loading
                img.classList.add('fade-in'); // Optional: Add a class for a fade-in animation
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    };

    // Create the Intersection Observer instance
    const imgObserver = new IntersectionObserver(imgObserverCallback, imgObserverOptions);

    // Observe each lazy load image
    lazyLoadImages.forEach(img => {
        imgObserver.observe(img);
    });

    // --- Placeholder for potential lazy loading (Example: to be implemented later) ---
    // const lazyLoadElements = document.querySelectorAll('[data-src]');
    // const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             const target = entry.target;
    //             // Example: Load content for a placeholder div
    //             if (target.dataset.src) {
    //                 fetch(target.dataset.src)
    //                     .then(response => response.text())
    //                     .then(html => {
    //                         target.innerHTML = html;
    //                         target.removeAttribute('data-src'); // Prevent re-loading
    //                     })
    //                     .catch(error => console.error('Error loading content:', error));
    //             }
    //             observer.unobserve(target);
    //         }
    //     });
    // });

    // lazyLoadElements.forEach(element => {
    //     lazyLoadObserver.observe(element);
    // });
});