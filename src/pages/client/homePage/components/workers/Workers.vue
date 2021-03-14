<template>
  <fragment>
    <v-container fluid class="text-center pb-0">
      <SectionName name="TÖÖTAJAD"></SectionName>
    </v-container>
    <v-container fluid class="grey px-0 pb-6">
      <v-row class="px-3">
        <v-col cols="3">
          <WorkerTemplate></WorkerTemplate>
        </v-col>
        <v-col cols="3">
          <WorkerTemplate></WorkerTemplate>
        </v-col>
        <v-col cols="3">
          <WorkerTemplate></WorkerTemplate>
        </v-col>
        <v-col cols="3">
          <WorkerTemplate></WorkerTemplate>
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
  components: { SectionName, WorkerTemplate }
};
</script>

<style scoped></style>
