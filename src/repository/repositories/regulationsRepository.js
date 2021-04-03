import Repository from "../repository";

export default {
  async getRegulations() {
    const query = `{
                 regulations {
                      _id
                      name
                      content
                 }
            }`;
    return await this.createRequest(query);
  },
  async createRegulation(regulationsInput) {
    const query = `mutation {
                createRegulation(regulationsInput: {name: "${regulationsInput.name}", content: "${regulationsInput.content}"}) {
                    _id
                    name
                    content
                }
            }
                `;
    return await this.createRequest(query);
  },
  async updateRegulation(regulationsInput) {
    const query = `mutation {
                updateRegulation(regulationsInput: {_id: "${regulationsInput._id}", name: "${regulationsInput.name}", content: "${regulationsInput.content}"}) {
                    _id
                    name
                    content
                }
            }
                `;
    return await this.createRequest(query);
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
  async createRequest(query) {
    try {
      return await Repository.post(
        null,
        {
          query: query
        },
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
};
