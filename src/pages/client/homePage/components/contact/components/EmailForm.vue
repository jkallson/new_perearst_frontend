<template>
  <v-form>
    <v-row class="pt-2">
      <v-col cols="12" md="6">
        <v-text-field
          filled
          v-model="fullName"
          label="Nimi"
          outlined
          required
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          filled
          v-model="email"
          label="Email"
          outlined
          required
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          filled
          v-model="subject"
          label="Teema"
          outlined
          required
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          outlined
          :value="emailText"
          auto-grow
          label="Küsimus"
          rows="4"
          row-height="30"
          hide-details
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" class="pt-0 pb-0">
        <v-btn color="primary">SAADA</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "EmailForm",
  data() {
    return {
      fullName: "",
      email: "",
      subject: "",
      emailText: ""
    };
  }
};
</script>

<style scoped></style>
