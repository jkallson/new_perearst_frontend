<template>
  <v-container fill-height fluid>
    <AdminHeader></AdminHeader>
    <v-row no-gutters>
      <v-col>
        <AdminAboutUs :about-us="homePageData.aboutUsText"></AdminAboutUs>
      </v-col>
    </v-row>
    <v-row class="pt-5 mt-0">
      <v-col class="pt-0">
        <AdminWorkers :workers="homePageData.workers"></AdminWorkers>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminPrices :prices="homePageData.prices"></AdminPrices>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminUsefulLinks :links="homePageData.links"></AdminUsefulLinks>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminNotifications
          :notifications="homePageData.notifications"
        ></AdminNotifications>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminRegulations
          :regulations="homePageData.regulations"
        ></AdminRegulations>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminAboutUs from "@/pages/admin/mainPage/components/aboutUs/AdminAboutUs";
import AdminWorkers from "@/pages/admin/mainPage/components/workers/AdminWorkers";
import AdminPrices from "@/pages/admin/mainPage/components/prices/AdminPrices";
import AdminUsefulLinks from "@/pages/admin/mainPage/components/usefulLinks/AdminUsefulLinks";
import AdminHeader from "@/pages/admin/mainPage/components/header/AdminHeader";
import AdminNotifications from "@/pages/admin/mainPage/components/notifications/AdminNotifications";
import { RepositoryFactory } from "@/repository/repositoryFactory";
import AdminRegulations from "@/pages/admin/mainPage/components/regulations/AdminRegulations";
const HomePageRepository = RepositoryFactory.get("homePage");
export default {
  name: "AdminHomePage",
  components: {
    AdminRegulations,
    AdminNotifications,
    AdminHeader,
    AdminUsefulLinks,
    AdminPrices,
    AdminWorkers,
    AdminAboutUs
  },
  data() {
    return {
      requestResult: [],
      homePageData: {}
    };
  },
  async mounted() {
    this.requestResult = await HomePageRepository.getAllAdminInformation();
    this.homePageData = transform(this.requestResult);
  }
};
function transform(requestResult) {
  const requestData = requestResult.data.data;
  return {
    aboutUsText: requestData.aboutUs,
    workers: requestData.workers,
    prices: requestData.prices.flatMap(element => element.data),
    links: requestData.links,
    notifications: requestData.news,
    regulations: requestData.regulations
  };
}
</script>

<style scoped></style>
