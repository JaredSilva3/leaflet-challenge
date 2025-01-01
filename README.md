# Leaflet Earthquake Visualization Project

## Overview of the Analysis

The goal of this project was to create an interactive map using Leaflet that visualizes earthquake data provided by the United States Geological Survey (USGS). By plotting earthquake locations and using markers to represent magnitude and depth, this project aims to help better educate the public and support scientific analysis.

The dataset used for this project includes earthquake data from the past 7 days, retrieved in GeoJSON format from the USGS GeoJSON Feed.

---

## Steps Taken in the Project

### Data Information:
- **Source**: USGS GeoJSON Feed for "All Earthquakes from the Past 7 Days."
- **Key Data Points**:
  - **Latitude and Longitude**: Used for plotting earthquake locations.
  - **Magnitude**: Determines the size of the marker.
  - **Depth**: Determines the color of the marker.

---

### Process:

1. **Setting Up the Map**:
   - A map was created using the Leaflet library and centered on the United States.
   - The base map used OpenStreetMap tiles for visualization.

2. **Fetching Earthquake Data**:
   - The GeoJSON earthquake data was retrieved using D3.

3. **Adding Earthquake Markers**:
   - Circle markers were used to represent each earthquake.
   - The **size** of each marker was determined by the earthquake's magnitude.
   - The **color** of each marker was determined by the depth of the earthquake.

4. **Interactive Features**:
   - Popups were added to each marker to display detailed information:
     - Location
     - Magnitude
     - Depth
     - Time of the earthquake

5. **Adding a Legend**:
   - A legend was included to help users interpret the colors that represent different depth ranges.

---

## Results

### Key Features of the Visualization:
- **Interactive Map**: Users can click on markers to see more information about each earthquake.
- **Depth-Based Coloring**:
  - Depth ranges are color-coded:
    - Shallow earthquakes are green.
    - Deep earthquakes are red.
- **Magnitude-Based Sizing**:
  - Larger markers represent higher-magnitude earthquakes.
- **Legend**: Provides a guide for interpreting the depth colors.

---

## Summary

This project successfully visualized earthquake data in an engaging and informative way using Leaflet. The map highlights the relationship between earthquake magnitude, depth, and location. By including features like popups and a legend, the visualization offers an easy-to-use tool for public education and scientific analysis.

Future improvements could include overlaying additional datasets, such as tectonic plate boundaries, or allowing users to toggle between base maps and data layers for more customization.
