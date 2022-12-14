import React from 'react';
import {GiCompass, GiDiamondHard, GiStabbedNote} from 'react-icons/gi';

export links = [
    {
        id: 1,
        text: 'home',
        url: '/'
    },
    {
        id: 2,
        text: 'about',
        url: '/about'
    },
    {
        id: 3,
        text: 'products',
        url: '/products'
    }
];

export const services = [
    {
        id: 1,
        icon: <GiCompass />,
        title: 'mission',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolores consectetur harum asperiores non voluptates, commodi esse aliquid perspiciatis ex.'
    },
    {
        id: 2,
        icon: <GiDiamondHard />,
        title: 'vision',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolores consectetur harum asperiores non voluptates, commodi esse aliquid perspiciatis ex.'
    },
    {
        id: 3,
        icon: <GiStabbedNote />,
        title: 'history',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolores consectetur harum asperiores non voluptates, commodi esse aliquid perspiciatis ex.'
    }
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = 'https://course-api.com/react-store-single-product?id=';