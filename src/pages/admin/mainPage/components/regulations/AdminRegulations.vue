<template>
  <EditTable
    label="KODUKORD"
    :items="regulations"
    @createEvent="createRegulation"
    @updateEvent="updateRegulation"
    @deleteEvent="deleteRegulation"
  ></EditTable>
</template>

<script>
import EditTable from "@/components/editTable/EditTable";
import { RepositoryFactory } from "@/repository/repositoryFactory";
const RegulationsRepository = RepositoryFactory.get("regulations");
export default {
  name: "AdminRegulations",
  components: { EditTable },
  props: {
    regulations: Array
  },
  methods: {
    async createRegulation(regulation) {
      const response = await RegulationsRepository.createRegulation(regulation);
      this.notify(response, "Kodukorra info edukalt lisatud!");
    },
    async updateRegulation(regulation) {
      const response = await RegulationsRepository.updateRegulation(regulation);
      this.notify(response, "Kodukorra info edukalt uuendatud!");
    },
    async deleteRegulation(regulation) {
      const response = await RegulationsRepository.deleteRegulation(regulation);
      this.notify(response, "Kodukorra info edukalt kustutatud!");
    },
    notify(response, text) {
      if (response && response.status === 200 && response.statusText === "OK") {
        this.$notify({
          type: "success",
          title: "Korras",
          text: text
        });
      }
    }
  }
};
</script>

<style scoped></style>
