import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO'

function Comment (props) {
    const comment = props.comment;

    if (comment !== null) {
        return (
            <div className='comment'>
                <h4>{comment.author}</h4>
                <p>{format(parseISO(comment.date), 'do MMMM u, H:m')}</p>
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