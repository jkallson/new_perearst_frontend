<template>
  <v-container fluid class="text-center pb-10">
    <SectionName name="MEIST"></SectionName>
    <v-card width="100%">
      <v-card-text>
        <p class="text--primary">
          {{ text }}
        </p>
      </v-card-text>
      <v-row class="px-5">
        <v-col cols="12" md="3" v-for="n in 4" :key="n">
          <v-card>
            <v-img src="https://bit.ly/30C4nHi"></v-img>
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
