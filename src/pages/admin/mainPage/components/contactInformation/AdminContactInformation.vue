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
            v-model="address"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            hide-details
            outlined
            label="Telefon"
            v-model="phone"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            hide-details
            outlined
            label="Email"
            v-model="email"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AdminContactInformation",
  data() {
    return {
      address: "Nooruse 2-1, Ahja, Põlva vald",
      phone: "12345678",
      email: "email@email.com"
    };
  },
  methods: {
    saveContactDetails() {
      console.log("contact details saved!");
    }
  }
};
</script>

<style scoped>
.toolbarCorners {
  border-radius: 4px 4px 0 0;
}
</style>
