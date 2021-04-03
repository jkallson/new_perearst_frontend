<template>
  <fragment>
    <Header></Header>
    <section id="aboutUs" class="grey lighten-3">
      <AboutUs :text="homePageData.aboutUsText"></AboutUs>
    </section>
    <section id="workers">
      <Workers :workers="homePageData.workers"></Workers>
    </section>
    <section id="prices" class="grey lighten-3">
      <Prices :prices="homePageData.prices"></Prices>
    </section>
    <section id="contact">
      <Contact :contact-information="homePageData.contactInformation"></Contact>
    </section>
    <section id="footer">
      <Footer></Footer>
    </section>
  </fragment>
</template>

<script>
import Header from "@/components/header/Header";
import AboutUs from "@/pages/client/homePage/components/aboutUs/AboutUs";
import Workers from "@/pages/client/homePage/components/workers/Workers";
import Prices from "@/pages/client/homePage/components/prices/Prices";
import Contact from "@/pages/client/homePage/components/contact/Contact";
import Footer from "@/components/Footer";
import { store } from "@/store";
import { RepositoryFactory } from "@/repository/repositoryFactory";
const HomePageRepository = RepositoryFactory.get("homePage");

export default {
  name: "HomePage",
  components: { Footer, Contact, Prices, Workers, AboutUs, Header },
  data() {
    return {
      requestResult: [],
      homePageData: {}
    };
  },
  async mounted() {
    this.requestResult = await HomePageRepository.getAllInformation();
    this.homePageData = transform(this.requestResult);
    setFooterData(this.homePageData.contactInformation);
  }
};
function transform(requestResult) {
  const requestData = requestResult.data.data;
  return {
    aboutUsText: requestData.aboutUs.text,
    contactInformation: requestData.contactInformation,
    workers: requestData.workers,
    prices: requestData.prices,
    links: requestData.links
  };
}

function setFooterData(contactInformation) {
  store.commit("setContactInformation", {
    address: contactInformation.address,
    phone: contactInformation.phone,
    email: contactInformation.email
  });
}
</script>

<style scoped></style>
