import apiClient from '../plugins/Axios';


const apiCharacters = function () {
    return apiClient.get('/api/characters');
}
const apiHouse = function (house) {
    return apiClient.get(`/api/characters/house/${house}`);
}
const apiStudent = function () {
    return apiClient.get('/api/characters/students');
}
const apiStaff = function () {
    return apiClient.get('/api/characters/staff');
}

export default {
    apiCharacters,
    apiHouse,
    apiStudent,
    apiStaff

}
