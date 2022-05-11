import React from "react";
import CartItem from "./CartItem";

const Cart = (props)=>{
    
    const { products } = props;
    return(
        <div className="cart">
            {products.map((product)=>{
                return <CartItem
                    product={product}
                    key={product.id}
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteQuantity = {props.onDeleteQuantity}
                />
            })}
            {/* <CartItem qty={1} price={99} img='' title = {"watch"}/> */}
            
        </div>
        
    );
}

export default Cart;