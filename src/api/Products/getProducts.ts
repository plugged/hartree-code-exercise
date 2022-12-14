const API_URL = "https://dummyjson.com";

export const getProducts = () =>
  fetch(`${API_URL}/products`).then((res) => res.json());
