import React from 'react';
import LongCard from '../../components/LongCard'

const CartContainer = (props) => {
    console.log(props)
    return (
        <div>
            {props.currentCart.map(item => <LongCard key={item.id} cartItem={item} />)}
        </div>
    )
}

export default CartContainer;
