<template>
  <v-container fluid class="text-center pb-10">
    <SectionName name="MEIST"></SectionName>
    <v-card width="100%">
      <v-card-text>
        <p class="text--primary" v-html="text"></p>
      </v-card-text>
      <v-row class="px-5">
        <v-col cols="12" md="6">
          <v-card>
            <v-img max-height="500" src="@/assets/uus_avaleht_1.jpeg"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-img max-height="500" src="@/assets/uus_avaleht_2.jpeg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SectionName from "@/components/SectionName";
export default {
  name: "AboutUs",
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  components: { SectionName }
};
</script>

<style scoped></style>
