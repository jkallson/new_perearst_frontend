<template>
  <v-container class="text-center">
    <v-row align="end" align-lg="center">
      <v-col cols="12" sm="6" order-sm="2">
        <v-img contain max-height="350" src="https://bit.ly/30C4nHi"> </v-img>
      </v-col>
      <v-col cols="12" sm="6" order-sm="1">
        <h1 class="text-lg-h2">Dr. Diana Kirss OÜ</h1>
        <v-row no-gutters>
          <v-col cols="12">
            <v-btn
              color="primary"
              style="width: 295px"
              class="white--text"
              to="/kodukord"
            >
              KODUKORRAST
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="pt-2">
          <v-col cols="12">
            <v-btn
              color="primary"
              outlined
              style="width: 295px"
              to="/teadaanded"
              >TEADAANDED</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BelowHeader"
};
</script>

<style scoped></style>
