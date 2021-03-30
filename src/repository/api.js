import axios from "axios";
export default {
  async getAllInformation() {
    try {
      return await axios({
        method: "POST",
        url: "http://localhost:3000/graphql",
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
        url: "http://localhost:3000/graphql",
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
        url: "http://localhost:3000/graphql",
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
        url: "http://localhost:3000/graphql",
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
  }
};
