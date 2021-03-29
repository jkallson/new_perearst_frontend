<template>
  <v-card class="text-center">
    <v-avatar size="175" class="mt-2" rounded>
      <v-img src="https://bit.ly/2Nl2ufe"></v-img>
    </v-avatar>
    <v-card-text>
      <h2 class="font-weight-bold">{{ worker.name }}</h2>
      <div>{{ worker.position }}</div>
    </v-card-text>
    <WorkerInfoButton
      name="Vastuvõtu ajad"
      type="reception"
      :days-with-times="worker.receptionTimes"
    ></WorkerInfoButton>
    <WorkerInfoButton
      name="Telefoni ajad"
      type="telefon"
      :days-with-times="worker.mobileTimes"
    ></WorkerInfoButton>
  </v-card>
</template>

<script>
import WorkerInfoButton from "@/pages/client/homePage/components/workers/components/WorkerInfoButton";
export default {
  name: "WorkerTemplate",
  components: { WorkerInfoButton },
  props: {
    worker: Object
  }
};
</script>

<style scoped></style>
