import Repository from "@/repository/repository";

export default {
  async createWorker(workerInput) {
    const query = `mutation createWorker($workerInput: WorkerInput!) {
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
                `;
    const variables = {
      workerInput
    };
    return await this.createRequest(query, variables);
  },
  async updateWorker(workerInput) {
    const query = `mutation updateWorker($workerInput: WorkerInput!) {
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
                }`;
    const variables = {
      workerInput
    };
    return await this.createRequest(query, variables);
  },
  async deleteWorker(id) {
    const query = `mutation {
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
                `;
    return await this.createRequest(query, null);
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
