import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson).then(response => response.data);
}

const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`, newPerson).then(response => response.data);
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

const servicePersons = { getAll, create, update, deletePerson };

export default servicePersons;