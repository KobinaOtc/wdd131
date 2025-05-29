// Function to calculate wind chill factor
// Formula: 35.74 + 0.6215T - 35.75S^0.16 + 0.4275TS^0.16
// T = Air Temperature (in Fahrenheit)
// S = Wind Speed (in mph)
function calculateWindChill(temperatureFahrenheit, windSpeedMph) {
    // Check if conditions for wind chill calculation are met:
    // Temperature <= 50°F AND Wind Speed > 3.0 mph
    if (temperatureFahrenheit <= 90 && windSpeedMph > 3.0) {
        // Calculate wind chill using the formula
        return (35.74 + (0.6215 * temperatureFahrenheit) - (35.75 * Math.pow(windSpeedMph, 0.16)) + (0.4275 * temperatureFahrenheit * Math.pow(windSpeedMph, 0.16))).toFixed(2);
    } else {
        // If conditions are not met, return "N/A"
        return "N/A";
    }
}

// Function to update footer content
function updateFooter() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get the last modified date of the document
    const lastModified = document.lastModified;
    document.getElementById('lastmodified').textContent = lastModified;
}

// Function to display weather information, including wind chill
function displayWeather() {
    // Define static values for temperature and wind speed
    // These values should match the static content in your HTML
    const temperatureCelsius = 28; // Example: 28 degrees Celsius
    const windSpeedKmH = 15;     // Example: 15 km/h

    // Convert to Fahrenheit and Mph for wind chill calculation
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
    const windSpeedMph = windSpeedKmH / 1.60934;

    // Update HTML with converted values (optional, but good for clarity)
    document.getElementById('temperature').textContent = temperatureCelsius;
    document.getElementById('temperature-f').textContent = temperatureFahrenheit.toFixed(1);
    document.getElementById('wind-speed').textContent = windSpeedKmH;
    document.getElementById('wind-speed-mph').textContent = windSpeedMph.toFixed(1);

    // Calculate wind chill
    const windChill = calculateWindChill(temperatureFahrenheit, windSpeedMph);

    // Display the wind chill factor
    document.getElementById('windchill').textContent = windChill;
}

// Event listener to run functions when the page loads
window.onload = function() {
    updateFooter(); // Update the footer
    displayWeather(); // Display weather and wind chill
};