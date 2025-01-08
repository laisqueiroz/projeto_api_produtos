import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error; 
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o produto com ID ${id}:`, error);
    throw error;
  }
};

export const addProduct = async (product) => {
  const response = await api.post("/products", product);
  return response.data;
};

export const deleteProductById = async (id) => {
  try {
    await api.delete(`/products/${id}`);
    console.log(`Produto com ID ${id} foi excluído.`);
  } catch (error) {
    console.error(`Erro ao excluir o produto com ID ${id}:`, error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    await api.put(`/products/${id}`, product);
    console.log("Sucesso");
  } catch (error) {
    console.error(`Erro ao excluir o produto com ID ${id}:`, error);
    throw error;
  }
};

export default api;
