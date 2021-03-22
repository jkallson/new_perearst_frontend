<template>
  <v-row justify="center">
    <v-btn
      v-bind:outlined="type === 'telefon'"
      min-width="200px"
      class="mb-2"
      color="primary"
      dark
      @click.stop="isOpen = true"
    >
      {{ name }}
    </v-btn>
    <v-dialog v-model="isOpen" transition="fade-transition" max-width="600">
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>{{ name }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="isOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <BasicTable
          type="times"
          :header-visible="false"
          :table-config="tableConfig"
        ></BasicTable>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import BasicTable from "@/components/BasicTable";
export default {
  name: "WorkerInfoButton",
  components: { BasicTable },
  props: {
    name: String,
    type: String
  },
  data() {
    return {
      isOpen: false,
      tableConfig: {
        headers: [
          {
            text: "Päev",
            align: "start",
            value: "day",
            sortable: false
          },
          {
            text: "Kellaajad",
            align: "end",
            value: "time",
            sortable: false
          }
        ],
        items: [
          {
            day: "Esmaspäev",
            time: 159 + " eurot"
          },
          {
            day: "Teisipäev",
            time: 237 + " eurot"
          },
          {
            day: "Kolmapäev",
            time: 262 + " eurot"
          },
          {
            day: "Neljapäev",
            time: 305 + " eurot"
          },
          {
            day: "Reede",
            time: 356 + " eurot"
          }
        ]
      }
    };
  }
};
</script>
<style></style>
