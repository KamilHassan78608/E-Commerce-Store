import { createContext } from "react";
import products from '../data/Product'
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const Currency = "$";
    const delivery_fee = 10;
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(false);

    const value = {
        products, Currency, delivery_fee,
        search, setsearch, showsearch, setshowsearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 