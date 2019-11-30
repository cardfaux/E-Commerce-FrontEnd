import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Shared/Components/Layout/Layout.component';
import { isAuthenticated } from '../../Helpers/IsAuthenticated/IsAuthenticated';
import { CreateProduct } from '../../API/APIAdmin/APIAdmin';

const AddProduct = () => {
    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });

    const { 
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
     } = values;

     useEffect(() => {
        setValues({ ...values, formData: new FormData() })
     }, []);

     const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value);
        setValues({ ...values, [name]: value });
     };

     const clickSubmit = (event) => {
        
     };

     const newProductForm = () => (
        <form className="mb-3" onSubmit={ clickSubmit }>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={ handleChange('photo') } type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={ handleChange('name') } type="text" className="form-control" value={ name } />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={ handleChange('description') } className="form-control" value={ description } />
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input onChange={ handleChange('price') } type="number" className="form-control" value={ price } />
            </div>

            <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={ handleChange('category') } className="form-control">
                    <option value="5de04caab3f4eb326d9898e3">Node</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select onChange={ handleChange('shipping') } className="form-control">
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input onChange={ handleChange('quantity') } type="number" className="form-control" value={ quantity } />
            </div>

            <button className="btn btn-outline-primary">Create Product</button>
        </form>
     );

    return (
        <Layout title="Add A New Product" description={ `Hello ${ user.name } Add A New Product` }>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    { newProductForm() }
                </div>
            </div>
        </Layout>
    );
};

export default AddProduct;