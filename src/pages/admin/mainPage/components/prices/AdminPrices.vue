<template>
  <v-data-table
    :headers="headers"
    :items="prices"
    sort-by="price"
    hide-default-footer
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
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "AdminPrices",
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
    prices: [],
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

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.prices = [
        {
          name: "Juhilubade tervisetõend",
          price: "10 eurot",
          class: "Tõendid"
        },
        {
          name: "Puugisüst",
          price: "11 eurot",
          class: "Vaktsineerime järgnevate haiguste vastu"
        },
        {
          name: "Tervisetõend (sisaldab kopsuröntgenit)",
          price: "Tasuta",
          class: "Tõendid"
        },
        {
          name: "Kindlustamata inimese vastuvõtt",
          price: "18 eurot",
          class: "Visiiditasud"
        }
      ];
    },

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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.prices[this.editedIndex], this.editedItem);
      } else {
        this.prices.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>
