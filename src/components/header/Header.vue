<template>
  <fragment>
    <v-app-bar app color="white" fixed>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.native.stop="showMenu = !showMenu"
      ></v-app-bar-nav-icon>
      <StandardHeaderLinks
        :links="links"
        @redirectUser="redirectUser"
      ></StandardHeaderLinks>
    </v-app-bar>
    <v-navigation-drawer fixed v-model="showMenu">
      <MobileHeaderLinks
        :links="links"
        @redirectUser="redirectUser"
      ></MobileHeaderLinks>
    </v-navigation-drawer>
    <BelowHeader v-if="showBelowHeader"></BelowHeader>
  </fragment>
</template>

<script>
import BelowHeader from "@/components/header/BelowHeader";
import StandardHeaderLinks from "@/components/header/StandardHeaderLinks";
import MobileHeaderLinks from "@/components/header/MobileHeaderLinks";
export default {
  name: "Header",
  components: { MobileHeaderLinks, StandardHeaderLinks, BelowHeader },
  props: {
    showBelowHeader: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      showMenu: false,
      links: [
        { icon: "mdi-information-outline", text: "Meist", route: "#aboutUs" },
        { icon: "mdi-account-group", text: "Töötajad", route: "#workers" },
        { icon: "mdi-cash-multiple", text: "Hinnad", route: "#prices" },
        { icon: "mdi-email-outline", text: "Võtke ühendust", route: "#contact" }
      ]
    };
  },
  methods: {
    redirectUser(scrollingPos) {
      if (this.$route.path === "/") {
        this.$vuetify.goTo(scrollingPos);
      } else {
        this.$router
          .push("/")
          .then(() => setTimeout(() => this.$vuetify.goTo(scrollingPos), 250));
      }
      this.showMenu = false;
    }
  }
};
</script>

<style scoped></style>
