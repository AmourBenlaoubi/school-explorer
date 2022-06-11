import { API_URL } from '../constants';

export const request = (options) => {
    return fetch(API_URL, options)
        .then((res) => res.json())
        .catch((err) => console.error(err.message));
};

export const apiRequest = ({ method = 'get', data, params }) => {
    return request({
        method,
        data,
        params,
    });
}
