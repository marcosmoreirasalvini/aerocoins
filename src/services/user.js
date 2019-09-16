import axios from './axiosInstance';

const getUser = async => {
    return axios
        .get('user/me')
        .then(({data}) => data)
        .catch(error => {
            throw error;
        });
};
const getPoints = async => {
    return axios
        .get('user/me')
        .then(({data}) => data.points)
        .catch(error => {
            throw error;
        });
};
const addToRedeem = async data => {
    return axios
        .post('redeem', data)
        .then(({data}) => data)
        .catch(error => {
            throw error;
        });
};
const addPoints = async data => {
    return axios
        .post('user/points', data)
        .then(({data}) => data)
        .catch(error => {
            throw error;
        });
};

export default {
    getUser,
    getPoints,
    addToRedeem,
    addPoints
};
