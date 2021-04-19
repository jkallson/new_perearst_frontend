import Repository from "@/repository/repository";
import Vue from "vue";

export default {
  async sendEmail(emailForm) {
    const query = `
                  mutation sendEmail($emailForm: EmailForm!) {
                      sendEmail(emailForm: $emailForm) {
                          response
                      }
                  }
                `;
    const variables = {
      emailForm
    };
    return await this.createRequest(query, variables);
  },

  async createRequest(query, variables) {
    try {
      return await Repository.post(null, {
        query: query,
        variables: variables
      });
    } catch (error) {
      Vue.notify({
        type: "error",
        title: "Midagi läks valesti",
        text: error
      });
    }
  }
};
