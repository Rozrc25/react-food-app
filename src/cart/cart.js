import { useSelector, useDispatch } from "react-redux";
import store from "../utils/store";
import { IMG_CDN_URL } from '../maincontent/constants';
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { restaurants } from "../maincontent/constants";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart())
    }
    return ( 
        <div className="cartItems">
            <span className="cartCount">{cartItems.length}</span>
            <button onClick={() => handleClear()}><BiTrash/></button>
            {
                cartItems.map((obj) => {
                    return (
                        <>
                          {/* {console.log(restaurants.cards[0].card.card.info.name)} */}
                        <div key={obj.id} className="cartItem">
                         
                            <img src={IMG_CDN_URL + obj.card.info.imageId} />
                            <br/>
                            <span>{obj.card.info.name}</span>
                            <br/>
                            <span>{obj.card.info.price}</span>
                            
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Cart;