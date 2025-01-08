import { createRouter, createWebHistory } from "vue-router";
import ListProduct from "../components/ListProduct.vue";
import AddProduct from "@/components/AddProduct.vue";
import EditProduct from "@/components/EditProduct.vue";

const routes = [
  { 
    path: "/", 
    component: ListProduct 
  },
  { 
    path: "/add-product", 
    component: AddProduct 
  },
  { 
    path: "/edit-product/:id", 
    component: EditProduct 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
