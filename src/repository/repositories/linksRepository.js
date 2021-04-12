import Repository from "../repository";

export default {
  async createLink(linkInput) {
    const query = `mutation {
                createLink(linkInput: {link: "${linkInput.link}", name: "${linkInput.name}", orderIndex: ${linkInput.orderIndex}}) {
                    _id
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
  async updateLinkOrder(linkInput) {
    const query = `mutation updateLinkOrder($linkInput: [LinkInput!]!) {
                    updateLinkOrder(linkInput: $linkInput) {
                        name
                        link
                        orderIndex
                    }
                }`;
    const variables = {
      linkInput
    };
    return await this.createRequest(query, variables);
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
      console.log(error);
    }
  }
};
