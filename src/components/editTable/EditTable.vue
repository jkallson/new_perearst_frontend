<template>
  <v-card>
    <v-toolbar flat color="primary">
      <v-toolbar-title class="white--text">{{ label }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            Lisa uus
          </v-btn>
        </template>
        <EditModal
          :formTitle="formTitle"
          :edited-item="editedItem"
          @saveModal="save"
          @closeModal="close"
        ></EditModal>
      </v-dialog>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <DeleteModal
          @closeDelete="closeDelete"
          @deleteNotificationConfirm="deleteNotificationConfirm"
        ></DeleteModal>
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
import EditModal from "@/components/editTable/EditModal";
import DeleteModal from "@/components/editTable/DeleteModal";
export default {
  name: "EditTable",
  components: { DeleteModal, EditModal },
  props: {
    items: Array,
    label: {
      type: String,
      default: ""
    }
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
      if (this.label === "UUDISED") {
        return this.editedIndex === -1 ? "Lisa uus uudis" : "Muuda uudist";
      } else {
        return this.editedIndex === -1
          ? "Lisa uus kodukorra info"
          : "Muuda kodukorra infot";
      }
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
      this.$emit("deleteEvent", this.editedItem._id);
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
        Object.assign(this.items[this.editedIndex], this.editedItem);
        this.$emit("updateEvent", this.editedItem);
      } else {
        this.$emit("createEvent", this.editedItem);
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>
