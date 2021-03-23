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
    <Footer></Footer>
  </fragment>
</template>

<script>
import Header from "@/components/header/Header";
import BasicToolbar from "@/components/BasicToolbar";
import SectionName from "@/components/SectionName";
import Footer from "@/components/Footer";

export default {
  name: "RegulationsTab",
  components: { Footer, SectionName, BasicToolbar, Header },
  data() {
    return {
      items: [
        {
          name: "Vastuvõtule registreerimisest",
          content:
            "Sed massa justo, lacinia eu gravida ut, accumsan ut justo. Donec tincidunt massa non quam feugiat pellentesque. Curabitur congue blandit tincidunt. Donec eros nisl, sodales rutrum sem vitae, fringilla dictum lorem. Pellentesque semper mauris sit amet mauris elementum consectetur. Aenean tempor, purus non pellentesque gravida, quam ipsum commodo urna, in vestibulum libero neque quis lorem. Vestibulum in augue quis neque lobortis volutpat. Etiam molestie egestas massa in dapibus. Quisque dapibus et nulla vel egestas. Morbi purus orci, ullamcorper eu iaculis sit amet, pharetra et est. Donec ultricies ac magna eget posuere. In aliquam neque non dapibus hendrerit."
        },
        {
          name: "Retseptide tellimisest",
          content:
            "Sed massa justo, lacinia eu gravida ut, accumsan ut justo. Donec tincidunt massa non quam feugiat pellentesque. Curabitur congue blandit tincidunt. Donec eros nisl, sodales rutrum sem vitae, fringilla dictum lorem. Pellentesque semper mauris sit amet mauris elementum consectetur. Aenean tempor, purus non pellentesque gravida, quam ipsum commodo urna, in vestibulum libero neque quis lorem. Vestibulum in augue quis neque lobortis volutpat. Etiam molestie egestas massa in dapibus. Quisque dapibus et nulla vel egestas. Morbi purus orci, ullamcorper eu iaculis sit amet, pharetra et est. Donec ultricies ac magna eget posuere. In aliquam neque non dapibus hendrerit."
        },
        {
          name: "Töövõimetus- ja hoolduslehtedest",
          content:
            "Sed massa justo, lacinia eu gravida ut, accumsan ut justo. Donec tincidunt massa non quam feugiat pellentesque. Curabitur congue blandit tincidunt. Donec eros nisl, sodales rutrum sem vitae, fringilla dictum lorem. Pellentesque semper mauris sit amet mauris elementum consectetur. Aenean tempor, purus non pellentesque gravida, quam ipsum commodo urna, in vestibulum libero neque quis lorem. Vestibulum in augue quis neque lobortis volutpat. Etiam molestie egestas massa in dapibus. Quisque dapibus et nulla vel egestas. Morbi purus orci, ullamcorper eu iaculis sit amet, pharetra et est. Donec ultricies ac magna eget posuere. In aliquam neque non dapibus hendrerit."
        },
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
