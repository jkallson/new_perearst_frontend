<template>
  <fragment>
    <Header></Header>
    <v-container fluid class="grey lighten-3">
      <SectionName name="Teadaanded"></SectionName>
      <v-card>
        <v-container>
          <h3 class="text-center pt-4 mb-4">
            Siit leiate viimased teadaanded Ahja perearstikabineti poolt!
          </h3>
          <BasicToolbar></BasicToolbar>
          <v-expansion-panels accordion focusable>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header>
                {{ item.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-card>
    </v-container>
  </fragment>
</template>

<script>
import Header from "@/components/header/Header";
import SectionName from "@/components/SectionName";
import BasicToolbar from "@/components/BasicToolbar";
export default {
  name: "NotificationPanel",
  components: { BasicToolbar, SectionName, Header },
  data() {
    return {
      items: [
        { name: "Uudis 1", content: "qwe" },
        { name: "Uudis 2", content: "qwe" },
        { name: "Uudis 3", content: "qwe" },
        { name: "Uudis 4", content: "qwe" },
        { name: "Uudis 5", content: "qwe" },
        { name: "Uudis 6", content: "qwe" },
        { name: "Uudis 7", content: "qwe" },
        { name: "Uudis 8", content: "qwe" },
        { name: "Uudis 9", content: "qwe" }
      ]
    };
  }
};
</script>

<style scoped></style>
