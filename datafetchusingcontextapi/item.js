import React, { useContext, useState } from "react";
import { AppContext } from "./context";

const Home = () => {
  const { items, addItem, updateItem, deleteItem } = useContext(AppContext);
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState({ id: "", value: "" });

  const handleAdd = () => {
    if (newItem.trim()) {
      addItem({ name: newItem });
      setNewItem("");
    }
  };

  const handleUpdate = () => {
    if (editItem.value.trim()) {
      updateItem(editItem.id, { name: editItem.value });
      setEditItem({ id: "", value: "" });
    }
  };

  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => setEditItem({ id: item.id, value: item.name })}>Edit</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add Item</h2>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {editItem.id && (
        <div>
          <h2>Edit Item</h2>
          <input
            type="text" 
            value={editItem.value}
            onChange={(e) => setEditItem({ ...editItem, value: e.target.value })}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default Home;
