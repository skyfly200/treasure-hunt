<script setup>
import { onMounted, ref } from "vue";

// Dynamically import Leaflet on client-side only
const L = process.client ? await import("leaflet") : null;

const mapContainer = ref(null);

onMounted(() => {
  if (!process.client || !mapContainer.value || !L) return;

  // Initialize the map
  const map = L.map(mapContainer.value).setView([37.7749, -122.4194], 5); // Centered at San Francisco

  // --- Define Base Layers ---
  const baseLayers = {
    "Watercolor": L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
        maxZoom: 16,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
        timeout: 5000, // Retry loading after 5 seconds
    }),

    "OpenStreetMap": L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      timeout: 5000, // Retry loading after 5 seconds
      maxZoom: 19,
    }),

    "Topographic": L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenTopoMap contributors",
      timeout: 5000, // Retry loading after 5 seconds
      maxZoom: 17,
    }),

    "Satellite (Esri)": L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      attribution: "&copy; Esri contributors",
      timeout: 5000, // Retry loading after 5 seconds
      maxZoom: 19,
    }),
  };

  // --- Add Default Layer ---
  baseLayers["Watercolor"].addTo(map);

  // --- Add Layer Control ---
  L.control.layers(baseLayers).addTo(map);

  // Custom Marker Data
  const locations = [
    { lat: 40.7128, lng: -74.006, title: "New York City" },
    { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
    { lat: 34.0522, lng: -118.2437, title: "Los Angeles" },
  ];

  // Add Markers
  locations.forEach((loc) => {
    // TODO - add custom marker icons
    // const customIcon = L.icon({
    //     iconUrl: '/custom-marker.png',
    //     iconSize: [30, 30], // Size of the icon
    // });
    // const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);

    const marker = L.marker([loc.lat, loc.lng]).addTo(map);
    // TODO - add custom popup content and open on click handler
    // marker.bindPopup(`<b>${loc.title}</b><br><img src="/custom-image.png" alt="Custom Image" />`).openPopup();
    marker.bindPopup(`<b>${loc.title}</b>`)//.openPopup();
  });
});
</script>

<template>
  <div ref="mapContainer" class="map"></div>
</template>

<style scoped lang="sass">
.map
  width: 100vw
  height: 100vh
</style>
