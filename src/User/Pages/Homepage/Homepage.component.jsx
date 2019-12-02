import React, { useState, useEffect } from 'react';

import Card from '../../../Shared/Components/UIElements/Card/Card.component';
import Layout from '../../../Shared/Components/Layout/Layout.component';
import { GetProducts } from '../../../API/GetProducts/GetProducts';
import Search from '../../../Shared/Components/UIElements/Search/Search.component';

const Homepage = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        GetProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        GetProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <Layout title="Home Page" description="Node React E-Commerce Application" className="container-fluid">
            <Search />
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                { productsByArrival.map((product, index) => (
                    <div key={ index } className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                { productsBySell.map((product, index) => (
                    <div key={ index } className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Homepage;