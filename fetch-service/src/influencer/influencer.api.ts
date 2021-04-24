import axios, { AxiosInstance } from "axios";
import { ID, Influencer } from "../../typings/influencer";

class APIModel {
  private queueAPI: AxiosInstance;
  private mockAPI: AxiosInstance;

  constructor() {
    this.queueAPI = axios.create({
      baseURL: `http://${process.env.QUEUE_API_URL}/influencer/`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.mockAPI = axios.create({
      baseURL: `http://${process.env.MOCK_API_URL}/api/v1/influencers/`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async addToQueue(pk: ID): Promise<boolean> {
    try {
      await this.queueAPI.post("/", { pk });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async fetchInfluencer(pk: ID): Promise<Influencer | null> {
    try {
      const influencer = await this.mockAPI.get(`/${pk}`);
      return influencer.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

const API = new APIModel();

export default API;
