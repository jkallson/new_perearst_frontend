<template>
  <fragment>
    <BasicToolbar v-if="headerVisible" :name="name"></BasicToolbar>
    <v-data-table
      :headers="tableConfig.headers"
      :items="items"
      hide-default-footer
      class="elevation-1"
      :class="type"
    ></v-data-table>
  </fragment>
</template>

<script>
import BasicToolbar from "@/components/BasicToolbar";
export default {
  name: "BasicTable",
  components: { BasicToolbar },
  props: {
    tableConfig: Object,
    name: String,
    type: String,
    items: Array,
    headerVisible: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style scoped>
.price {
  margin-bottom: 20px;
}
</style>
