<template>
  <iframe
    title="Ahja perearstikabineti asukoht"
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
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2102.0474391937187!2d27.06770051645334!3d58.20693500754088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb27a362e1e81f%3A0x8cada32264679d79!2sIllimari%206%2C%20Ahja%2C%2063710%20P%C3%B5lva%20maakond!5e0!3m2!1set!2see!4v1634999794757!5m2!1set!2see"
    };
  }
};
</script>

<style scoped></style>
