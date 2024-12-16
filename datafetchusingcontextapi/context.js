import React, { createContext, useState, useEffect } from "react";
import * as api from "./api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.fetchItems().then((response) => setItems(response.data));
  }, []);

  const addItem = async (data) => {
    const response = await api.addItem(data);
    setItems([...items, response.data]);
  };

  const updateItem = async (id, data) => {
    const response = await api.updateItem(id, data);
    setItems(items.map((item) => (item.id === id ? response.data : item)));
  };

  const deleteItem = async (id) => {
    await api.deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </AppContext.Provider>
  );
};
