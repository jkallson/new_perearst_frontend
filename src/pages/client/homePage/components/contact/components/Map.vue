<template>
  <iframe
    class="md-card"
    :src="location"
    style="border:0; min-height: 400px; margin-top: 15px; width: 100%"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      location: "https://bit.ly/2Nk6lJq"
    };
  }
};
</script>

<style scoped></style>
