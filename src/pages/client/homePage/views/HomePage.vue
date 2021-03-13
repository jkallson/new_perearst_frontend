<template>
  <fragment>
    <Header></Header>
    <section id="aboutUs" class="grey lighten-3">
      <AboutUs></AboutUs>
    </section>
    <section id="workers">
      <Workers></Workers>
    </section>
    <section id="prices" class="grey lighten-3">
      <Prices></Prices>
    </section>
  </fragment>
</template>

<script>
import Header from "@/components/Header";
import AboutUs from "@/pages/client/homePage/components/AboutUs";
import Workers from "@/pages/client/homePage/components/Workers";
import Prices from "@/pages/client/homePage/components/Prices";
export default {
  name: "HomePage",
  components: { Prices, Workers, AboutUs, Header }
};
</script>

<style scoped></style>
