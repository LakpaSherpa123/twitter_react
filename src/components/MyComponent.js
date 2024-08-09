import React, { useEffect, useState } from 'react';
import { getData, postData } from '../services/api';

const MyComponent = () => {
    const [data, setData] = useState('');
    const [inputData, setInputData] = useState('');

    useEffect(() => {
        getData()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleSubmit = () => {
        postData(inputData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            <h1>{data}</h1>
            <input
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={handleSubmit}>Send Data</button>
        </div>
    );
};

export default MyComponent;
