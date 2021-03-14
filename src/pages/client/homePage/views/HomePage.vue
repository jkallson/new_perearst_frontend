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
    <section id="contact">
      <Contact></Contact>
    </section>
    <section id="footer">
      <Footer></Footer>
    </section>
  </fragment>
</template>

<script>
import Header from "@/components/Header";
import AboutUs from "@/pages/client/homePage/components/aboutUs/AboutUs";
import Workers from "@/pages/client/homePage/components/workers/Workers";
import Prices from "@/pages/client/homePage/components/prices/Prices";
import Contact from "@/pages/client/homePage/components/contact/Contact";
import Footer from "@/components/Footer";
export default {
  name: "HomePage",
  components: { Footer, Contact, Prices, Workers, AboutUs, Header }
};
</script>

<style scoped></style>
