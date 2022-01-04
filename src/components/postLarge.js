import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

function PostLarge() {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/posts/${id}`)
        .then(response => response.json())
        .then(json => json.post)
        .then(post => setPost(post))
        .catch(err => console.log('There was an error while fetching post: ', err))
    }, [id])

    return (
        <>
            {post == null ? 
            <div>Loading</div>
            :
            <div className='postLarge'>
            <h1>{post.title}</h1>
            <h2>By {post.author.username}</h2>
            <h3>{post.date}</h3>
            <div>{post.text}</div>
            </div>
            }
        </>
            
    )
}

export default PostLarge