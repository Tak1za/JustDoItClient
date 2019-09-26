import axios from "axios";

const TASK_API_URL = "http://localhost:8080";
const TASK_LIST_API_URL = `${TASK_API_URL}/api/v1`;

class DataService {
  retrieveAllTasks(name) {
    return axios.get(`${TASK_LIST_API_URL}/${name}/tasks`);
  }

  deleteTask(name, id) {
    return axios.delete(`${TASK_LIST_API_URL}/${name}/tasks/${id}`);
  }

  retrieveTask(name, id) {
    return axios.get(`${TASK_LIST_API_URL}/${name}/tasks/${id}`);
  }

  addTask(name, task) {
    return axios.post(`${TASK_LIST_API_URL}/${name}/tasks`, task);
  }

  updateTask(name, id, task) {
    return axios.put(`${TASK_LIST_API_URL}/${name}/tasks/${id}`, task);
  }

  createTask(name, task) {
    return axios.post(`${TASK_LIST_API_URL}/${name}/tasks`, task);
  }
}

export default new DataService();
