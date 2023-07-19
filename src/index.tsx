import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import client from './apollo';
import reportWebVitals from './reportWebVitals';
import './styles/styles.css';
import router from './Router';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <ApolloProvider client={client}>
                <RouterProvider router={router} />
            </ApolloProvider>
        </HelmetProvider>
    </React.StrictMode>
);

reportWebVitals();
