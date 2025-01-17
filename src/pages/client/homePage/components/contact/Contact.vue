<template>
  <v-container fluid class="text-center pb-4">
    <SectionName name="VÕTKE ÜHENDUST"></SectionName>
    <Map></Map>
    <v-row class="px-5 d-flex justify-center">
      <v-col cols="12" md="6" xl="4">
        <v-card flat outlined class="mt-3">
          <v-card-title
            >Meie kliinikuga saad nüüd suhelda Perearst24
            keskkonnas</v-card-title
          >
          <v-divider></v-divider>
          <div class="px-4 mt-3 text-justify">
            Selleks, et tõsta meie patsientide terviseandmete turvalisust,
            palume edaspidi tervisemure korral ühendust võtta meie
            <b>uues e-pöördumise keskkonnas aadressil </b>
            <a href="https://www.perearst24.ee" target="_blank"
              >www.perearst24.ee</a
            >
          </div>
          <div class="px-4 mt-3 text-justify">
            Pöördumise saad edastada <b>ööpäevaringselt</b>, kuid me tegeleme
            sellega ainult keskuse lahtiolekuaegadel. Jätkuvalt on võimalus ka
            meile helistada numbril <a href="tel:7921476">7921476</a>
          </div>
          <div class="text-left pl-4 mt-6">
            <b>Perearst24 platvormi kasutamine:</b>
          </div>
          <v-card-text class="pt-3">
            <v-stepper v-model="e6" vertical flat outlined>
              <v-stepper-step step="1">
                Mine veebiaadressile
                <a href="https://www.perearst24.ee" target="_blank"
                  >www.perearst24.ee</a
                >
              </v-stepper-step>
              <v-stepper-content class="py-2" step="1"></v-stepper-content>
              <v-stepper-step step="2">
                Logi sisse või loo endale kasutajakonto.<br />
                NB! Vajalik ID-kaardi, Mobiil-ID või Smart-ID olemasolu
              </v-stepper-step>
              <v-stepper-content class="py-2" step="2"> </v-stepper-content>
              <v-stepper-step step="3">
                Vali, kas soovid pöördumist teha <b>enda</b> või näiteks
                <b>pereliikme nimel</b>
              </v-stepper-step>
              <v-stepper-content class="py-2" step="3"></v-stepper-content>
              <v-stepper-step step="4">
                Vali loetelust enda põhiline tervisemure ja
                <b>vasta lühidalt täpsustavatele küsimustele</b>
              </v-stepper-step>
              <v-stepper-content class="py-2" step="4"></v-stepper-content>
              <v-stepper-step step="5">
                Lisa <b>pilt</b> või <b>fail</b>
              </v-stepper-step>
              <v-stepper-content class="py-2" step="5"></v-stepper-content>
              <v-stepper-step step="6">
                Saada e-pöördumine ja jää ootama meilt vastust
              </v-stepper-step>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from "@/pages/client/homePage/components/contact/components/Map";
import SectionName from "@/components/SectionName";
export default {
  name: "Contact2",
  components: { SectionName, Map },
  data() {
    return {
      e6: 1
    };
  }
};
</script>

<style scoped>
::v-deep .v-stepper__step--inactive .v-stepper__step__step {
  background-color: #f09f54 !important; /* Change to your active color */
  border-color: #f09f54 !important; /* Ensure the border also matches */
}

::v-deep .v-stepper__step--complete .v-stepper__step__step {
  background-color: #f09f54 !important; /* Keep completed steps the same color if desired */
}

/* Adjust the connecting lines if needed */
::v-deep .v-stepper__step:not(.v-stepper__step--active)::before,
::v-deep .v-stepper__step:not(.v-stepper__step--active)::after {
  background-color: #f09f54 !important; /* Line color to match the active steps */
}

::v-deep .v-stepper__step--inactive .v-stepper__label {
  text-shadow: 0 0 0 black;
  color: rgba(0, 0, 0, 0.38) !important; /* Same as the active color */
}
</style>
