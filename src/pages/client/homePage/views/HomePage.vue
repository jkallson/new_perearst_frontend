<template>
  <fragment>
    <Header></Header>
    <section id="meist" class="grey lighten-3">
      <AboutUs></AboutUs>
    </section>
  </fragment>
</template>

<script>
import Header from "@/components/Header";
import AboutUs from "@/pages/client/homePage/components/AboutUs";
export default {
  name: "HomePage",
  components: { AboutUs, Header }
};
</script>

<style scoped></style>
