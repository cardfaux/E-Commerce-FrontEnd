import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

import Layout from '../../../Shared/Components/Layout/Layout.component';
import { signin, AuthLocalStorage } from '../../../API/Authentication/Authentication.component';
import { isAuthenticated } from '../../../Helpers/IsAuthenticated/IsAuthenticated';

const Signin = () => {
    const [values, setValues] = useState({
        email: 'cardfaux@tutanota.com',
        password: 'Fsuore1234#',
        error: '',
        loading: false,
        redirectToReferrer: false,
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true, });
        signin({ email, password })
        .then(data => {
            if(data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                AuthLocalStorage(data, () => {
                    setValues({ ...values, redirectToReferrer: true });
                });
            }
        });
    };

    const SignInForm = () => (
        <form>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={ handleChange('email') } type="email" className="form-control" value={ email } />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={ handleChange('password') } type="password" className="form-control" value={ password } />
            </div>
            <button onClick={ clickSubmit } className="btn btn-primary">Submit</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            { error }
        </div>
    );

    const showLoading = () => 
        loading && (
        <div className="alert alert-info">
            <h2>
                Loading...
            </h2>
        </div>
    );

    const redirectUser = () => {
        if(redirectToReferrer) {
            if(user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            };
        };
        if(isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout title="SignIn" description="Sign In To Our E-Commerce Application" className="container col-md-8 offset-md-2">
            { showLoading() }
            { showError() }
            { SignInForm() }
            { redirectUser() }
        </Layout>
    )
};

export default Signin;