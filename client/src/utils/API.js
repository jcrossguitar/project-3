import axios from "axios";

export default 
// class API 
{
	// static getCheeseById(cheeseId) {
	// 	console.log('getCheeseById(cheeseId)', cheeseId);
	// 	return axios.get(`/api/cheese/${cheeseId}`);
	// },

	getOrders: function() {
		return axios.get("/api/products");
	},

	getOrder: function(id) {
		return axios.get("/api/products/" + id);
	},

	deleteOrder: function(id) {
		return axios.delete("/api/products/" + id);
	},

	saveOrder: function(orderData) {
		return axios.post("/api/products", orderData);
	}
};
