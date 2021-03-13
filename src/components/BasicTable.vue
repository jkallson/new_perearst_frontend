<template>
  <fragment>
    <v-toolbar short color="#F09F54" dark flat>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ name }}</v-toolbar-title>
      <v-spacer></v-spacer>
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
          align: "center",
          value: "name"
        },
        { text: "Hind", align: "center", value: "calories" }
      ]
    };
  }
};
</script>

<style scoped></style>
