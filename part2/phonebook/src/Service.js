import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getData = response => response.data

const getAll = () => axios.get(baseUrl).then(getData)
const create = newObject => axios.post(baseUrl, newObject).then(getData)
const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject).then(getData)
const destroy = id => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, update, destroy }