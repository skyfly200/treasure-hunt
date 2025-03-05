<script setup>
import { useFetch } from "#app";

const { data } = await useFetch("/api/markers");

console.log(data);

// calculate found_in from hidden_at and found_at
data = data.map((item) => {
  if (item.found_at) {
    item.found_in = item.found_at - item.hidden_at;
  } else {
    item.found_in = 0;
  }
  return item;
});

// sort by found_in
data.sort((a, b) => {
  if (a.found_in && b.found_in) {
    return a.found_in - b.found_in;
  } else if (a.found_in) {
    return -1;
  } else if (b.found_in) {
    return 1;
  } else {
    return 0;
  }
});

</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h5">Treasure Hunt Leaderboard</v-card-title>
      <v-card-text>
        <v-data-table
          :items="data"
          :headers="[
            { title: 'Rank', value: 'rank' },
            { title: 'Location', value: 'title' },
            { title: 'Description', value: 'description' },
            { title: 'Hidden (Time)', value: 'hidden_at' },
            { title: 'Found (Time)', value: 'found_at' },
            { title: 'Found In', value: 'found_in' },
            { title: 'Finder', value: 'finder.username' }
          ]"
          item-value="code"
        >
          <template v-slot:item.rank="{ index }">
            {{ index + 1 }}
          </template>

          <template v-slot:item.hidden_at="{ item }">
            {{ new Date(item.hidden_at * 1000).toLocaleString() }}
          </template>

          <template v-slot:item.found_at="{ item }">
            {{ item.found_at ? new Date(item.found_at * 1000).toLocaleString() : 'Not Found' }}
          </template>

          <template v-slot:item.found_in="{ item }">
            {{ item.found_in ? new Date(item.found_in * 1000).toLocaleString() : 'Not Found' }}
          </template>

          <template v-slot:item.finder.username="{ item }">
            {{ item.finder?.username || 'Unclaimed' }}
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card {
  max-width: 800px;
  margin: auto;
}
</style>
