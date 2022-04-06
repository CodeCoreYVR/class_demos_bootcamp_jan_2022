const QuestionDetails = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.body}
                <br />
                By {props.author ? props.author.full_name : null}
            </p>
            <p>
                <small>
                    Seen {props.view_count} times &nbsp;
                    {props.created_at ? props.created_at.toLocaleString() : null}
                </small>
            </p>
        </div>
    )
}

export default QuestionDetails;