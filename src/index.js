import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// Routes
import App from './App';
import { WithoutMemo, WithMemo } from './hooks/Memo';
import { WithoutCallback, WithCallback } from './hooks/Callback';
import { WithoutMemoFunction, WithMemoFunction } from './functions/Memo';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/without-memo',
    element: <WithoutMemo />,
  },
  {
    path: '/with-memo',
    element: <WithMemo />,
  },
  {
    path: '/without-callback',
    element: <WithoutCallback />,
  },
  {
    path: '/with-callback',
    element: <WithCallback />,
  },
  {
    path: '/without-memo-function',
    element: <WithoutMemoFunction />,
  },
  {
    path: '/with-memo-function',
    element: <WithMemoFunction />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
