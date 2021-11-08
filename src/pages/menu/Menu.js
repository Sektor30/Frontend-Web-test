import React from 'react'
import ProductCard from '../../components/ui/Product/ProductCard';
import { useProducts } from '../../context/providers/ProductsContext'
import '../menu/Menu.css'

function Menu() {

    const { isLoading, products } = useProducts();
    
    if(isLoading) {
        return(
            <h1 className="loading">Loading...</h1>
        )
    }

    return (
        <div className="menu">
            <h1><span>Me</span>nú</h1>
            <div className="menuItem-container">
                {products.map((product) => (
                    <div key={product._id}>
                        <ProductCard product={product} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Menu
