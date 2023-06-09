import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const contextRing = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p><small>{contextRing}</small></p>
        </div>
    );
};

export default Special;