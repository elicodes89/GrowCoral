import React from "react";

const ListItem = ({product, index}) => {

    return (
        <>
            <h2>{product.name}</h2>
            <h3>£{product.price}</h3>
            <p><span>From: {product.manufacturer}</span><span>{product.quantity} remaining</span></p>
        </>
    )
}

export default ListItem;