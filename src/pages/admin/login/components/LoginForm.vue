<template>
  <v-container fluid fill-height class="background">
    <v-row no-gutters>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-card class="pa-5">
          <v-card-title class="justify-center primary--text">
            ADMINISTREERIMISLIIDES
          </v-card-title>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="username"
                label="Kasutajanimi"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Parool"
                @click:append="showPassword = !showPassword"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="pt-0">
            <v-col cols="12">
              <div class="text-center">
                <v-btn color="primary" @click="login">LOGI SISSE</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import { store } from "@/store";
import { RepositoryFactory } from "@/repository/repositoryFactory";
const AuthRepository = RepositoryFactory.get("auth");

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false
    };
  },
  methods: {
    async login() {
      const response = await AuthRepository.login(this.username, this.password);
      this.checkLogin(response);
    },
    checkLogin(response) {
      if (response && response.status === 200 && response.statusText === "OK") {
        localStorage.token = response.data.data.login.token;
        store.commit("validLogin");
        this.notify("success", "Korras", "Edukalt sisse logitud!");
        this.$router.push("/admin/avaleht");
      }
    },
    notify(type, title, text) {
      this.$notify({
        type: type,
        title: title,
        text: text
      });
    }
  }
};
</script>

<style scoped></style>
