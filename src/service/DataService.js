import axios from "axios";

const TASK_API_URL = "http://localhost:8080";
const TASK_LIST_API_URL = `${TASK_API_URL}/api/v1`;

class DataService {
  retrieveAllTasks(name) {
    return axios.get(`${TASK_LIST_API_URL}/${name}/tasks`);
  }
}

export default new DataService();
