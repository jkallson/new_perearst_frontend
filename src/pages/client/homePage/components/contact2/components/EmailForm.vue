<template>
  <v-form ref="form" v-model="valid">
    <v-row class="pt-2">
      <v-col cols="12">
        <v-text-field
          filled
          v-model="email"
          label="Email"
          :rules="emailRules"
          outlined
          required
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          filled
          v-model="subject"
          label="Teema"
          :rules="rules"
          outlined
          required
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          outlined
          v-model="emailText"
          :rules="rules"
          auto-grow
          label="Küsimus"
          rows="4"
          row-height="30"
          hide-details
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" class="pt-0 pb-0">
        <v-btn color="primary" @click="sendEmail" :disabled="!valid"
          >SAADA</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { RepositoryFactory } from "@/repository/repositoryFactory";
const EmailRepository = RepositoryFactory.get("email");
export default {
  name: "EmailForm",
  data() {
    return {
      valid: true,
      email: "",
      subject: "",
      emailText: "",
      emailRules: [
        v => !!v || "Email peab olema sisestatud!",
        v => /.+@.+\..+/.test(v) || "Emaili kuju on vale!"
      ],
      rules: [v => !!v || "Väli ei saa olla tühi!"]
    };
  },
  computed: {
    text() {
      return JSON.stringify(this.emailText)
        .replace(/(\\r)*\\n/g, "<br>")
        .replace(/"/g, "");
    }
  },
  methods: {
    async sendEmail() {
      const emailBody = {
        subject: this.subject,
        replyTo: this.email,
        text: this.text
      };
      const response = await EmailRepository.sendEmail(emailBody);

      if (response && response.status === 200 && response.statusText === "OK") {
        this.$notify({
          type: "success",
          title: "Korras",
          text: "Email saadetud!"
        });
      }
    }
  }
};
</script>

<style scoped></style>
