<template>
  <v-card>
    <WorkersTable :workers="workers"></WorkersTable>
  </v-card>
</template>

<script>
import WorkersTable from "@/pages/admin/mainPage/components/workers/components/WorkersTable";
export default {
  name: "AdminWorkers",
  components: { WorkersTable },
  props: {
    workers: Array
  }
};
</script>

<style scoped></style>
