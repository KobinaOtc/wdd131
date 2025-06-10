// main.js

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Bangkok Thailand",
      location: "Bangkok, Thailand",
      dedicated: "2019, 26 January",
      area: 48525,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    },
    {
      templeName: "San Salvador El Salvador",
      location: "San Salvador, El Salvador",
      dedicated: "2011, 21 August",
      area: 27986,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/135-San-Salvador-El-Salvador-Temple.jpg"
    },
    {
      templeName: "Helsinki Finland",
      location: "Helsinki, Finland",
      dedicated: "2006, 22 October",
      area: 16350,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169-main.jpg"
    },
    {
      templeName: "Montreal Quebec",
      location: "Montreal, Quebec, Canada",
      dedicated: "2015, 22 November",
      area: 11550,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caracas, Venezuela",
      dedicated: "2000, 20 August",
      area: 15332,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
    },
  ];
  
  // Get the temple list container 
  const templeListElement = document.getElementById('temple-list');
  
  function displayTemples(templesToDisplay) { // Renamed function
    templeListElement.innerHTML = ''; // Clear previous temples

    templesToDisplay.forEach(temple => { // Iterate over temple objects
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card'); // Changed class name

        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        `;
        templeListElement.appendChild(templeCard);
    });
  }

// --- Filtering Logic ---

// Get references to filter buttons
const allButton = document.getElementById('all');
const oldButton = document.getElementById('old');
const newButton = document.getElementById('new');
const largeButton = document.getElementById('large');

// Add event listeners
allButton.addEventListener('click', () => {
    displayTemples(temples); // Display all temples
});

oldButton.addEventListener('click', () => {
    // Filter for temples dedicated before 2010
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0].trim()); // Extract year from "YYYY, Month, DD"
        return year < 2010;
    });
    displayTemples(oldTemples);
});

newButton.addEventListener('click', () => {
    // Filter for temples dedicated after 2010
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0].trim()); // Extract year
        return year > 2010;
    });
    displayTemples(newTemples);
});

largeButton.addEventListener('click', () => {
    // Filter for temples with area > 90,000 sq ft
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});
  
  // Initial display of all temples when the page loads
  document.addEventListener('DOMContentLoaded', () => {
      displayTemples(temples);
    });
  
  // We will add lazy loading specific logic and filtering next!