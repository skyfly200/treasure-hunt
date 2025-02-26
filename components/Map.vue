<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';

const mapContainer = ref(null);

onMounted(() => {
  if (process.client) {
    // Initialize the map
    const map = L.map(mapContainer.value).setView([37.7749, -122.4194], 10); // Centered at San Francisco

    // Add OpenStreetMap Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Custom Marker Data
    const locations = [
      { lat: 37.7749, lng: -122.4194, title: 'San Francisco' },
      { lat: 34.0522, lng: -118.2437, title: 'Los Angeles' },
      { lat: 40.7128, lng: -74.006, title: 'New York City' },
    ];

    // Add Markers
    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng]).addTo(map);
      marker.bindPopup(`<b>${loc.title}</b>`).openPopup();
    });
  }
});
</script>

<template>
  <div ref="mapContainer" class="map"></div>
</template>

<style scoped>
    .map {
    width: 100vw;
    height: 100vh;
    }
</style>
