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
            <v-btn v-bind="attrs" v-on="on">
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
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.name"
                      outlined
                      label="Töötaja nimi"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
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
              >Kas soovite tõesti kustutada töötaja
              {{ editedItem.name }} ?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Ei</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >Jah</v-btn
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
import { RepositoryFactory } from "@/repository/repositoryFactory";
const WorkersRepository = RepositoryFactory.get("workers");
export default {
  name: "WorkersTable",
  components: { WorkerTimes },
  props: {
    workers: Array
  },
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
    editedIndex: -1,
    editedItem: {
      name: "",
      position: "",
      imageUrl: "qwe",
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
      imageUrl: "qwe",
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

  methods: {
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
      WorkersRepository.deleteWorker(this.editedItem._id);
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

    async save() {
      if (this.editedIndex > -1) {
        await WorkersRepository.updateWorker(this.editedItem);
        Object.assign(this.workers[this.editedIndex], this.editedItem);
      } else {
        const response = await WorkersRepository.createWorker(this.editedItem);
        this.editedItem._id = response.data.data.createWorker._id;
        this.workers.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>
