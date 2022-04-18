import { Link } from 'react-router-dom'
const AnswerDetails = (props) => {
    return (
        <div>
            <p>
                {props.body}
                <br />
                By {props.author_name}
                <small>
                    Answered {props.created_at} ago
                </small>
            </p>
            {/* 
                if you want to return multiple tags at the same time but also not affect the html structure
                then you can use React.Fragment or <></>
            */}
            <button onClick={props.deleteTheAnswer}>Delete</button>
            <Link to={`/gift/${props.id}`} >Gift this user</Link>
        </div>
    )
}

export default AnswerDetails;