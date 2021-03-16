<template>
  <fragment>
    <Header></Header>
    <v-container fluid class="grey lighten-3">
      <SectionName name="Kodukorrast"></SectionName>
      <v-card>
        <BasicToolbar></BasicToolbar>
        <v-tabs vertical class="hidden-xs-only">
          <v-tab class="tab" v-for="(item, i) in items" :key="i">
            {{ item.name }}
          </v-tab>
          <v-tab-item v-for="(item, i) in items" :key="i">
            <v-card flat>
              <v-card-text>
                {{ item.content }}
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
        <v-expansion-panels focusable class="hidden-sm-and-up">
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-container>
  </fragment>
</template>

<script>
import Header from "@/components/Header";
import BasicToolbar from "@/components/BasicToolbar";
import SectionName from "@/components/SectionName";

export default {
  name: "RegulationsTab",
  components: { SectionName, BasicToolbar, Header },
  data() {
    return {
      items: [
        { name: "Vastuvõtule registreerimisest", content: "qwe" },
        { name: "Retseptide tellimisest", content: "qwe" },
        { name: "Töövõimetus- ja hoolduslehtedest", content: "qwe" },
        { name: "Telefoniajad", content: "qwe" },
        { name: "Analüüside võtmine", content: "qwe" },
        { name: "Nimistusse registreerimine", content: "qwe" },
        { name: "Juhilubade taotlemisest", content: "qwe" },
        { name: "Väljaspool perearsti tööaega saate pöörduda", content: "qwe" },
        { name: "Muud kontaktnumbrid", content: "qwe" }
      ]
    };
  }
};
</script>

<style scoped>
.tab {
  white-space: normal;
}
</style>
