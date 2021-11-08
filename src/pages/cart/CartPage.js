import React, {useState} from 'react'
import { FaTrash } from "react-icons/fa";
import { useCart } from '../../context/providers/CartContext'
import { useAuth } from '../../context/providers/AuthContext'

import './CartPage.css'

function CartPage() {

    const { items, removeItem, totalPrice, clearCart, appendItemToCart, decrementItem } = useCart();

    const { user } = useAuth();
    
    const [value, setValue] = useState([]);
    const [uEmail, setuEmail] = useState(user.email);


    const [quantity, setQuantity] = useState(0);

    if(items.length === 0) {
        return (
            <h1 className="empty">Carrito vacío</h1>
        )
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        setuEmail(e.target.value)
    }

    return (
        <div className="shoopingCart">
            <div className="header">
                <div>
                    <h1><span>Carr</span>ito de compras</h1>
                    <button className="btn" onClick={() => clearCart()}>Limpiar carrito</button>
                </div>
                <div className="pagar">
                    <h3>Total: {totalPrice}</h3>
                    <form  action="https://formspree.io/f/mleayoej" method="POST" >
                        <div style={{display: 'none' }}>
                            <input type="text" name="user_name" value={uEmail} onChange={handleChange} />
                            <input type="email" name="user_email" value={uEmail} onChange={handleChange} />
                            <textarea name="message" value={value} onChange={handleChange} />
                        </div>
                        <input type="submit" className="btn" value="PAGAR" />
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="items">
                    {
                        items.map(product => (

                            <div className="shoopingBox" key={product._id}>
                                <img src={product.images.url ? product.images.url : '/noImage.png'} alt="" />
                                <div>
                                    <div className="boxInfo">
                                        <div className="title">
                                            <h3>{product.name}</h3>
                                            <FaTrash className="icon" onClick={() => removeItem(product)} />
                                        </div>
                                        <h2>Precio: {product.price}</h2>
                                        <h2>Cantidad: {product.quantity}</h2>
                                        <h2>Total: ${product.price * product.quantity}</h2>
                                    </div>
                                    <div className="boxValue">
                                        <button className="btn" onClick={() => decrementItem(product, quantity)} >-</button>
                                        <input type="number" value={quantity ? quantity : 0} 
                                        onChange={e => setQuantity(e.target.value)}
                                        />
                                        <button className="btn" onClick={() => appendItemToCart(product, quantity)}>+</button>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CartPage
