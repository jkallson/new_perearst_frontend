<template>
  <v-data-table
    :headers="headers"
    :items="links"
    class="elevation-1"
    :items-per-page="links.length"
    style="word-break: break-all"
    hide-default-footer
  >
    <template v-slot:item.order="{ item }">
      <v-icon
        small
        @click="moveItem(item, 'up')"
        :disabled="checkIfDisabled(item, 'up')"
      >
        mdi-arrow-up-bold-circle-outline
      </v-icon>
      <v-icon
        small
        @click="moveItem(item, 'down')"
        :disabled="checkIfDisabled(item, 'down')"
        >mdi-arrow-down-bold-circle-outline
      </v-icon>
    </template>
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="white--text">LINGID</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              large
              v-bind="attrs"
              v-on="on"
              class="mr-2"
              @click="saveLinksOrder"
            >
              <v-icon color="white">mdi-content-save-outline</v-icon>
            </v-btn>
          </template>
          <span>Salvesta linkide järjestus</span>
        </v-tooltip>
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
/* eslint-disable prettier/prettier */
import { RepositoryFactory } from "@/repository/repositoryFactory";
const LinksRepository = RepositoryFactory.get("links");
export default {
  name: "AdminUsefulLinks",
  props: {
    links: {
      type: Array,
      default() {
        return []
      }
    }
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
    checkIfDisabled(link, direction) {
      const linkIndex = this.links.indexOf(link);
      if (direction === "up") {
        return linkIndex === 0;
      } else {
        return linkIndex === this.links.length - 1;
      }
    },
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
      this.notify("Link edukalt eemaldatud!")
      this.rewriteOrderIndexes()
      LinksRepository.updateLinkOrder(this.links)
      this.closeDelete();
    },
    rewriteOrderIndexes() {
      this.links.map((element, index) => {
        return element.orderIndex = index
      })
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
        const response = await LinksRepository.updateLink(this.editedItem);
        if (response && response.status === 200 && response.statusText === "OK") {
          this.notify("Link edukalt muudetud!")
          Object.assign(this.links[this.editedIndex], this.editedItem);
        }
      } else {
        this.editedItem.orderIndex = this.links.length;
        const response = await LinksRepository.createLink(this.editedItem);
        if (response && response.status === 200 && response.statusText === "OK") {
          this.notify("Link edukalt lisatud!")
          this.editedItem._id = response.data.data.createLink._id;
          this.links.push(this.editedItem);
        }
      }
      this.close();
    },
    moveItem(item, direction) {
      const linkIndex = this.links.indexOf(item);
      const influencedLinkIndex = direction === 'up' ? linkIndex - 1 : linkIndex + 1
      this.links.splice(linkIndex, 0, this.links.splice(influencedLinkIndex, 1)[0]);
      this.links[linkIndex].orderIndex = linkIndex;
      this.links[influencedLinkIndex].orderIndex = influencedLinkIndex;
    },
    async saveLinksOrder() {
      const response = await LinksRepository.updateLinkOrder(this.links)
      if (response && response.status === 200 && response.statusText === "OK") {
        this.notify("Linkide järjestus edukalt salvestatud!")
      }
    },
    notify(text) {
      this.$notify({
        type: "success",
        title: "Korras",
        text: text
      })
    }
  }
};
</script>

<style scoped></style>
