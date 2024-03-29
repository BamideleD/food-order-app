import React, {useReducer} from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingCartItemIndex];
        
        let updatedItems;

        if (existingItem){
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id.id) 
        const existingItem = state.items[existingCartItemIndex]
        
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;

        if (existingItem.amount === 1){
            updatedItems = [...state.items];
            updatedItems.splice(existingCartItemIndex, 1)
        }
        else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { 
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;

    
};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
 
    const addItemToCart = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };
    const removeItemFromCart = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        item: cartState.items, 
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };


   



    return ( 
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}


export default CartProvider;