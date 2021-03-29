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
  }
};
