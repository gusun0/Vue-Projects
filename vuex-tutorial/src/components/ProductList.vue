<template>
<div class="d-flex align-items-strech flex-wrap">
  <ProductCard v-for="product in products" :key="product.id" :product="product" />
</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default{
name: 'ProductList',
components: {
 ProductCard
},
 computed: {
   products(){
     return this.$store.state.products;
   } 
 },
 mounted(){
  this.$store.dispatch('getProducts');
 }
}
</script>

<style>
</style>
