<template>
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
              outlined
              hide-details
              label="Uudise pealkiri"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <VueEditor v-model="editedItem.content"></VueEditor>
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
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "AddNotificationModal",
  components: { VueEditor },
  props: {
    formTitle: String,
    editedItem: Object
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    save() {
      this.$emit("saveModal", this.editedItem);
    }
  }
};
</script>

<style scoped></style>
