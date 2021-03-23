<template>
  <v-container fluid fill-height class="background">
    <Header :show-below-header="false"></Header>
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
                <v-btn color="primary">LOGI SISSE</v-btn>
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
import Header from "@/components/header/Header";
export default {
  name: "LoginForm",
  components: { Header },
  data() {
    return {
      username: "",
      password: "",
      showPassword: false
    };
  }
};
</script>

<style scoped></style>
