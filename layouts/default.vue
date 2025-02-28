<template>
  <div>
    <v-toolbar density="compact">
      <v-toolbar-title>Treasure Hunt</v-toolbar-title>
      <v-btn to="/">Map</v-btn>
      <v-btn to="/leaderboard">Scores</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-toolbar>
    <slot />
  </div>
</template>