<template>
<div class="d-flex align-items-strech flex-wrap">
  <ProductCard v-for="product in products" :key="product.id" :product="product" />
</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapState, mapActions} from 'vuex';

export default{
name: 'ProductList',
components: {
 ProductCard
},
 computed: {
   ...mapState(['products']),
 },
 mounted(){
  this.getProducts();
 },
 methods: {
  ...mapActions(['getProducts']),
 }

}
</script>

<style>
</style>
