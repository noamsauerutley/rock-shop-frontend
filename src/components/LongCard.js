import React, { Component } from 'react';

export class LongCard extends Component {

    render() {
        return (
            <div>
                {this.props.cartItem.name}
                ${this.props.cartItem.price}
                Quantity: {this.props.cartItem.quantity}
            </div>
        )
    }
}

export default LongCard;
