<template>
  <v-container fill-height fluid>
    <AdminHeader></AdminHeader>
    <v-row no-gutters>
      <v-col>
        <AdminAboutUs></AdminAboutUs>
      </v-col>
    </v-row>
    <v-row class="pt-5 mt-0">
      <v-col class="pt-0">
        <AdminWorkers></AdminWorkers>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminPrices></AdminPrices>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminUsefulLinks></AdminUsefulLinks>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <AdminContactInformation></AdminContactInformation>
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
export default {
  name: "AdminHomePage",
  components: {
    AdminHeader,
    AdminUsefulLinks,
    AdminContactInformation,
    AdminPrices,
    AdminWorkers,
    AdminAboutUs
  }
};
</script>

<style scoped></style>
