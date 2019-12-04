import React from 'react';

const DetailContainer = (props) => {

    const { rock } = props;

    return (
        <div>
           <img alt={rock.name} src={rock.image_url} />
            <h2>{rock.name}</h2>
            <h4>{rock.description}</h4>
            <p>Type: {rock.category}</p>
            <p>Color: {rock.color}</p>
            <p>${rock.price}</p>
            <p>Rating: {rock.rating}</p>
            <p>Quantity: {rock.quantity}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default DetailContainer;
