<template>
  <v-card>
    <v-toolbar flat color="primary">
      <v-toolbar-title class="white--text">UUDISED</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            Lisa uus
          </v-btn>
        </template>
        <AddNotificationModal
          :formTitle="formTitle"
          :edited-item="editedItem"
          @saveModal="save"
          @closeModal="close"
        ></AddNotificationModal>
      </v-dialog>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <DeleteNotificationModal
          @closeDelete="closeDelete"
          @deleteNotificationConfirm="deleteNotificationConfirm"
        ></DeleteNotificationModal>
      </v-dialog>
    </v-toolbar>
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="item in items" :key="item.name">
        <v-expansion-panel-header disable-icon-rotate>
          {{ item.name }}
          <template v-slot:actions>
            <v-icon @click.capture.stop="modifyNotification(item)">
              mdi-pencil
            </v-icon>
            <v-icon @click.capture.stop="deleteNotification(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-6" v-html="item.content">
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import AddNotificationModal from "@/pages/admin/mainPage/components/notifications/components/AddNotificationModal";
import DeleteNotificationModal from "@/pages/admin/mainPage/components/notifications/components/DeleteNotificationModal";
export default {
  name: "AdminNotifications",
  components: { DeleteNotificationModal, AddNotificationModal },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      items: [
        { name: "Uudis 1", content: "qwe" },
        { name: "Uudis 2", content: "qwe" },
        { name: "Uudis 3", content: "qwe" },
        { name: "Uudis 4", content: "qwe" },
        { name: "Uudis 5", content: "qwe" },
        { name: "Uudis 6", content: "qwe" },
        { name: "Uudis 7", content: "qwe" },
        { name: "Uudis 8", content: "qwe" },
        { name: "Uudis 9", content: "qwe" }
      ],
      editedIndex: -1,
      editedItem: {
        name: "",
        content: ""
      },
      defaultItem: {
        name: "",
        content: ""
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Lisa uus uudis" : "Muuda uudist";
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
    modifyNotification(notification) {
      this.editedIndex = this.items.indexOf(notification);
      this.editedItem = Object.assign({}, notification);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    deleteNotification(notification) {
      this.editedIndex = this.items.indexOf(notification);
      this.editedItem = Object.assign({}, notification);
      this.dialogDelete = true;
    },

    deleteNotificationConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
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
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>
