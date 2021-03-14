<template>
  <fragment>
    <v-toolbar short color="primary" dark flat>
      <v-toolbar-title>{{ name }}</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1 mb-5"
    ></v-data-table>
  </fragment>
</template>

<script>
export default {
  name: "BasicTable",
  props: {
    items: Array,
    name: String
  },
  data() {
    return {
      headers: [
        {
          text: "Teenus",
          value: "name"
        },
        { text: "Hind", value: "calories" }
      ]
    };
  }
};
</script>

<style scoped></style>
