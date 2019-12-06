import React, { Component } from 'react';

export class LongCard extends Component {

    handleClick = () => {
        this.props.removeItem(this.props.cartItem)
    }

    // new branch
    render() {
        console.log(this.props.cartItem)
        return (<>
            <li style={{justifyContent: "space-around", margin: "20px"}}>
                {<img src={this.props.cartItem.rock.image_url} alt={this.props.cartItem.rock.name} width="75px"/>}
                {this.props.cartItem.rock.name}
                ${this.props.cartItem.rock.price}
                Quantity: 1
                <button onClick={this.handleClick}>Remove From Cart</button>
            </li>
            </>
        )
    }
}

export default LongCard;
