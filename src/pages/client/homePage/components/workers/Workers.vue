<template>
  <fragment>
    <v-container fluid class="text-center pb-0">
      <SectionName name="TÖÖTAJAD"></SectionName>
    </v-container>
    <v-container fluid class="grey px-0 pb-6">
      <v-row class="px-3" justify="center">
        <v-col v-for="worker in workers" :key="worker.name" cols="12" md="3">
          <WorkerTemplate :worker="worker"></WorkerTemplate>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import WorkerTemplate from "@/pages/client/homePage/components/workers/components/WorkerTemplate";
import SectionName from "@/components/SectionName";
export default {
  name: "Workers",
  components: { SectionName, WorkerTemplate },
  props: {
    workers: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
