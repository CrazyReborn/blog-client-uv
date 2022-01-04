import { Link } from 'react-router-dom';

function PostMini(props) {
    const post = props.post;
    return (
        <div className='post'>
            <h3>{post.title} by {post.author.username}</h3>
            <p>{post.date}</p>
            <Link to={'/posts/' + post._id}>Read more</Link>
        </div>
    )
}

export default PostMini