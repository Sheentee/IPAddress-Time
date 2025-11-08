// Function to fetch IP address
async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('ip-address').textContent = data.ip;
    } catch (error) {
        document.getElementById('ip-address').textContent = 'Error fetching IP';
    }
}

// Function to update datetime
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').textContent = now.toISOString();
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    getIPAddress();
    updateDateTime();
    // Update time every second
    setInterval(updateDateTime, 1000);
});