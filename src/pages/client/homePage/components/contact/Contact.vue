<template>
  <v-container fluid class="text-center pb-10">
    <SectionName name="VÕTKE ÜHENDUST"></SectionName>
    <Map></Map>
    <v-row class="px-5">
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <ContactInformation
          :contact-information="contactInformation"
        ></ContactInformation>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <EmailForm></EmailForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from "@/pages/client/homePage/components/contact/components/Map";
import ContactInformation from "@/pages/client/homePage/components/contact/components/ContactInformation";
import EmailForm from "@/pages/client/homePage/components/contact/components/EmailForm";
import SectionName from "@/components/SectionName";
export default {
  name: "Contact",
  components: { SectionName, EmailForm, ContactInformation, Map },
  props: {
    contactInformation: {
      type: Object,
      default() {
        return {
          address: "",
          phone: "",
          email: ""
        };
      }
    }
  }
};
</script>

<style scoped></style>
