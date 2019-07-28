import axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv'
import camelcaseKeys from 'camelcase-keys'


axios.defaults.baseURL = API_BASE_URL

export default {
  async get(url, params) {
    try {
      const response = await axios.get(url, { params });
      return camelcaseKeys(response.data, { deep: true });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
