function Comment (props) {
    const comment = props.comment;

    if (comment !== null) {
        return (
            <div className='comment'>
                <h4>{comment.author}</h4>
                <p>{comment.date}</p>
                <p>{comment.text}</p>
            </div>
        )
    } else {
        return (
            <div>Loading comment</div>
        )
    }


}

export default Comment