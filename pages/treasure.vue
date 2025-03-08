<script setup>
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useRoute } from "#app";
import { findTreasureByCode } from '~/server/utils/treasure';

dayjs.extend(utc); // Enable UTC plugin for dayjs

const route = useRoute();
const code = route.query.code;

const treasure = findTreasureByCode(code);

// calculate found_in from hidden_at and found_at
if (treasure) {
    if (treasure.found_at && treasure.hidden_at) {
        treasure.found_in = treasure.found_at - treasure.hidden_at;
    } else {
        treasure.found_in = 0;
    }
}

const formatedTime = dayjs.utc(treasure.found_in * 1000).format("HH:mm:ss.SSS");

</script>

<template>
    <v-container>
        <v-card v-if="treasure">
            <v-card-title class="text-h5">{{ treasure.title }}</v-card-title>
            <v-card-text>
                <p><strong>Description:</strong> {{ treasure.description }}</p>
                <p><strong>Hidden At:</strong> {{ new Date(treasure.hidden_at * 1000).toLocaleString() }}</p>
                <p><strong>Found At:</strong> {{ treasure.found_at ? new Date(treasure.found_at * 1000).toLocaleString() : 'Not Found' }}</p>
                <p><strong>Finder:</strong> {{ treasure.finder?.username || 'Unclaimed' }}</p>
                <p><strong>Found Time:</strong> {{ formatedTime }}</p>
            </v-card-text>
            <v-img src= "https://unsplash.it/600/400" />
        </v-card>
        <v-card v-else>
            <v-card-title class="text-h5">Treasure not found</v-card-title>
        </v-card>
    </v-container>
</template>

<style scoped>
.v-card {
    max-width: 800px;
    margin: auto;
}
</style>
