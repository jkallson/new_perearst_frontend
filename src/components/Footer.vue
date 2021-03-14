<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-col class="py-2 text-center white--text" cols="12">
        <v-row no-gutters class="pt-0">
          <v-col cols="4">
            <h2 class="font-weight-bold">Aadress</h2>
            <h5>Nooruse 2-1, Ahja, Põlva vald</h5>
          </v-col>
          <v-col cols="4">
            <h2 class="font-weight-bold">Telefon</h2>
            <h5>12345678</h5>
          </v-col>
          <v-col cols="4">
            <h2 class="font-weight-bold">Email</h2>
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
