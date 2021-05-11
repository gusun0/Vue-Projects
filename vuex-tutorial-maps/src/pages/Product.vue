<template>
<div class="row mt-5" v-if="product"> 
   <div class="col-4">
	<img src="https://via.placeholder.com/150x100" clasS="w-100" />
   </div>
   <div classs="col-8">
 	<h1>{{ product.title }}</h1>
	<h1>${{ product.id }}</h1>

	<input type="text" v-model.number="quantity" class="text-center col-1 mr-2 p-1" />
	<button class="btn btn-primary" @click="addToCart">Add to Cart</button>

	<p class="mt-4">{{ product.username }}</p>
   </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default{
name: 'Product',
props: ['id'],
data() {
return {
  quantity: 1
}
},
computed: {
  ...mapState(['product']),
},
mounted(){
 this.getProduct(this.id);
},

 methods: {
   ...mapActions(['addProductToCart','getProduct']),

   addToCart() {
      this.addProductToCart({
	product: this.product,
	quantity: this.quantity
    });
   },
 }
}
</script>

<style>
</style>

