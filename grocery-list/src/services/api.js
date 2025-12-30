const API_URL = "http://localhost:3500/items";

export async function getItems() {
  const response = await fetch(API_URL);
  if (!response.ok)
    throw Error(`Failed to create item: ${response.statusText}`);
  return response.json();
}

export async function createItem(item) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(API_URL, options);

  if (!response.ok)
    throw Error(`Failed to create item: ${response.statusText}`);

  return response.json();
}

export async function updateItem(id, updates) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  };

  const response = await fetch(`${API_URL}/${id}`, options);

  if (!response.ok)
    throw Error(`Failed to update item: ${response.statusText}`);

  return response.json();
}

export async function deleteItem(id) {
  const options = {
    method: "DELETE",
  };

  const response = await fetch(`${API_URL}/${id}`, options);

  if (!response.ok)
    throw Error(`Failed to delete item: ${response.statusText}`);
}
