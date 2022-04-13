import React, {useState} from "react";
import Basket from "../components/Basket";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListItems from "../components/ListItems";

const MainContainer = () => {

    const [products, setProducts] = useState([
        {
            name: 'Ricordea',
            price: 10,
            manufacturer: 'Red Sea',
            quantity: 15
        },
        {
            name: 'Flavia',
            price: 25,
            manufacturer: 'Fluval Sea',
            quantity: 5
        },
        {
            name: 'Finger Coral',
            price: 12,
            manufacturer: 'Marine AKA',
            quantity: 14
        },
        {
            name: 'Green Star Polyp',
            price: 35,
            manufacturer: 'Red Sea',
            quantity: 7
        },
        {
            name: 'Torch Coral',
            price: 300,
            manufacturer: 'Marine AKA',
            quantity: 3
        }
    ]);

    const [basket, setBasket] = useState(0);

    return (
        <>
            <Header />
            <Basket quantity={basket}/>
            <ListItems products={products}/>
            <Footer />
        </>
    )
}

export default MainContainer;