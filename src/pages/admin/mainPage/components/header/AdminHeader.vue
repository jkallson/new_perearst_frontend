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
  </fragment>
</template>

<script>
import StandardHeaderLinks from "@/components/header/StandardHeaderLinks";
import MobileHeaderLinks from "@/components/header/MobileHeaderLinks";
import { store } from "@/store";
export default {
  name: "AdminHeader",
  components: { StandardHeaderLinks, MobileHeaderLinks },
  data() {
    return {
      showMenu: false,
      links: [
        {
          icon: "mdi-logout",
          text: "Logi välja",
          route: "logout"
        }
      ]
    };
  },
  methods: {
    redirectUser(link) {
      if (link === "logout") {
        this.logout();
      }
      this.$router
        .push("/")
        .then(() => setTimeout(() => this.$vuetify.goTo(0), 1));
      this.showMenu = false;
    },
    logout() {
      localStorage.removeItem("token");
      store.commit("validLogin");
      window.location = "/";
    }
  }
};
</script>

<style scoped></style>
