import Repository from "@/repository/repository";
import Vue from "vue";
export default {
  async login(username, password) {
    const query = `{
                login(username: "${username}", password: "${password}") {
                    token
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
      Vue.notify({
        type: "error",
        title: "Sisselogimine ebaõnnestus",
        text: "Vale kasutajanimi ja/või parool!"
      });
    }
  }
};
