<template>
<div class="row mt-5" v-if="product"> 
   <div class="col-4">
	<img src="https://via.placeholder.com/150x100" clasS="w-100" />
   </div>
   <div classs="col-8">
 	<h1>{{ product.title }}</h1>
	<h1>${{ product.id }}</h1>

	<input type="text" class="text-center col-1 mr-2 p-1" />
	<button class="btn btn-primary" @click="addToCart">Add to Cart</button>

	<p class="mt-4">{{ product.username }}</p>
   </div>
</div>
</template>

<script>
export default{
name: 'Product',
props: ['id'],
computed: {
  product(){
    return this.$store.state.product;
  }
},
mounted(){
 this.$store.dispatch('getProduct', this.id);
},
 methods: {
   addToCart() {
      this.$store.dispatch('addProductToCart', {
	product: this.product,
	quantity: 1
     });
   }
 }
}
</script>

<style>
</style>

