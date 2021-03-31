import Repository from "../repository";

export default {
  async createLink(linkInput) {
    const query = `mutation {
                createLink(linkInput: {link: "${linkInput.link}", name: "${linkInput.name}", orderIndex: ${linkInput.orderIndex}}) {
                    link
                    name
                    orderIndex
                }
            }
                `;
    return await this.createRequest(query);
  },
  async updateLink(linkInput) {
    const query = `mutation {
                updateLink(linkInput: {_id: "${linkInput._id}", link: "${linkInput.link}", name: "${linkInput.name}", orderIndex: ${linkInput.orderIndex}}) {
                    name
                    link
                    orderIndex
                }
            }
                `;
    return await this.createRequest(query);
  },
  async deleteLink(id) {
    const query = `mutation {
                deleteLink(linkID: "${id}") {
                    link
                    name
                    orderIndex
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
