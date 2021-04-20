<template>
  <v-data-table
    :headers="headers"
    :items="prices"
    hide-default-footer
    :items-per-page="prices.length"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="white--text">HINNAD</v-toolbar-title>
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
                      label="Nimi"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.price"
                      label="Hind"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.class"
                      label="Klass"
                    ></v-text-field>
                  </v-col>
                </v-row>
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
              >Kas soovite tõesti kustutada teenuse?</v-card-title
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
import { RepositoryFactory } from "@/repository/repositoryFactory";
const PricesRepository = RepositoryFactory.get("prices");
export default {
  name: "AdminPrices",
  props: {
    prices: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Teenuse nimi",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Hind", value: "price", sortable: false },
      { text: "Klass", value: "class", sortable: false },
      { text: "Muuda/Kustuta", value: "actions", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      price: "",
      class: ""
    },
    defaultItem: {
      name: "",
      price: "",
      class: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Lisa uus teenus" : "Muuda teenust";
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
      this.editedIndex = this.prices.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.prices.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.prices.splice(this.editedIndex, 1);
      PricesRepository.deletePrice(this.editedItem._id);
      this.$notify({
        type: "success",
        title: "Korras",
        text: "Hind edukalt kustutatud!"
      });
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        await PricesRepository.updatePrice(this.editedItem).then(r => {
          if (this.validateResponse(r, "Hind edukalt uuendatud!")) {
            Object.assign(this.prices[this.editedIndex], this.editedItem);
          }
        });
      } else {
        const response = await PricesRepository.createPrice(this.editedItem);
        if (this.validateResponse(response, "Hind edukalt lisatud!")) {
          this.editedItem._id = response.data.data.createPrice._id;
          this.prices.push(this.editedItem);
        }
      }
      this.close();
    },
    validateResponse(response, text) {
      if (response && response.status === 200 && response.statusText === "OK") {
        this.$notify({
          type: "success",
          title: "Korras",
          text: text
        });
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped></style>
