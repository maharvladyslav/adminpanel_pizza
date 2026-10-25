import { BASE_URL } from "../config";

// Отримати всі піци
export const getPizzas = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok)
    throw new Error(`Помилка при отриманні: ${response.statusText}`);
  const pizzas = await response.json();
  return pizzas;
};

// Додати нову піцу
export const createPizza = async (pizza) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pizza),
  });
  if (!response.ok)
    throw new Error(`Помилка при додаванні: ${response.statusText}`);
  const newPizza = await response.json();
  return newPizza;
};

// Оновити піцу
export const updatePizza = async (id, data) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok)
    throw new Error(`Помилка при оновленні: ${response.statusText}`);
  const updatedPizza = await response.json();
  return updatedPizza;
};

// Видалити піцу
export const deletePizza = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok)
    throw new Error(`Помилка при видаленні: ${response.statusText}`);
  console.log(`Піцу з id ${id} видалено`);
};
