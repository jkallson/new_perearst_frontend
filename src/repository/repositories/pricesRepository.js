import Repository from "../repository";

export default {
  async createPrice(priceInput) {
    const query = `mutation {
                createPrice(priceInput: {name: "${priceInput.name}", price: "${priceInput.price}", class: "${priceInput.class}"}) {
                    name
                    price
                    class
                }
            }
                `;
    return await this.createRequest(query);
  },
  async updatePrice(priceInput) {
    const query = `mutation {
                updatePrice(priceInput: {_id: "${priceInput._id}", name: "${priceInput.name}", price: "${priceInput.price}", class: "${priceInput.class}"}) {
                    name
                    price
                    class
                }
            }
                `;
    return await this.createRequest(query);
  },

  async deletePrice(id) {
    const query = `mutation {
                removePrice(priceID: "${id}") {
                    name
                    price
                    class
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
