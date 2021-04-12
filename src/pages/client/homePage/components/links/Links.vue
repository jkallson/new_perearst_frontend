<template>
  <v-card height="100%">
    <BasicToolbar name="lingid"></BasicToolbar>
    <v-data-table
      :headers="tableConfig.headers"
      :items="links"
      :footer-props="{
        disableItemsPerPage: true,
        itemsPerPageText: null,
        itemsPerPageOptions: []
      }"
      :options="{ itemsPerPage: 9 }"
      class="elevation-1"
    >
      <template v-slot:item="{ item }">
        <tr style="text-align: center">
          <td>
            <a :href="item.link">{{ item.name }}</a>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import BasicToolbar from "@/components/BasicToolbar";
export default {
  name: "Links",
  components: { BasicToolbar },
  props: {
    links: Array
  },
  data() {
    return {
      tableConfig: {
        headers: [
          {
            text: "Link",
            align: "center",
            value: "link",
            sortable: false
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
