<template>
  <v-container fluid class="text-center">
    <SectionName name="HINNAD"></SectionName>
    <BasicTable
      v-for="price in prices"
      :key="price.class"
      type="price"
      :name="price.class"
      :items="price.data"
      :table-config="tableConfig"
    ></BasicTable>
  </v-container>
</template>

<script>
import BasicTable from "@/components/BasicTable";
import SectionName from "@/components/SectionName";
export default {
  name: "Prices",
  components: { SectionName, BasicTable },
  props: {
    prices: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      tableConfig: {
        headers: [
          {
            text: "Teenus",
            align: "start",
            value: "name",
            sortable: false
          },
          { text: "Hind", value: "price", align: "end", sortable: false }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
