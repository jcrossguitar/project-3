import axios from 'axios';

 const API = {
	// static getCheeseById(cheeseId) {
	// 	console.log('getCheeseById(cheeseId)', cheeseId);
	// 	return axios.get(`/api/cheese/${cheeseId}`);
	// },

	getInventory: () =>{
		return axios.get("/api/inventory").then(data=>{
			console.log(data)
			return data
		});
	},

	getOrderById: (viewOrderId)=> {
		return axios.get("/api/vieworder/");
	},

	deleteOrderById :(viewOrderId)=> {
		return axios.delete("/api/vieworder/");
	},

	saveOrder: (orderData)=> {
		return axios.post("/api/vieworder", orderData);
	}
};

export default API;
