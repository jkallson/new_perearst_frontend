<template>
  <v-toolbar class="toolbarCorners" dense color="primary" dark flat>
    <v-toolbar-title>{{ name.toUpperCase() }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: "BasicToolbar",
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style scoped>
.toolbarCorners {
  border-radius: 4px 4px 0 0;
}
</style>
