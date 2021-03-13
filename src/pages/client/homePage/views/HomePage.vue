<template>
  <fragment>
    <Header></Header>
    <section id="aboutUs" class="grey lighten-3">
      <AboutUs></AboutUs>
    </section>
    <section id="workers">
      <Workers></Workers>
    </section>
  </fragment>
</template>

<script>
import Header from "@/components/Header";
import AboutUs from "@/pages/client/homePage/components/AboutUs";
import Workers from "@/pages/client/homePage/components/Workers";
export default {
  name: "HomePage",
  components: { Workers, AboutUs, Header }
};
</script>

<style scoped></style>
