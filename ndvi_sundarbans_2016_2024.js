
// Sundarbans geometry (or draw on map)
var sundarbans = ee.Geometry.Rectangle([88.1, 21.5, 89.2, 22.3]);

// Simple mask for testing
function simpleMask(image) {
  return image.updateMask(image.select('B8').gt(0)).divide(10000);
}

// NDVI function
function computeNDVI(image) {
  return image.normalizedDifference(['B8', 'B4']).rename('NDVI');
}

// 2016 NDVI
var ndvi2016 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(sundarbans)
  .filterDate('2016-01-01', '2016-03-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .map(simpleMask)
  .map(computeNDVI)
  .median()
  .clip(sundarbans);

print('NDVI 2016 image:', ndvi2016);  // Debug

// 2024 NDVI
var ndvi2024 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(sundarbans)
  .filterDate('2024-01-01', '2024-03-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .map(simpleMask)
  .map(computeNDVI)
  .median()
  .clip(sundarbans);

print('NDVI 2024 image:', ndvi2024);  // Debug

// NDVI Change
var ndviChange = ndvi2024.subtract(ndvi2016).rename('NDVI_Change');

// Visualization
var vis = {min: 0, max: 1, palette: ['red', 'yellow', 'green']};
var visDiff = {min: -0.3, max: 0.3, palette: ['red', 'white', 'green']};

// Display
Map.centerObject(sundarbans, 9);
Map.addLayer(ndvi2016, vis, 'NDVI 2016');
Map.addLayer(ndvi2024, vis, 'NDVI 2024');
Map.addLayer(ndviChange, visDiff, 'NDVI Change');
