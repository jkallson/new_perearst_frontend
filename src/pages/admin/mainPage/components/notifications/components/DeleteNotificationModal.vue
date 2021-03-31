<template>
  <v-card>
    <v-card-title class="headline">
      Kas soovite tõesti kustutada uudist?
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDelete">
        Ei
      </v-btn>
      <v-btn color="blue darken-1" text @click="deleteNotificationConfirm">
        Jah
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "DeleteNotificationModal",
  methods: {
    closeDelete() {
      this.$emit("closeDelete");
    },
    deleteNotificationConfirm() {
      this.$emit("deleteNotificationConfirm");
    }
  }
};
</script>

<style scoped></style>
