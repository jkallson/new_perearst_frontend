<template>
  <fragment>
    <h1 class="text-lg-h3 text-sm-h4 text-h5 font-weight-bold mb-3 text-center">
      {{ name.toUpperCase() }}
    </h1>
    <v-responsive class="mx-auto mb-4" width="56">
      <v-divider class="primary" style="border: 3px solid"></v-divider>
      <v-divider></v-divider>
    </v-responsive>
  </fragment>
</template>

<script>
export default {
  name: "SectionName",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
