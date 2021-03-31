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
        <AdminContactInformation
          :contact-information="homePageData.contactInformation"
        ></AdminContactInformation>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminNotifications></AdminNotifications>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminAboutUs from "@/pages/admin/mainPage/components/aboutUs/AdminAboutUs";
import AdminWorkers from "@/pages/admin/mainPage/components/workers/AdminWorkers";
import AdminPrices from "@/pages/admin/mainPage/components/prices/AdminPrices";
import AdminContactInformation from "@/pages/admin/mainPage/components/contactInformation/AdminContactInformation";
import AdminUsefulLinks from "@/pages/admin/mainPage/components/usefulLinks/AdminUsefulLinks";
import AdminHeader from "@/pages/admin/mainPage/components/header/AdminHeader";
import api from "@/repository/api";
import AdminNotifications from "@/pages/admin/mainPage/components/notifications/AdminNotifications";
export default {
  name: "AdminHomePage",
  components: {
    AdminNotifications,
    AdminHeader,
    AdminUsefulLinks,
    AdminContactInformation,
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
    this.requestResult = await api.getAllInformation();
    this.homePageData = transform(this.requestResult);
  }
};
function transform(requestResult) {
  const requestData = requestResult.data.data;
  return {
    aboutUsText: requestData.aboutUs,
    contactInformation: requestData.contactInformation,
    workers: requestData.workers,
    prices: requestData.prices.flatMap(element => element.data),
    links: requestData.links
  };
}
</script>

<style scoped></style>
