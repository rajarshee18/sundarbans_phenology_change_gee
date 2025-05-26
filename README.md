# Sundarbans Phenology Change Detection (2016–2024)

This project uses Google Earth Engine (GEE) to analyze phenological changes in the Sundarbans region over a decade, focusing on:

- NDVI-based green cover analysis
- Sea level rise trends (qualitative or auxiliary data reference)
- Exported GeoTIFF NDVI files (2016 & 2024)
- Green cover area changes in CSV format

## Data

- `ndvi_2016.tif`: NDVI image from 2016
- `ndvi_2024.tif`: NDVI image from 2024
- `green_cover_stats.csv`: Year-wise green cover area (sq. km)

## Scripts

- `ndvi_change_detection.js`: JavaScript code for GEE

## How to Use

1. Upload the `.js` script to the [GEE Code Editor](https://code.earthengine.google.com/)
2. Export the NDVI composites
3. Run the zonal statistics to analyze vegetation loss
