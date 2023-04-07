import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Ordered summary: {cart.length}</h2>
            {
                cart.map(tshart => <p 
                        key={tshart._id}
                    >{tshart.name} <button
                        onClick={() => handleRemoveFromCart(tshart._id)}
                    >X</button></p>)
            }
        </div>
    );
};

export default Cart;