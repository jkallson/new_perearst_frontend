<template>
  <v-container fluid class="text-center">
    <SectionName name="HINNAD"></SectionName>
    <BasicTable
      type="price"
      name="Tõendid"
      :table-config="tableConfig"
    ></BasicTable>
    <BasicTable
      type="price"
      name="Visiiditasud"
      :table-config="tableConfig"
    ></BasicTable>
    <BasicTable
      type="price"
      name="Vaktsineerimine"
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
  data() {
    return {
      tableConfig: {
        headers: [
          {
            text: "Teenus",
            align: "start",
            value: "name"
          },
          { text: "Hind", value: "calories" }
        ],
        items: [
          {
            name: "Frozen Yogurt",
            calories: 159 + " eurot"
          },
          {
            name: "Ice cream sandwich",
            calories: 237 + " eurot"
          },
          {
            name: "Eclair",
            calories: 262 + " eurot"
          },
          {
            name: "Cupcake",
            calories: 305 + " eurot"
          },
          {
            name: "Gingerbread",
            calories: 356 + " eurot"
          },
          {
            name: "Jelly bean",
            calories: 375 + " eurot"
          },
          {
            name: "Lollipop",
            calories: 392 + " eurot"
          },
          {
            name: "Honeycomb",
            calories: 408 + " eurot"
          },
          {
            name: "Donut",
            calories: 452 + " eurot"
          },
          {
            name: "KitKat",
            calories: 518 + " eurot"
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
