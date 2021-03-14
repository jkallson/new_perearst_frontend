<template>
  <fragment>
    <v-container fluid class="text-center pb-0">
      <h2 class="display-2 font-weight-bold mb-3">TÖÖTAJAD</h2>
      <v-responsive class="mx-auto mb-4" width="56">
        <v-divider style="border: 3px solid #F09F54"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
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
export default {
  name: "Workers",
  components: { WorkerTemplate }
};
</script>

<style scoped></style>
