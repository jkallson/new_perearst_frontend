<template>
  <v-card>
    <v-toolbar dense color="primary" dark flat>
      <v-toolbar-title>MEIST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" v-on="on" @click="saveText">
            <v-icon>mdi-content-save-outline</v-icon>
          </v-btn>
        </template>
        <span>Salvesta tekst</span>
      </v-tooltip>
    </v-toolbar>
    <VueEditor v-model="aboutUsText"></VueEditor>
  </v-card>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { RepositoryFactory } from "@/repository/repositoryFactory";
const AboutUsRepository = RepositoryFactory.get("aboutUs");
export default {
  name: "AdminAboutUs",
  components: { VueEditor },
  props: {
    aboutUs: Object,
    default() {
      return {
        _id: "",
        text: ""
      };
    }
  },
  data() {
    return {
      aboutUsText: ""
    };
  },
  watch: {
    aboutUs: function(newVal) {
      this.aboutUsText = newVal.text;
    }
  },
  methods: {
    saveText() {
      AboutUsRepository.updateAboutUsText(this.aboutUs._id, this.aboutUsText);
    }
  }
};
</script>

<style scoped></style>
