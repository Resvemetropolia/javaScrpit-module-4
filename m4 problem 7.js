<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Route Planner</title>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>

<!-- Form to input the address -->
<form id="addressForm">
    <label for="address">Enter Address:</label>
    <input id="address" type="text" required>
    <input type="submit" value="Plan Route">
</form>

<!-- Map container -->
<div id="map" style="height: 400px;"></div>

<!-- Display route details -->
<div id="routeDetails"></div>

<script>
    var map = L.map('map').setView([60.1695, 24.9354], 13); // Default center is Helsinki
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    document.getElementById('addressForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var address = document.getElementById('address').value;
        var coordinates = [60.1695, 24.9354]; // Default coordinates for Helsinki
        var routeDetails = {
            startAddress: address,
            endAddress: 'Karaportti 2, Helsinki', // School address
            startTime: '08:00', // Example start time
            endTime: '09:30' // Example end time
        };
        displayRouteOnMap(coordinates, routeDetails);
        displayRouteDetails(routeDetails);
    });
    function displayRouteOnMap(coordinates, routeDetails) {
        // Clear previous layers
        map.eachLayer(function (layer) {
            if (layer instanceof L.Polyline) {
                map.removeLayer(layer);
            }
        });
        var polyline = L.polyline(coordinates, { color: 'blue' }).addTo(map);
        map.fitBounds(polyline.getBounds());
    }
    function displayRouteDetails(routeDetails) {
        var detailsElement = document.getElementById('routeDetails');
        detailsElement.innerHTML = `
            <h3>Route Details</h3>
            <p><strong>Start Address:</strong> ${routeDetails.startAddress}</p>
            <p><strong>End Address:</strong> ${routeDetails.endAddress}</p>
            <p><strong>Start Time:</strong> ${routeDetails.startTime}</p>
            <p><strong>End Time:</strong> ${routeDetails.endTime}</p>
        `;
    }
</script>

</body>
</html>
