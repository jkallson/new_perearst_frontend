<template>
  <v-card class="px-5 mb-5" elevation="4">
    <v-card-title class="justify-center">{{ name }}</v-card-title>
    <v-row dense v-for="(item, index) in times" :key="index">
      <v-col cols="6">
        <v-text-field v-model="item.day" disabled> </v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="item.time"> </v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "WorkerTimes",
  props: {
    name: String,
    times: Array
  }
};
</script>

<style scoped></style>
