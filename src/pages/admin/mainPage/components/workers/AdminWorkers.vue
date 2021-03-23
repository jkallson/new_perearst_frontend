<template>
  <v-card>
    <WorkersTable></WorkersTable>
  </v-card>
</template>

<script>
import WorkersTable from "@/pages/admin/mainPage/components/workers/components/WorkersTable";
export default {
  name: "AdminWorkers",
  components: { WorkersTable }
};
</script>

<style scoped></style>
