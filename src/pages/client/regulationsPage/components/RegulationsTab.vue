<template>
  <div class="d-flex fill-height" style="flex-direction: column">
    <Header></Header>
    <v-container fluid class="grey lighten-3">
      <SectionName name="Kodukorrast"></SectionName>
      <v-card>
        <BasicToolbar></BasicToolbar>
        <v-tabs vertical class="hidden-xs-only">
          <v-tab class="tab" v-for="(regulation, i) in regulations" :key="i">
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
const RegulationsRepository = RepositoryFactory.get("regulations");

export default {
  name: "RegulationsTab",
  components: {
    BasicExpansionPanels,
    Footer,
    SectionName,
    BasicToolbar,
    Header
  },
  data() {
    return {
      regulations: []
    };
  },
  async created() {
    const response = await RegulationsRepository.getRegulations();
    this.regulations = response.data.data.regulations;
  }
};
</script>

<style scoped>
.tab {
  white-space: normal;
}
</style>
