import axios from 'axios';

export default class API {
    static getCheeseByID(cheeseId) {
        return axios.get(`localhost:5000/api/cheese/${cheeseId}`);
    }
}

