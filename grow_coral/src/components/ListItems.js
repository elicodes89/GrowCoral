import React from "react";
import ListItem from "./ListItem";

const ListItems = ({products}) => {

    const ItemNodes = products.map((product, index) => {
        return <ListItem key={index} product={product} index={index} />
    })

    return (
        <>
        {ItemNodes}
        </>
    )
}

export default ListItems;