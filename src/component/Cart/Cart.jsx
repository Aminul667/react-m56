import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Nice</h3>
            <p>Thanks for buying</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Ordered summary: {cart.length}</h2>
            <p className={`bold round ${cart.length===3 ? 'green' : 'orange'}`}>Something</p>
            {cart.length > 2 ? <span className='orange'>Want to buy more?</span> : <span>Enough!!</span>}
            {message}
            {
                cart.map(tshart => <p 
                        key={tshart._id}
                    >{tshart.name} <button
                        onClick={() => handleRemoveFromCart(tshart._id)}
                    >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double product</p>
            }
            {
                cart.length === 3 || <p>Not a triple</p>
            }
        </div>
    );
};

export default Cart;