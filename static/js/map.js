// Log the injected data from Flask to check the structure
console.log('Geo Data:', window.geolocationData);

// You can access the fields like this:
const geoData = window.geolocationData;
const lat = geoData.lat;
const lon = geoData.lon;
const ip = geoData.query;  // <-- This is likely the correct key for IP
const city = geoData.city;
const country = geoData.country;

// Set up the map
const map = L.map('map').setView([lat, lon], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const marker = L.marker([lat, lon]).addTo(map);

// Set popup content using correct keys
marker.bindPopup(`<b>IP:</b> ${ip}<br><b>City:</b> ${city}<br><b>Country:</b> ${country}`).openPopup();
