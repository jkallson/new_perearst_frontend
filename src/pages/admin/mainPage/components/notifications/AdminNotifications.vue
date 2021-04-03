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
      NotificationsRepository.createNotification(notification);
    },
    updateNotification(notification) {
      NotificationsRepository.updateNotification(notification);
    },
    deleteNotification(notificationId) {
      NotificationsRepository.deleteNotification(notificationId);
    }
  }
};
</script>

<style scoped></style>
