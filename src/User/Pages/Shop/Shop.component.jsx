import React, { useState, useEffect } from "react";
import Layout from "../../../Shared/Components/Layout/Layout.component";
import Card from "../../../Shared/Components/UIElements/Card/Card.component";

const Shop = () => {
    return (
        <Layout title="Shop Page" description="Shop For Your Favorite Product" className="container-fluid">
            <dv className="row">
                <div className="col-4">
                    Left Sidebar
                </div>

                <div className="col-8">
                    Right Side
                </div>
            </dv>
        </Layout>
    );
};

export default Shop;