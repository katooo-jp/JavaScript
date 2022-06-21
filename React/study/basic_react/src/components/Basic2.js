import React,{useState} from 'react'

const Basic2 = () => {
    const [products, setProducts] = useState([]);

    const newProduct = () => {
        setProducts([...products,{
            id: products.length,
            name: 'Hello React',
        }]);
    }

  return (
    <>
    <button onClick={newProduct}>Add new product</button>
    <ul>
        {products.map(product => (
            <li key={product.id}>{product.name} id: {product.id}</li>
        ))}
    </ul>
    </>
  )
}

export default Basic2


// リストはユニークなkey key="key" を与えないとエラーが出る
// ...は要素ごとに分解した処理を書ける。