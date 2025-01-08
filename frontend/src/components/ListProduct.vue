<template>
  <title>Gerenciador de Produtos</title>
  <div class="container my-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h3 text-secondary">Lista de Produtos</h1>
      <button class="btn btn-primary" @click="addProduct">Adicionar Produto</button>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered align-middle">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <button class="btn btn-outline-info btn-sm me-2" @click="viewProduct(product.id)">Ver</button>
              <button class="btn btn-outline-danger btn-sm" @click="deleteProduct(product.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="showModal" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalhes do Produto</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <p><strong>ID:</strong> {{ selectedProduct.id }}</p>
            <p><strong>Nome:</strong> {{ selectedProduct.name }}</p>
            <p><strong>Descrição:</strong> {{ selectedProduct.description }}</p>
            <p><strong>Preço:</strong> R$ {{ selectedProduct.price }}</p>
            <p><strong>Estoque:</strong> {{ selectedProduct.stock }}</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline-info btn-sm me-2" @click="editProduct(selectedProduct.id)">Editar</button>
            <button class="btn btn-secondary" @click="closeModal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts, getProductById, deleteProductById } from "@/services/api";

export default {
  data() {
    return {
      products: [],
      showModal: false,
      selectedProduct: {},
    };
  },
  methods: {
    async fetchProducts() {
      try {
        this.products = await getProducts();
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    },
    async viewProduct(id) {
      try {
        this.selectedProduct = await getProductById(id);
        this.showModal = true;
      } catch (error) {
        console.error(`Erro ao buscar produto com ID ${id}:`, error);
      }
    },
    async deleteProduct(id) {
      try {
        await deleteProductById(id);
        this.fetchProducts();
      } catch (error) {
        console.error(`Erro ao excluir produto com ID ${id}:`, error);
      }
    },
    closeModal() {
      this.showModal = false;
    },
    editProduct(id) {
      this.$router.push(`/edit-product/${id}`);
    },
    addProduct() {
      this.$router.push("/add-product");
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
.modal {
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
