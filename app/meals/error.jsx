'use client'
import React from 'react';

const Error = ({error}) => {
    return (
        <mian className={'error'}>
            <h1>An error occurred </h1>
            <p>Failed to fetch meals data please try again</p>
        </mian>
    );
};

export default Error;