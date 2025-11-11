import { createContext } from "react";
import products from '../data/Product .json';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const Currency = "$";
    const delivery_fee = 10;

    const value = {
        products, Currency, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 