import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Cheater = (props) => {

    const { changeSubmitted } = props;

    useEffect(() => {
        changeSubmitted(false);
    }, []);

    return (
        <div className="success" style={{height:"100vh"}}>
            <div className='greenbox'>
                <h1>
                    Please play the game without cheating!
                </h1>
                <a href="/" className='btn btn-primary'>Play</a>
            </div>
        </div>
    )
}

export default Cheater;