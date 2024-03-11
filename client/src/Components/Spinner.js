import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

const Spinner = () => {
    const [count , setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => prevValue - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count === 0) {
            navigate('/login');
        }
    }, [count, navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <h1> UnAuthorized Access {count}</h1>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
