const QuestionDetails = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.body}
                <br />
                By {props.author.full_name}
            </p>
            <p>
                <small>
                    Seen {props.view_count} times &nbsp;
                    {props.created_at.toLocaleString()}
                </small>
            </p>
        </div>
    )
}

export default QuestionDetails;