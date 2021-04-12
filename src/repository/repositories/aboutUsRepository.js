import Repository from "@/repository/repository";

export default {
  async updateAboutUsText(id, text) {
    const query = `mutation{
                updateAboutUsText(aboutUsTextInput: {_id: "${id}", text: "${text}"}) {
                    text
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
      console.log(error);
    }
  }
};
