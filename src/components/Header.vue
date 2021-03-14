<template>
  <fragment>
    <v-app-bar app color="white" fixed>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="$vuetify.goTo('#aboutUs')">
          <v-icon>mdi-information-outline</v-icon>
          Meist
        </v-btn>

        <v-btn text @click="$vuetify.goTo('#workers')">
          <v-icon>mdi-account-group</v-icon>
          Töötajad
        </v-btn>

        <v-btn text @click="$vuetify.goTo('#prices')">
          <v-icon>mdi-cash-multiple</v-icon>
          Hinnakiri
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')">
          <v-icon>mdi-email-outline</v-icon>
          Kontakt
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-container class="text-center">
      <v-row align="end">
        <v-col cols="6">
          <h1>Dr. Diana Kirss OÜ</h1>
          <v-row no-gutters>
            <v-col cols="12">
              <v-btn color="primary" style="width: 295px" class="white--text">
                KODUKORRAST
              </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters class="pt-2">
            <v-col cols="12">
              <v-btn color="primary" outlined style="width: 295px"
                >TEADAANDED</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-img contain src="https://bit.ly/30C4nHi"> </v-img>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
