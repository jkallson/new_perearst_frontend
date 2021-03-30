<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-col class="py-2 text-center white--text" cols="12">
        <v-row class="pt-0">
          <v-col cols="12" sm="4">
            <v-icon color="white">mdi-home</v-icon>
            <h5>{{ address }}</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <v-icon color="white">mdi-phone</v-icon>
            <h5>{{ phone }}</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <v-icon color="white">mdi-at</v-icon>
            <h5>{{ email }}</h5>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="py-2 text-center white--text" cols="12">
        <strong>Dr. Diana Kirss OÜ {{ new Date().getFullYear() }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      address: "",
      email: "",
      phone: ""
    };
  },
  created() {
    const contactInformation = JSON.parse(localStorage.getItem("vuex"));
    this.address = contactInformation.address;
    this.phone = contactInformation.phone;
    this.email = contactInformation.email;
  }
};
</script>

<style scoped></style>
