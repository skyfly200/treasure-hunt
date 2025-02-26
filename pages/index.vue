<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>Treasure Hunt</v-toolbar-title>
            <v-btn to="/leaderboard">Leaderboard</v-btn>
            <v-btn to="/about">About</v-btn>
            <v-btn to="/found">Found</v-btn>
        </v-toolbar>
        <client-only>
            <Map />
        </client-only>
    </div>
</template>
  