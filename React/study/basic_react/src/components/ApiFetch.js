import React, {useState, useEffect} from 'react'
// import axios from 'axios';

const ApiFetch = () => {

    const [posts, setPosts] = useState([])
    const [clicked, setClicked] = useState(false)
    const [id, setId] = useState(1)

    const clickHandler = () => {
        setClicked(!clicked)
    }

    useEffect(() => {
        // ーーーーーーーaxiosの方法ーーーーーーーー
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(post => {
        //     setPosts(post.data)
        // })
        // ーーーーーーーーーーーーーーーーーーーーー

        // javascriptのfetchでの方法
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[clicked])

    return (
        <div>
            <input type="text" value={id} onChange={evt => setId(evt.target.value)} />
            <button type='button' onClick={clickHandler}>GET post</button>
            <p>{posts.title}</p>

            {/* {posts.map(post => (
                <>
                <p>{post.id}</p>
                <p>{post.title}</p>
                </>
            ))} */}
        </div>
    )
}

export default ApiFetch