<template>
  <v-card class="text-center">
    <v-avatar size="175" class="mt-2" rounded>
      <v-img src="https://bit.ly/2Nl2ufe"></v-img>
    </v-avatar>
    <v-card-text>
      <h2 class="font-weight-bold">Töötaja Tööline</h2>
      <div>Perearst</div>
    </v-card-text>
    <WorkerInfoButton name="Vastuvõtu ajad" type="reception"></WorkerInfoButton>
    <WorkerInfoButton name="Telefoni ajad" type="telefon"></WorkerInfoButton>
  </v-card>
</template>

<script>
import WorkerInfoButton from "@/pages/client/homePage/components/WorkerInfoButton";
export default {
  name: "WorkerTemplate",
  components: { WorkerInfoButton }
};
</script>

<style scoped></style>
