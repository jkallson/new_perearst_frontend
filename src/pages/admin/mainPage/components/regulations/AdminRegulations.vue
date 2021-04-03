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
    createRegulation(regulation) {
      RegulationsRepository.createRegulation(regulation);
    },
    updateRegulation(regulation) {
      RegulationsRepository.updateRegulation(regulation);
    },
    deleteRegulation(regulation) {
      RegulationsRepository.deleteRegulation(regulation);
    }
  }
};
</script>

<style scoped></style>
