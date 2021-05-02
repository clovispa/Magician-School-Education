import apiClient from '../plugins/Axios';


const apiCharacters = function () {
    return apiClient.get('/api/characters');
}
const apiHouse = function (house) {
    return apiClient.get(`/api/characters/house/${house}`);
}

export default {
    apiCharacters,
    apiHouse
}
