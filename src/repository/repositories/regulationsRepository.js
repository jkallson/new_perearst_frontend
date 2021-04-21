import Repository from "../repository";
import Vue from "vue";

export default {
  async getRegulations() {
    const query = `{
                 regulations {
                      _id
                      name
                      content
                 }
                 links {
                      _id
                      name
                      link
                 }
            }`;
    return await this.createRequest(query);
  },
  async createRegulation(regulationsInput) {
    const query = ` mutation createRegulation($regulationsInput: RegulationsInput!) {
                        createRegulation(regulationsInput: $regulationsInput) {
                            _id
                            name
                            content
                        }
                    }`;
    const variables = {
      regulationsInput
    };
    return await this.createRequest(query, variables);
  },
  async updateRegulation(regulationsInput) {
    const query = ` mutation updateRegulation($regulationsInput: RegulationsInput!) {
                        updateRegulation(regulationsInput: $regulationsInput) {
                            _id
                            name
                            content
                        }
                    }`;
    const variables = {
      regulationsInput
    };
    return await this.createRequest(query, variables);
  },
  async deleteRegulation(id) {
    const query = `mutation {
                deleteRegulation(regulationID: "${id}") {
                    name
                    content
                }
            }
                `;
    return await this.createRequest(query);
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
