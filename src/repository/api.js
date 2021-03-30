import axios from "axios";
export default {
  async getAllInformation() {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `{
                aboutUs {
                    _id
                    text
                }
                prices {
                    class
                    data {
                        _id
                        name
                        class
                        price
                }
              }
                contactInformation {
                    _id
                    address
                    phone
                    email
                }
                links {
                    _id
                    link
                    name
                    orderIndex
                }
                workers {
                    _id
                    name
                    position
                    imageUrl
                    receptionTimes {
                        day
                        time
                    }
                    mobileTimes {
                        day
                        time
                    }
                }
            }
                        `
        }
      });
    } catch (error) {
      console.error(error);
    }
  },
  async login(username, password) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `{
                login(username: "${username}", password: "${password}") {
                    token
                }
            }
                `
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async updateAboutUsText(id, text, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation{
                updateAboutUsText(aboutUsTextInput: {_id: "${id}", text: "${text}"}) {
                    text
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async updateContactInformation(contactInformation, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation{
                updateContactInformation(contactInformationInput: {_id: "${contactInformation._id}", address: "${contactInformation.address}", phone: "${contactInformation.phone}", email: "${contactInformation.email}"}) {
                    address
                    phone
                    email
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async updateWorker(workerInput, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation updateWorker($workerInput: WorkerInput!) {
                    updateWorker(workerInput: $workerInput) {
                        _id
                        name
                        position
                        mobileTimes {
                            day
                            time
                        }
                        receptionTimes {
                            day
                            time
                        }
                    }
                }
                `,
          variables: {
            workerInput
          }
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createWorker(workerInput, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation createWorker($workerInput: WorkerInput!) {
                    createWorker(workerInput: $workerInput) {
                        _id
                        name
                        position
                        mobileTimes {
                            day
                            time
                        }
                        receptionTimes {
                            day
                            time
                        }
                    }
                }
                `,
          variables: {
            workerInput
          }
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteWorker(id, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation {
                deleteWorker(workerID: "${id}") {
                    name
                    position
                    imageUrl
                    receptionTimes {
                        day
                        time
                    }
                    mobileTimes {
                        day
                        time
                    }
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createPrice(priceInput, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation {
                createPrice(priceInput: {name: "${priceInput.name}", price: "${priceInput.price}", class: "${priceInput.class}"}) {
                    name
                    price
                    class
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async updatePrice(priceInput, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation {
                updatePrice(priceInput: {_id: "${priceInput._id}", name: "${priceInput.name}", price: "${priceInput.price}", class: "${priceInput.class}"}) {
                    name
                    price
                    class
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deletePrice(id, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation {
                removePrice(priceID: "${id}") {
                    name
                    price
                    class
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async createLink(linkInput, token) {
    console.log(linkInput);
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation {
                createLink(linkInput: {link: "${linkInput.link}", name: "${linkInput.name}", orderIndex: ${linkInput.orderIndex}}) {
                    link
                    name
                    orderIndex
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async updateLink(linkInput, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation {
                updateLink(linkInput: {_id: "${linkInput._id}", link: "${linkInput.link}", name: "${linkInput.name}", orderIndex: ${linkInput.orderIndex}}) {
                    name
                    link
                    orderIndex
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteLink(id, token) {
    try {
      return await axios({
        method: "POST",
        url: process.env.VUE_APP_ROOT_API + "/graphql",
        data: {
          query: `mutation {
                deleteLink(linkID: "${id}") {
                    link
                    name
                    orderIndex
                }
            }
                `
        },
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};
