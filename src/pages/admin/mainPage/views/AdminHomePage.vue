<template>
  <v-container fill-height fluid>
    <v-row no-gutters>
      <v-col>
        <AdminAboutUs></AdminAboutUs>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
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
        <AdminContactInformation></AdminContactInformation>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-5">
      <v-col>
        <v-card>
          <BasicToolbar name="Kasulikud lingid"></BasicToolbar>
          <p>asd</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BasicToolbar from "@/components/BasicToolbar";
import AdminAboutUs from "@/pages/admin/mainPage/components/aboutUs/AdminAboutUs";
import AdminWorkers from "@/pages/admin/mainPage/components/workers/AdminWorkers";
import AdminPrices from "@/pages/admin/mainPage/components/prices/AdminPrices";
import AdminContactInformation from "@/pages/admin/mainPage/components/contactInformation/AdminContactInformation";
export default {
  name: "AdminHomePage",
  components: {
    AdminContactInformation,
    AdminPrices,
    AdminWorkers,
    AdminAboutUs,
    BasicToolbar
  }
};
</script>

<style scoped></style>
