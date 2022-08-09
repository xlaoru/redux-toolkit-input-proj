import React from 'react';
import { useSelector } from 'react-redux';

const Output = () => {
    const value = useSelector(state => state.text.value)
    return (
        <div>
            {value}
        </div>
    );
};

export default Output;
 