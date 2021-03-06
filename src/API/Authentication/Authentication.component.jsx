import { API } from '../../Config/config';

 export const signup = (user) => {
    //console.log(name, email, password);
    return fetch(`${ API }/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
};

export const signin = (user) => {
    //console.log(name, email, password);
    return fetch(`${ API }/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
};

export const AuthLocalStorage = (data, next) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    };
};

export const signout = (next) => {
    if(typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();

        return fetch(`${ API }/signout`, {
            method: "GET",
        })
        .then(response => {
            console.log('signout', response);
        })
        .catch(err => console.log(err));
    };
};