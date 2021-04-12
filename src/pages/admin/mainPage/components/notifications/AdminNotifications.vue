<template>
  <EditTable
    :items="notifications"
    label="UUDISED"
    @createEvent="createNotification"
    @updateEvent="updateNotification"
    @deleteEvent="deleteNotification"
  ></EditTable>
</template>

<script>
/* eslint-disable prettier/prettier */
import { RepositoryFactory } from "@/repository/repositoryFactory";
import EditTable from "@/components/editTable/EditTable";
const NotificationsRepository = RepositoryFactory.get("notifications");
export default {
  name: "AdminNotifications",
  components: { EditTable },
  props: {
    notifications: Array
  },
  methods: {
    async createNotification(notification) {
      notification.date = this.createDate();
      const response = await NotificationsRepository.createNotification(notification);
      this.notify(response, "Uudis edukalt lisatud!");
    },
    async updateNotification(notification) {
      notification.date = this.createDate();
      const response = await NotificationsRepository.updateNotification(notification);
      this.notify(response, "Uudis edukalt uuendatud!");
    },
    async deleteNotification(notificationId) {
      const response = await NotificationsRepository.deleteNotification(notificationId);
      this.notify(response, "Uudis edukalt kustutatud!");
    },
    createDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();

      return dd + "/" + mm + "/" + yyyy;
    },
    notify(response, text) {
      if (response && !response.data.errors) {
        this.$notify({
          type: "success",
          title: "Korras",
          text: text
        });
      }
    }
  }
};
</script>

<style scoped></style>
