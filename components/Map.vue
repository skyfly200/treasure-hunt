<script setup>
import { onMounted, ref } from "vue";

// Dynamically import Leaflet on client-side only
const L = process.client ? await import("leaflet") : null;

const mapContainer = ref(null);

onMounted(() => {
  if (!process.client || !mapContainer.value || !L) return;

  // Initialize the map
  const map = L.map(mapContainer.value).setView([37.7749, -122.4194], 10); // Centered at San Francisco

  // Add OpenStreetMap Tile Layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    tileSize: 256, // Ensures proper tile size
    maxZoom: 19,
    timeout: 5000, // Retry loading after 5 seconds
  }).addTo(map);

  // Custom Marker Data
  const locations = [
    { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
    { lat: 34.0522, lng: -118.2437, title: "Los Angeles" },
    { lat: 40.7128, lng: -74.006, title: "New York City" },
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
    // TODO - add custom popup content
    // marker.bindPopup(`<b>${loc.title}</b><br><img src="/custom-image.png" alt="Custom Image" />`).openPopup();
    marker.bindPopup(`<b>${loc.title}</b>`).openPopup();
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
