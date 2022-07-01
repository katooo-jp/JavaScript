import React, {useState} from 'react'

const Basic1 = () => {
    const [product, setProducts] = useState({name:'', price:'',});

    return (
        <>
        <form>
            <input type="text" value={product.name} onChange={event => {setProducts({...product, name: event.target.value})}}/>
            <br />
            <input type="text" value={product.price} onChange={event => {setProducts({...product, price: event.target.value})}}/>
        </form>
        <h3>Product name is {product.name}</h3>
        <h3>Product price is {product.price}</h3>
        </>
    )
}

export default Basic1

// 関数コンポーネントの型を 'rafce' で一発補完
// JSXは必ず　<>要素</>　もしくは一つのタグで囲ってreturn