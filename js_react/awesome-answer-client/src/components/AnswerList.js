import AnswerDetails from './AnswerDetails'

const AnswerList = (props) => {
    const answers = props.list
    // we can only return one react element(or an array of elements) from the function
    return (
        <div>
            <h4>Answer List:</h4>
            <ul>
                {
                    answers ?
                    answers.map((e, i) => {
                    return <AnswerDetails key={i} body={e.body}
                        author_name={e.author_name}
                        created_at={e.created_at}
                        deleteTheAnswer={() => props.deleteTheAnswer(e.id)}
                    />
                    })
                    :
                    null
                }
            </ul>
            
        </div>
    )
}

export default AnswerList;