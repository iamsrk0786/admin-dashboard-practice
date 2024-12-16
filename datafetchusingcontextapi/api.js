import axios from "axios";

const API_BASE_URL = "https://example.com/api";

export const fetchItems = () => axios.get(`${API_BASE_URL}/items`);
export const addItem = (data) => axios.post(`${API_BASE_URL}/items`, data);
export const updateItem = (id, data) => axios.put(`${API_BASE_URL}/items/${id}`, data);
export const deleteItem = (id) => axios.delete(`${API_BASE_URL}/items/${id}`);
