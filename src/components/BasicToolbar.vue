<template>
  <v-toolbar short color="primary" dark flat>
    <v-toolbar-title>{{ name.toUpperCase() }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: "BasicToolbar",
  props: {
    name: String
  }
};
</script>

<style scoped></style>
