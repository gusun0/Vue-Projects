<template>
 <div class="col-3 mt-3">

   <div class="card h-100 text-left">

      <img class="w-100" src="https://via.placeholder.com/150x100" alt="" />

       <div class="card-body">
	<h4 class="card-title">
		<router-link :to="{name: 'product', params: { id: product.id }}">{{ product.name }}</router-link>
	</h4>
	<strong>${{product.id}}</strong>
	<p class="card-text">{{ product.username }}</p>
       </div>

	<div class="px-4 pb-3">
	<button class="btn btn-secondary" @click="addToCart">Add to Cart</button>
	</div>

   </div>

 </div>

</template>

<script>
import { mapActions } from 'vuex';

export default{
name: 'ProductCard',
props: ['product'],
methods: {
 ...mapActions(['addProductToCart']),

  addToCart(){
    this.addProductToCart({
      product: this.product,
      quantity: 1
   });
  }
}
}
</script>
