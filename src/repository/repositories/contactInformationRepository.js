import Repository from "@/repository/repository";
import Vue from "vue";

export default {
  async updateContactInformation(contactInformation) {
    const query = `mutation{
                updateContactInformation(contactInformationInput: {_id: "${contactInformation._id}", address: "${contactInformation.address}", phone: "${contactInformation.phone}", email: "${contactInformation.email}"}) {
                    address
                    phone
                    email
                }
            }
                `;
    return await this.createRequest(query);
  },

  async createRequest(query) {
    try {
      return await Repository.post(
        null,
        {
          query: query
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
