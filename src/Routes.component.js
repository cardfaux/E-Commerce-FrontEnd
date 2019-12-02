import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './User/Components/Signup/Signup.component';
import Signin from './User/Components/Signin/Signin.component';
import Homepage from './User/Pages/Homepage/Homepage.component';
import PrivateRoutes from './Helpers/PrivateRoutes/PrivateRoutes';
import AdminRoutes from './Helpers/AdminRoutes/AdminRoutes';
import UserDashboard from './User/Components/UserDashboard/UserDashboard.component';
import AdminDashboard from './User/Components/AdminDashboard/AdminDashboard.component';
import AddCategory from './Category/AddCategory/AddCategory.component';
import AddProduct from './Product/AddProduct/AddProduct.component';
import Shop from './User/Pages/Shop/Shop.component';
import Product from './Shared/Components/UIElements/ViewProduct/ViewProduct.component';
import Cart from './Shared/Components/UIElements/Cart/Cart.component';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Homepage } />
                <Route path="/shop" exact component={ Shop } />
                <Route path="/signin" exact component={ Signin } />
                <Route path="/signup" exact component={ Signup } />
                <PrivateRoutes path="/user/dashboard" exact component={ UserDashboard } />
                <AdminRoutes path="/admin/dashboard" exact component={ AdminDashboard } />
                <AdminRoutes path="/create/category" exact component={ AddCategory } />
                <AdminRoutes path="/create/product" exact component={ AddProduct } />
                <Route path="/product/:productId" exact component={ Product } />
                <Route path="/cart" exact component={ Cart } />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;