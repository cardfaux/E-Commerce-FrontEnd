import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Shared/Components/Layout/Layout.component';
import { isAuthenticated } from '../../Helpers/IsAuthenticated/IsAuthenticated';
import { CreateCategory } from '../../API/APIAdmin/APIAdmin';

const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // de structure user and token from localStorage
    const {  user, token } = isAuthenticated();

    const handleChange = (event) => {
        setError('')
        setName(event.target.value)
    };

    const clickSubmit = (event) => {
        event.preventDefault()
        setError('')
        setSuccess(false)
        // make request to api to create category
        CreateCategory(user._id, token, { name })
        .then(data => {
            if(data.error) {
                setError(true);
            } else {
                setError('');
                setSuccess(true);
            }
        });

    };

    const newCategoryForm = () => (
        <form onSubmit={ clickSubmit }>
            <div className="form-group">
                <label classNam="text-muted">Name</label>
                <input type="text" className="form-control" onChange={ handleChange } value={ name } autoFocus required />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    );

    const showSuccess = () => {
        if(success) {
            return <h3 className="text-success">{ name } Is Created</h3>
        }
    };

    const showError = () => {
        if(error) {
            return <h3 className="text-danger">Category Should Be Unique</h3>
        }
    };

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">
                Back To Dashboard
            </Link>
        </div>
    );
    


    return (
        <Layout title="Add A New Category" description={ `Hello ${ user.name } Add A New Category` }>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    { showSuccess() }
                    { showError() }
                    { newCategoryForm() }
                    { goBack() }
                </div>
            </div>
        </Layout>
    );
};

export default AddCategory;