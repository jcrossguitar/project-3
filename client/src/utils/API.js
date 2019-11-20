import axios from 'axios';

export default class API {
	// static getCheeseById(cheeseId) {
	// 	console.log('getCheeseById(cheeseId)', cheeseId);
	// 	return axios.get(`/api/cheese/${cheeseId}`);
	// },

	getOrders() {
		return axios.get("/api/vieworders");
	}

	getOrderById (viewOrderId) {
		return axios.get("/api/vieworder/");
	}

	deleteOrderById (viewOrderId) {
		return axios.delete("/api/vieworder/");
	}

	saveOrder (orderData) {
		return axios.post("/api/vieworder", orderData);
	}
};
