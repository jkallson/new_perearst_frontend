<template>
  <fragment>
    <BasicToolbar :name="name"></BasicToolbar>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1 mb-5"
    ></v-data-table>
  </fragment>
</template>

<script>
import BasicToolbar from "@/components/BasicToolbar";
export default {
  name: "BasicTable",
  components: { BasicToolbar },
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
