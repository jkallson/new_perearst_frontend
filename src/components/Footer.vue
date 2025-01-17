<template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-col class="py-2 text-center white--text" cols="12">
        <v-row class="pt-0">
          <v-col cols="12" sm="6">
            <v-icon color="white">mdi-home</v-icon>
            <h5>Illimari 6, Ahja, Põlva vald 63710</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <v-icon color="white">mdi-phone</v-icon>
            <h5>
              <a
                style="color: white !important; text-decoration: none"
                href="tel:7921476"
                >7921476</a
              >
            </h5>
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
    return {};
  }
};
</script>

<style scoped></style>
