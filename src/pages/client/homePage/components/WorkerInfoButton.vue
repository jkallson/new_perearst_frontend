<template>
  <v-row justify="center">
    <v-btn
      v-bind:outlined="type === 'telefon'"
      min-width="200px"
      class="mb-2"
      color="#F09F54"
      dark
    >
      {{ name }}
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "WorkerInfoButton",
  props: {
    name: String,
    type: String
  }
};
</script>
<style></style>
