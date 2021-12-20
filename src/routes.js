
import React from 'react';
import AddProduct from './components/add_product';
import ProductManager from './components/product_manager';
import Menu from './components/menu';

const routes = [
    {
        path: '/',
        exact: true,
        main: <Menu />
    },
    {
        path: '/products',
        exact: false,
        main: <ProductManager />
    },
    {
        path: '/product_add',
        exact: false,
        main: <AddProduct />
    }
];

export default routes;