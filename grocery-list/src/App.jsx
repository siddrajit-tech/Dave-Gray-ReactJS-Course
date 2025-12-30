import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import { useState, useEffect } from "react";
import SearchItem from "./components/SearchItem";
import { createItem, deleteItem, getItems, updateItem } from "./services/api";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      setLoading(true);
      setError(null);
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  const handleCheck = async (id) => {
    console.log("clicked id:", id, typeof id);
    const originalItem = items.find((item) => String(item.id) === String(id));
    if (!originalItem) return;
    console.log("item.id:", originalItem.id, typeof originalItem.id);

    const updatedItem = { ...originalItem, checked: !originalItem.checked };
    setItems((currItems) =>
      currItems.map((item) => (item.id === id ? updatedItem : item))
    );

    setLoading(true);
    setError(null);

    try {
      await updateItem(String(id), { checked: updatedItem.checked });
    } catch (error) {
      setError(error.message);
      setItems((currItems) =>
        currItems.map((item) => (item.id === id ? originalItem : item))
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    console.log(id, typeof id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    setLoading(true);
    setError(null);

    try {
      await deleteItem(id);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    setLoading(true);
    setError(null);
    try {
      const saved = await createItem({ item, checked: false });
      setItems((curr) => [...curr, saved]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {loading ? (
          <p>Loading items...</p>
        ) : error ? (
          <p>{`Error: ${error}`}</p>
        ) : (
          <Content
            items={items.filter((i) =>
              i.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
