import React, {useState} from 'react'

const Basic1 = () => {
    const [product, setProducts] = useState({name:'', price:'',});

    return (
        <>
        <form>
            <input type="text" value={product.name} onChange={event => {setProducts({...product, name: event.target.value})}}/>
            <input type="text" value={product.price} onChange={event => {setProducts({...product, price: event.target.value})}}/>
        </form>
        <h1>Product name is {product.name}</h1>
        <h1>Product price is {product.price}</h1>
        </>
    )
}

export default Basic1