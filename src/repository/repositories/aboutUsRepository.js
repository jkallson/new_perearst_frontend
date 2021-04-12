import Repository from "@/repository/repository";
import Vue from "vue";

export default {
  async updateAboutUsText(id, text) {
    const aboutUsTextInput = {
      _id: id,
      text: text
    };
    const query = `
                  mutation updateAboutUsText($aboutUsTextInput: AboutUsTextInput!) {
                      updateAboutUsText(aboutUsTextInput: $aboutUsTextInput) {
                          text
                      }
                  }
                `;
    const variables = {
      aboutUsTextInput
    };
    return await this.createRequest(query, variables);
  },

  async createRequest(query, variables) {
    try {
      return await Repository.post(
        null,
        {
          query: query,
          variables: variables
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      );
    } catch (error) {
      Vue.notify({
        type: "error",
        title: "Midagi läks valesti",
        text: error
      });
    }
  }
};
