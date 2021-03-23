<template>
  <v-card>
    <BasicToolbar name="Meist"></BasicToolbar>
    <VueEditor v-model="text"></VueEditor>
  </v-card>
</template>

<script>
import BasicToolbar from "@/components/BasicToolbar";
import { VueEditor } from "vue2-editor";
export default {
  name: "AdminAboutUs",
  components: { BasicToolbar, VueEditor },
  data() {
    return {
      text:
        "Etiam eleifend rutrum diam non interdum. Fusce sed massa libero. Praesent pellentesque fermentum massa ut vulputate. Aenean facilisis nisi tellus, nec placerat magna aliquet ac. Curabitur elementum vestibulum consectetur. Sed tempus nulla in lectus imperdiet euismod. Nunc eget finibus leo. Mauris rhoncus tristique odio vel bibendum. Aliquam non tortor eu libero tempor tristique sit amet quis dui. Integer sollicitudin, tortor eget scelerisque tempor, mauris erat porttitor lectus, eget facilisis lorem lectus sed lectus. Integer viverra blandit sem, ac volutpat lacus faucibus vel. Fusce et consequat tortor. Quisque dictum elit non est porta, non facilisis nibh imperdiet. Quisque ornare dignissim tortor, in aliquet nisl facilisis luctus. Nunc sem lorem, pharetra non neque quis, eleifend vehicula nunc."
    };
  }
};
</script>

<style scoped></style>
