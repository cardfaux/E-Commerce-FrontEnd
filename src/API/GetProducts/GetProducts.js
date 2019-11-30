import { API } from '../../Config/config';

export const GetProducts = (sortBy) => {
    return fetch(`${ API }/products?sortBy={ sortBy }&order=desc&limit=6`, {
        method: "GET",
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error));
};