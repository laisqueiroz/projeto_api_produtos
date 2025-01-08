<template>
    <title>Editar Produto</title>
    <div class="container my-5">
      <h1 class="h3 text-secondary mb-4">Editar Produto</h1>
      <form @submit.prevent="submitForm" class="needs-validation">
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input 
            type="text" 
            id="name" 
            v-model="product.name" 
            class="form-control" 
            required 
            placeholder="Digite o nome do produto"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Descrição</label>
          <textarea 
            id="description" 
            v-model="product.description" 
            class="form-control" 
            rows="3" 
            required 
            placeholder="Digite a descrição do produto"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Preço (R$)</label>
          <input 
            type="text" 
            id="price" 
            v-model="product.price" 
            class="form-control" 
            @input="validatePrice" 
            required 
            placeholder="Digite o preço (ex.: 12.99)"
          />
          <div class="form-text text-muted">Máximo de dois dígitos após a vírgula.</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Estoque</label>
          <div>
            <div class="form-check form-check-inline">
              <input 
                class="form-check-input" 
                type="radio" 
                id="stockYes" 
                value="true" 
                v-model="product.stock" 
                required 
              />
              <label class="form-check-label" for="stockYes">Sim</label>
            </div>
            <div class="form-check form-check-inline">
              <input 
                class="form-check-input" 
                type="radio" 
                id="stockNo" 
                value="false" 
                v-model="product.stock" 
                required 
              />
              <label class="form-check-label" for="stockNo">Não</label>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-secondary me-2" @click="cancel">Cancelar</button>
          <button type="submit" class="btn btn-primary">Salvar Alterações</button>
        </div>
      </form>
      <div v-if="successMessage" class="alert alert-success mt-4" role="alert">
        Produto atualizado com sucesso!
      </div>
    </div>
</template>
  
<script>
import { getProductById, updateProduct } from "@/services/api";

export default {
data() {
    return {
    product: {
        id: null,
        name: "",
        description: "",
        price: "",
        stock: null,
    },
    successMessage: false,
    };
},
async created() {
    const productId = this.$route.params.id;
    try {
    this.product = await getProductById(productId);
    } catch (error) {
    console.error("Erro ao buscar o produto:", error);
    }
},
methods: {
    validatePrice() {
    const regex = /^\d*\.?\d{0,2}$/;
    if (!regex.test(this.product.price)) {
        this.product.price = this.product.price.slice(0, -1);
    }
    },
    async submitForm() {
    try {
        await updateProduct(this.product.id, this.product); 
        this.successMessage = true;
        setTimeout(() => {
        this.$router.push("/");
        }, 1000);
    } catch (error) {
        console.error("Erro ao atualizar o produto:", error);
    }
    },
    cancel() {
    this.$router.push("/");
    },
},
};
</script>

<style>
.container {
  max-width: 600px;
}
textarea {
  resize: none;
}
.alert {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
  