<template>
  <v-container fluid class="text-center pb-10">
    <h2 class="display-2 font-weight-bold mb-3">MEIST</h2>

    <v-responsive class="mx-auto mb-4" width="56">
      <v-divider style="border: 3px solid #F09F54"></v-divider>

      <v-divider></v-divider>
    </v-responsive>
    <Map></Map>
    <v-row class="px-5">
      <v-col cols="6" lg="6" md="6" sm="12" xs="12">
        <ContactInformation></ContactInformation>
      </v-col>
      <v-col cols="6" lg="6" md="6" sm="12" xs="12">
        <EmailForm></EmailForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from "@/pages/client/homePage/components/contact/components/Map";
import ContactInformation from "@/pages/client/homePage/components/contact/components/ContactInformation";
import EmailForm from "@/pages/client/homePage/components/contact/components/EmailForm";
export default {
  name: "Contact",
  components: { EmailForm, ContactInformation, Map }
};
</script>

<style scoped></style>
