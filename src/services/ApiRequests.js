import { API_URL } from '../constants';

export const request = () => {
    fetch(API_URL)
        .then((res) => res.data)
        .catch((err) => console.error(err.message));
};
