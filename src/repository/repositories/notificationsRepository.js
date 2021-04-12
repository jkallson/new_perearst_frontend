import Repository from "../repository";
import Vue from "vue";

export default {
  async getNotifications() {
    const query = `{
                 news {
                      _id
                      name
                      content
                      date
                 }
            }`;
    return await this.createRequest(query);
  },
  async createNotification(notificationInput) {
    const query = `mutation {
                createNews(newsInput: {name: "${notificationInput.name}", content: "${notificationInput.content}", date: "${notificationInput.date}"}) {
                    _id
                    name
                    content
                    date
                }
            }
                `;
    return await this.createRequest(query);
  },
  async updateNotification(notificationInput) {
    const query = `mutation {
                updateNews(newsInput: {_id: "${notificationInput._id}", name: "${notificationInput.name}", content: "${notificationInput.content}", date: "${notificationInput.date}"}) {
                    _id
                    name
                    content
                    date
                }
            }
                `;
    return await this.createRequest(query);
  },
  async deleteNotification(id) {
    const query = `mutation {
                deleteNews(newsID: "${id}") {
                    name
                    content
                    date
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
      Vue.notify({
        type: "error",
        title: "Midagi läks valesti",
        text: error
      });
    }
  }
};
