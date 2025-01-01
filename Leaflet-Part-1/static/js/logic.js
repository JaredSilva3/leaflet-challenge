// Define the URL for earthquake data (All Earthquakes from the Past 7 Days)
const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a map object
const myMap = L.map("map", {
  center: [37.09, -95.71], // Centered on the US
  zoom: 5
});

// Add a base layer (Street Map)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(myMap);

// Function to determine marker size based on magnitude
function markerSize(magnitude) {
  return magnitude * 4; // Adjust multiplier for desired size
}

// Function to determine marker color based on depth
function markerColor(depth) {
  if (depth > 90) return "#FF5F65"; // Red
  if (depth > 70) return "#FCA35D"; // Orange
  if (depth > 50) return "#FDB72A"; // Yellow-Orange
  if (depth > 30) return "#F7DB11"; // Yellow
  if (depth > 10) return "#DCF400"; // Light Green
  return "#A3F600"; // Green
}

// Fetch the earthquake data
d3.json(earthquakeUrl).then(data => {
  // Add GeoJSON layer to the map
  L.geoJson(data, {
    // Use pointToLayer to create circle markers
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        fillColor: markerColor(feature.geometry.coordinates[2]), // Depth
        color: "#000", // Black border
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    // Add popups to markers
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`
        <h3>${feature.properties.place}</h3>
        <hr>
        <p><strong>Magnitude:</strong> ${feature.properties.mag}</p>
        <p><strong>Depth:</strong> ${feature.geometry.coordinates[2]} km</p>
        <p><strong>Time:</strong> ${new Date(feature.properties.time)}</p>
      `);
    }
  }).addTo(myMap);

  // Add legend
  const legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "info legend");
    const depths = [-10, 10, 30, 50, 70, 90];
    const colors = ["#A3F600", "#DCF400", "#F7DB11", "#FDB72A", "#FCA35D", "#FF5F65"];

    div.innerHTML = "<h4>Depth (km)</h4>";
    for (let i = 0; i < depths.length; i++) {
      div.innerHTML +=
        `<i style="background:${colors[i]}"></i> ${depths[i]}${depths[i + 1] ? `&ndash;${depths[i + 1]}<br>` : "+"}`;
    }
    return div;
  };
  legend.addTo(myMap);
});