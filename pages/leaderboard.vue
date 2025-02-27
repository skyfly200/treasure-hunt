<script setup>
import { useFetch } from "#app";

const { data } = await useFetch("/api/markers");
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
            { title: 'Hidden (Time)', value: 'hidden' },
            { title: 'Found (Time)', value: 'found' },
            { title: 'Finder', value: 'finder.username' }
          ]"
          item-value="id"
        >
          <template v-slot:item.rank="{ index }">
            {{ index + 1 }}
          </template>

          <template v-slot:item.hidden="{ item }">
            {{ new Date(item.hidden * 1000).toLocaleString() }}
          </template>

          <template v-slot:item.found="{ item }">
            {{ item.found ? new Date(item.found * 1000).toLocaleString() : 'Not Found' }}
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
