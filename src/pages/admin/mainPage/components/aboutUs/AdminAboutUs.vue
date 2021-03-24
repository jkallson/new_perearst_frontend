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
    <VueEditor v-model="text"></VueEditor>
  </v-card>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "AdminAboutUs",
  components: { VueEditor },
  data() {
    return {
      text:
        "Etiam eleifend rutrum diam non interdum. Fusce sed massa libero. Praesent pellentesque fermentum massa ut vulputate. Aenean facilisis nisi tellus, nec placerat magna aliquet ac. Curabitur elementum vestibulum consectetur. Sed tempus nulla in lectus imperdiet euismod. Nunc eget finibus leo. Mauris rhoncus tristique odio vel bibendum. Aliquam non tortor eu libero tempor tristique sit amet quis dui. Integer sollicitudin, tortor eget scelerisque tempor, mauris erat porttitor lectus, eget facilisis lorem lectus sed lectus. Integer viverra blandit sem, ac volutpat lacus faucibus vel. Fusce et consequat tortor. Quisque dictum elit non est porta, non facilisis nibh imperdiet. Quisque ornare dignissim tortor, in aliquet nisl facilisis luctus. Nunc sem lorem, pharetra non neque quis, eleifend vehicula nunc."
    };
  },
  methods: {
    saveText() {
      console.log(this.text);
    }
  }
};
</script>

<style scoped></style>
