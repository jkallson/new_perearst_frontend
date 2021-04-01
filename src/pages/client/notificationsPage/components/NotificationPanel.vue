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
        <v-expansion-panels accordion focusable>
          <v-expansion-panel
            v-for="(notification, i) in notifications"
            :key="i"
          >
            <v-expansion-panel-header>
              {{ notification.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="px-6"
              v-html="notification.content"
            >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-container>
    <v-container
      fluid
      class="fill-height grey lighten-3"
      style="background-color: red"
    ></v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import SectionName from "@/components/SectionName";
import BasicToolbar from "@/components/BasicToolbar";
import { RepositoryFactory } from "@/repository/repositoryFactory";
import Footer from "@/components/Footer";
const NotificationsRepository = RepositoryFactory.get("notifications");

export default {
  name: "NotificationPanel",
  components: { Footer, BasicToolbar, SectionName, Header },
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
