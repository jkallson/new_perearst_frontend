<template>
  <div class="d-flex fill-height" style="flex-direction: column">
    <Header></Header>
    <v-container fluid class="grey lighten-3">
      <SectionName name="Teadaanded"></SectionName>
      <v-container>
        <h3 class="text-center pt-4 mb-4">
          Siit leiate viimased teadaanded Ahja perearstikabineti poolt!
        </h3>
        <BasicToolbar></BasicToolbar>
        <BasicExpansionPanels
          type="notification"
          :items="notifications"
        ></BasicExpansionPanels>
      </v-container>
    </v-container>
    <v-container fluid class="fill-height grey lighten-3"></v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import SectionName from "@/components/SectionName";
import BasicToolbar from "@/components/BasicToolbar";
import { RepositoryFactory } from "@/repository/repositoryFactory";
import Footer from "@/components/Footer";
import BasicExpansionPanels from "@/components/BasicExpansionPanels";
const NotificationsRepository = RepositoryFactory.get("notifications");

export default {
  name: "NotificationPanel",
  components: {
    BasicExpansionPanels,
    Footer,
    BasicToolbar,
    SectionName,
    Header
  },
  data() {
    return {
      notifications: []
    };
  },
  async created() {
    const response = await NotificationsRepository.getNotifications();
    this.notifications = response.data.data.news;
  }
};
</script>

<style scoped></style>
