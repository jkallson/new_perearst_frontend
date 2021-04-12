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
    createNotification(notification) {
      notification.date = this.createDate();
      NotificationsRepository.createNotification(notification);
    },
    updateNotification(notification) {
      notification.date = this.createDate();
      NotificationsRepository.updateNotification(notification);
    },
    deleteNotification(notificationId) {
      NotificationsRepository.deleteNotification(notificationId);
    },
    createDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();

      return dd + "/" + mm + "/" + yyyy;
    }
  }
};
</script>

<style scoped></style>
