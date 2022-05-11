import React from "react";

const CartItem =(props)=>{
        // console.log(this.props);
    const {price, title, qty,img} = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = props;
    return (
        <div className="cart-item">
            <div className="left-block">
            <img style={styles.image} src={img}/>
            </div>
            <div className="right-block">
            <div style={{fontSize: 25}}>{title}</div>
            <div style={{color: '#777'}}>Rs {price}</div>
            <div style={{color: '#777'}}>Qty: {qty}</div>
            <div className="cart-item-actions">
                <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    onClick={()=>onIncreaseQuantity(product)}
                />
                <img
                    alt="decrees"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    onClick={()=>onDecreaseQuantity(product)}
                />
                <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    onClick={()=>onDeleteQuantity(product.id)}
                />
            </div>  
            </div>
        </div>
    )
}

const styles = {
    image:{
        height:110,
        width: 110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}
export default CartItem;