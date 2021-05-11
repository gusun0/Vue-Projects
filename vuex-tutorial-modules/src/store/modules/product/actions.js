import User from '../../../apis/User';

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
