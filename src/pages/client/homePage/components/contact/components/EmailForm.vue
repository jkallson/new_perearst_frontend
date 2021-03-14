<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          filled
          v-model="firstName"
          label="Nimi"
          outlined
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          filled
          v-model="firstName"
          label="Email"
          outlined
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field
          filled
          v-model="firstName"
          label="Teema"
          outlined
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-textarea
          filled
          outlined
          :value="emailText"
          auto-grow
          label="Küsimus"
          rows="4"
          row-height="30"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row align="center" no-gutters>
      <v-col cols="12">
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
      firstName: "",
      emailText: ""
    };
  }
};
</script>

<style scoped></style>
