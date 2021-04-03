import Repository from "@/repository/repository";

export default {
  async getAllInformation() {
    const query = `{
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
                        `;
    return await this.createRequest(query);
  },
  async getAllAdminInformation() {
    const query = `{
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
                news {
                    _id
                    name
                    content
                    date
                }
                regulations {
                  _id
                  name
                  content
             }
            }
                        `;
    return await this.createRequest(query);
  },

  async createRequest(query) {
    try {
      return await Repository.post(null, {
        query: query
      });
    } catch (error) {
      console.log(error);
    }
  }
};
