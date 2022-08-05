import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Testing from "./routes/TestingStuff";
import Income from "./routes/Income";
import Food from "./routes/Food"
import Expenses from "./routes/expenses";
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {useState} from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Income" element={<Income />} />
            <Route path="Expenses" element={<Expenses />} />
            <Route path="Food" element={<Food />} />
            <Route path="Test" element={<Testing />} />

        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
