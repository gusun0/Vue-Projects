import axios from 'axios';
import User from '../apis/User';

export const getProducts = ({commit}) => {
	User.all().
		then(response => {
			commit('SET_PRODUCTS', response.data);
		})

}

export const getProduct = ({commit}, productId) => {
	User.show(productId).
		then(response => {
			commit('SET_PRODUCT', response.data);
		})
}

export const addProductToCart = ({commit}, { product, quantity }) => {
	commit('ADD_TO_CART', { product, quantity });

	axios.post('api', {
		product_id: product.id,
		quantity
	})
}

export const getCartItems = ({commit}, ) => {
	axios.get('api').
		then(response => {
			commit('SET_CART', response.data);
		});
}

export const removeProductFromCart = ({commit}, product) => {
	commit('REMOVE_PRODUCT_FROM_CART', product);

	axios.delete('api');
}

export const clearCartItems = ({commit}) => {
	commit('CLEAR_CART_ITEMS');
}
