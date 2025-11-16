import { createContext, useEffect } from "react";
import products from '../data/Product'
import { useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const Currency = "$";
    const delivery_fee = 10;
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(false);
    const [cart, setcart] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select Any Size");
            return;
        }
        const cartData = structuredClone(cart); //StructuredClone make an exact copy of the object 
        // if we edit the copy the original will not change

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1; 
        }
        setcart(cartData);
    }

    const countCartItems = () => {
        let totalCount = 0;
        for (const items in cart) {
            for(const item in cart[items]){
                try {
                    if(cart[items][item] > 0){
                        totalCount += cart[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cart);
        cartData[itemId][size] = quantity;

        setcart(cartData);
    }

    const getTotalAmount = () => {
        let TotalAmount = 0;
        for(const item in cart){
            let itemInfo = products.find((product) => product._id === item);
            for(const items in cart[item]){
                try {
                    if (cart[item][items] > 0) {
                        TotalAmount += itemInfo.price * cart[item][items];
                    }
                } catch (error) {
                    console.error(error);
                    
                }
            }
        }
        return TotalAmount;
    }

    useEffect(() => {
        // console.log(cart);
    }, [cart])

    const value = {
        products, Currency, delivery_fee, addToCart,
        search, setsearch, showsearch, setshowsearch,
        cart, countCartItems, updateQuantity, getTotalAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 