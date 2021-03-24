<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-col class="py-2 text-center white--text" cols="12">
        <v-row class="pt-0">
          <v-col cols="12" sm="4">
            <v-icon color="white">mdi-home</v-icon>
            <h5>Nooruse 2-1, Ahja, Põlva vald</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <v-icon color="white">mdi-phone</v-icon>
            <h5>12345678</h5>
          </v-col>
          <v-col cols="12" sm="4">
            <v-icon color="white">mdi-at</v-icon>
            <h5>email@email.com</h5>
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
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>

<style scoped></style>
