import { useParams } from 'react-router-dom'

function CommentForm () {
    const { id } = useParams();
return (
    <>
    <form action={`http://localhost:5000/api/posts/${id}/comment`} method='POST'>
        <label htmlFor='author'>Author
        <input type='text' name='author' require='true' />
        </label>
        <label htmlFor='text'>
        <input type='text' name='text' placeholder='Add your comment' require='true' />
        </label>
        <input type='submit' value='Submit' />
    </form>
    </>
    )
}

export default CommentForm