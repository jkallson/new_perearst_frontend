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
      <v-expansion-panel v-for="item in notifications" :key="item.name">
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
import { RepositoryFactory } from "@/repository/repositoryFactory";
const NotificationsRepository = RepositoryFactory.get("notifications");
export default {
  name: "AdminNotifications",
  components: { DeleteNotificationModal, AddNotificationModal },
  props: {
    notifications: Array
  },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
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
      this.editedIndex = this.notifications.indexOf(notification);
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
      this.editedIndex = this.notifications.indexOf(notification);
      this.editedItem = Object.assign({}, notification);
      this.dialogDelete = true;
    },

    deleteNotificationConfirm() {
      this.notifications.splice(this.editedIndex, 1);
      NotificationsRepository.deleteNotification(this.editedItem._id);
      this.closeDelete();
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
        Object.assign(this.notifications[this.editedIndex], this.editedItem);
        await NotificationsRepository.updateNotification(this.editedItem);
      } else {
        const result = await NotificationsRepository.createNotification(
          this.editedItem
        );
        this.editedItem._id = result.data.data.createNews._id;
        this.notifications.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>
