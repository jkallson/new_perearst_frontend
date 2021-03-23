<template>
  <v-data-table
    :headers="headers"
    :items="workers"
    class="elevation-1"
    hide-default-footer
  >
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="white--text">TÖÖTAJAD</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="primary--text" v-bind="attrs" v-on="on">
              Lisa uus
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      outlined
                      label="Töötaja nimi"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.position"
                      outlined
                      label="Töötaja ametikoht"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <WorkerTimes
                  name="Vastuvõtu ajad"
                  :times="editedItem.receptionTimes"
                ></WorkerTimes>
                <WorkerTimes
                  name="Telefoniajad"
                  :times="editedItem.mobileTimes"
                ></WorkerTimes>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Tühista
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Salvesta
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import WorkerTimes from "@/pages/admin/mainPage/components/workers/components/WorkerTimes";
export default {
  name: "WorkersTable",
  components: { WorkerTimes },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Töötaja nimi",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Ametikoht", value: "position", sortable: false },
      {
        text: "Muuda/Kustuta",
        value: "actions",
        sortable: false,
        align: "center"
      }
    ],
    workers: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      position: "",
      receptionTimes: [
        { day: "Esmaspäev", time: "-" },
        { day: "Teisipäev", time: "-" },
        { day: "Kolmapäev", time: "-" },
        { day: "Neljapäev", time: "-" },
        { day: "Reede", time: "-" }
      ],
      mobileTimes: [
        { day: "Esmaspäev", time: "-" },
        { day: "Teisipäev", time: "-" },
        { day: "Kolmapäev", time: "-" },
        { day: "Neljapäev", time: "-" },
        { day: "Reede", time: "-" }
      ]
    },
    defaultItem: {
      name: "",
      position: "",
      receptionTimes: [
        { day: "Esmaspäev", time: "-" },
        { day: "Teisipäev", time: "-" },
        { day: "Kolmapäev", time: "-" },
        { day: "Neljapäev", time: "-" },
        { day: "Reede", time: "-" }
      ],
      mobileTimes: [
        { day: "Esmaspäev", time: "-" },
        { day: "Teisipäev", time: "-" },
        { day: "Kolmapäev", time: "-" },
        { day: "Neljapäev", time: "-" },
        { day: "Reede", time: "-" }
      ]
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Lisa uus töötaja"
        : "Muuda töötaja infomatsiooni";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.workers = [
        {
          name: "Töötaja Üks",
          position: "Perearst",
          receptionTimes: [
            { day: "Esmaspäev", time: "08.00-19.00" },
            { day: "Teisipäev", time: "08.00-19.00" },
            { day: "Kolmapäev", time: "08.00-19.00" },
            { day: "Neljapäev", time: "08.00-19.00" },
            { day: "Reede", time: "08.00-19.00" }
          ],
          mobileTimes: [
            { day: "Esmaspäev", time: "18.00-19.00" },
            { day: "Teisipäev", time: "18.00-19.00" },
            { day: "Kolmapäev", time: "18.00-19.00" },
            { day: "Neljapäev", time: "18.00-19.00" },
            { day: "Reede", time: "18.00-19.00" }
          ]
        },
        {
          name: "Töötaja Kaks",
          position: "Perearsti asendus",
          receptionTimes: [
            { day: "Esmaspäev", time: "08.00-19.00" },
            { day: "Teisipäev", time: "08.00-19.00" },
            { day: "Kolmapäev", time: "08.00-19.00" },
            { day: "Neljapäev", time: "08.00-19.00" },
            { day: "Reede", time: "08.00-19.00" }
          ],
          mobileTimes: [
            { day: "Esmaspäev", time: "18.00-19.00" },
            { day: "Teisipäev", time: "18.00-19.00" },
            { day: "Kolmapäev", time: "18.00-19.00" },
            { day: "Neljapäev", time: "18.00-19.00" },
            { day: "Reede", time: "18.00-19.00" }
          ]
        },
        {
          name: "Töötaja Kolm",
          position: "Pereõde",
          receptionTimes: [
            { day: "Esmaspäev", time: "08.00-19.00" },
            { day: "Teisipäev", time: "08.00-19.00" },
            { day: "Kolmapäev", time: "08.00-19.00" },
            { day: "Neljapäev", time: "08.00-19.00" },
            { day: "Reede", time: "08.00-19.00" }
          ],
          mobileTimes: [
            { day: "Esmaspäev", time: "18.00-19.00" },
            { day: "Teisipäev", time: "18.00-19.00" },
            { day: "Kolmapäev", time: "18.00-19.00" },
            { day: "Neljapäev", time: "18.00-19.00" },
            { day: "Reede", time: "18.00-19.00" }
          ]
        },
        {
          name: "Töötaja Neli",
          position: "Pereõde",
          receptionTimes: [
            { day: "Esmaspäev", time: "08.00-19.00" },
            { day: "Teisipäev", time: "08.00-19.00" },
            { day: "Kolmapäev", time: "08.00-19.00" },
            { day: "Neljapäev", time: "08.00-19.00" },
            { day: "Reede", time: "08.00-19.00" }
          ],
          mobileTimes: [
            { day: "Esmaspäev", time: "18.00-19.00" },
            { day: "Teisipäev", time: "18.00-19.00" },
            { day: "Kolmapäev", time: "18.00-19.00" },
            { day: "Neljapäev", time: "18.00-19.00" },
            { day: "Reede", time: "18.00-19.00" }
          ]
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.workers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.workers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.workers.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = JSON.parse(JSON.stringify(this.defaultItem));
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = JSON.parse(JSON.stringify(this.defaultItem));
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.workers[this.editedIndex], this.editedItem);
      } else {
        this.workers.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>