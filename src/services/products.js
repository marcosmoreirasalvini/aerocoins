import axios from './axiosInstance';

const getProducts = async => {
    return axios
        .get('products')
        .then(({data}) => data)
        .catch(error => {
            throw error;
        });
};
const getProduct = async => {
    return axios
        .get('products/${id}')
        .then(({data}) => data)
        .catch(error => {
            throw error;
        });
};

export default {
    getProducts,
    getProduct
};
