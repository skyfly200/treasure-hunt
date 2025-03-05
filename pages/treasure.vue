<script setup>
import { useFetch, useRoute } from "#app";

const route = useRoute();
const code = route.query.code;

const { data: treasure } = await useFetch(`/api/treasure/${code}`);

// calculate found_in from hidden_at and found_at
if (treasure.value) {
    if (treasure.value.found_at && treasure.value.hidden_at) {
        treasure.value.found_in = treasure.value.found_at - treasure.value.hidden_at;
    } else {
        treasure.value.found_in = 0;
    }
}
</script>

<template>
    <v-container>
        <v-card v-if="treasure">
            <v-card-title class="text-h5">{{ treasure.title }}</v-card-title>
            <v-card-text>
                <p><strong>Description:</strong> {{ treasure.description }}</p>
                <p><strong>Hidden:</strong> {{ new Date(treasure.hidden_at * 1000).toLocaleString() }}</p>
                <p><strong>Found:</strong> {{ treasure.found_at ? new Date(treasure.found_at * 1000).toLocaleString() : 'Not Found' }}</p>
                <p><strong>Finder:</strong> {{ treasure.finder?.username || 'Unclaimed' }}</p>
                <p><strong>Found In:</strong> {{ treasure.found_in }} seconds</p>
            </v-card-text>
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
