<template>
  <v-data-table
    :headers="headers"
    :items="links"
    class="elevation-1"
    style="word-break: break-all"
    hide-default-footer
  >
    <template v-slot:item.order="{ item }">
      <v-icon small @click="moveItem(item)">
        mdi-arrow-up-bold-circle-outline
      </v-icon>
      <v-icon small @click="moveItem(item)"
        >mdi-arrow-down-bold-circle-outline
      </v-icon>
    </template>
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="white--text">LINGID</v-toolbar-title>
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
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nimi"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.link"
                      label="Link"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.orderIndex"
                      label="Järjekorranumber"
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
            <v-card-title class="headline">
              Kas soovite tõesti kustutada linki?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">
                Ei
              </v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                Jah
              </v-btn>
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
const LinksRepository = RepositoryFactory.get("links");
export default {
  name: "AdminUsefulLinks",
  props: {
    links: Array
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Järjestus",
        align: "start",
        sortable: false,
        value: "order"
      },
      { text: "Nimi", value: "name", sortable: false },
      { text: "Link", value: "link", sortable: false },
      { text: "Muuda/Kustuta", value: "actions", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      link: "",
      orderIndex: 0
    },
    defaultItem: {
      name: "",
      link: "",
      orderIndex: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Lisa uus link" : "Muuda linki";
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
      this.editedIndex = this.links.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.links.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.links.splice(this.editedIndex, 1);
      LinksRepository.deleteLink(this.editedItem._id);
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
        Object.assign(this.links[this.editedIndex], this.editedItem);
        LinksRepository.updateLink(this.editedItem);
      } else {
        this.editedItem.orderIndex = this.links.length;
        LinksRepository.createLink(this.editedItem);
        this.links.push(this.editedItem);
      }
      this.close();
    },
    moveItem(item) {
      console.log(item);
    }
  }
};
</script>

<style scoped></style>
