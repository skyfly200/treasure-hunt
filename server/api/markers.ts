export default defineEventHandler(async (event) => {
    return [
      { id: 1, lat: 37.7749, lng: -122.4194, title: "San Francisco", score: 120 },
      { id: 2, lat: 34.0522, lng: -118.2437, title: "Los Angeles", score: 95 },
      { id: 3, lat: 40.7128, lng: -74.006, title: "New York", score: 85 },
    ];
  });
  