<template>
  <div class="d-flex fill-height" style="flex-direction: column">
    <Header></Header>
    <v-container fluid class="grey lighten-3">
      <SectionName name="Kodukorrast ning kasulikud lingid"></SectionName>
      <v-row>
        <v-col cols="12" sm="9">
          <v-card height="100%">
            <BasicToolbar name="Kodukorrast"></BasicToolbar>
            <v-tabs vertical class="hidden-xs-only">
              <v-tab
                class="tab"
                v-for="(regulation, i) in regulations"
                :key="i"
              >
                {{ regulation.name }}
              </v-tab>
              <v-tab-item v-for="(regulation, i) in regulations" :key="i">
                <v-card flat>
                  <v-card-text v-html="regulation.content"></v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
            <BasicExpansionPanels class="hidden-sm-and-up" :items="regulations">
            </BasicExpansionPanels>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <Links :links="links"></Links>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="fill-height grey lighten-3"></v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import BasicToolbar from "@/components/BasicToolbar";
import SectionName from "@/components/SectionName";
import Footer from "@/components/Footer";
import { RepositoryFactory } from "@/repository/repositoryFactory";
import BasicExpansionPanels from "@/components/BasicExpansionPanels";
import Links from "@/pages/client/homePage/components/links/Links";
const RegulationsRepository = RepositoryFactory.get("regulations");

export default {
  name: "RegulationsTab",
  components: {
    Links,
    BasicExpansionPanels,
    Footer,
    SectionName,
    BasicToolbar,
    Header
  },
  data() {
    return {
      regulations: [],
      links: []
    };
  },
  async created() {
    const response = await RegulationsRepository.getRegulations();
    this.regulations = response.data.data.regulations;
    this.links = response.data.data.links;
  }
};
</script>

<style scoped>
.tab {
  white-space: normal;
}
</style>
