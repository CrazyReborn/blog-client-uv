import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Comment from "./comment";
import CommentForm from './commentForm';

function PostLarge() {
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${id}`)
        .then(response => response.json())
        .then(json => json.post)
        .then(post => {
            setPost(post);
            setComments(post.comments);
        })
        .catch(err => console.log('There was an error while fetching post: ', err))
    }, [id, comments]);

    return (
        <div>
            {
            post == null ? 
            <div>Loading</div>
            :
            <div className='main'>
                <div className='postLarge'>
                    <h1>{post.title}</h1>
                    <h2>By {post.author.username}</h2>
                    <h3>{post.date}</h3>
                    <div>{post.text}</div>
                </div>
                <CommentForm />
                {comments.length !== 0 ?
                 comments.map(comment => {
                     return (
                        <Comment key={comment._id} comment={comment} />
                     )
                })
                : <div>There are no comments yet...</div>
                }
            </div>
            }  
        </div>     
    )
}

export default PostLarge