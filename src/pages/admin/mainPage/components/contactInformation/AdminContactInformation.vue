<template>
  <v-card>
    <v-toolbar class="toolbarCorners" dense color="primary" dark flat>
      <v-toolbar-title>KONTAKTANDMED</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            large
            v-bind="attrs"
            v-on="on"
            @click="saveContactDetails"
          >
            <v-icon>mdi-content-save-outline</v-icon>
          </v-btn>
        </template>
        <span>Salvesta informatsioon</span>
      </v-tooltip>
    </v-toolbar>
    <v-card-actions>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            hide-details
            outlined
            label="Aadress"
            v-model="contactInformation.address"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            hide-details
            outlined
            label="Telefon"
            v-model="contactInformation.phone"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            hide-details
            outlined
            label="Email"
            v-model="contactInformation.email"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { RepositoryFactory } from "@/repository/repositoryFactory";
const ContactInformationRepository = RepositoryFactory.get(
  "contactInformation"
);
export default {
  name: "AdminContactInformation",
  props: {
    contactInformation: {
      type: Object,
      default() {
        return {
          _id: "",
          address: "",
          phone: "",
          email: ""
        };
      }
    }
  },
  methods: {
    async saveContactDetails() {
      const response = await ContactInformationRepository.updateContactInformation(
        this.contactInformation
      );

      if (response && response.status === 200 && response.statusText === "OK") {
        this.$notify({
          type: "success",
          title: "Korras",
          text: "Kontaktandmete uuendamine õnnestus!"
        });
      }
    }
  }
};
</script>

<style scoped>
.toolbarCorners {
  border-radius: 4px 4px 0 0;
}
</style>
