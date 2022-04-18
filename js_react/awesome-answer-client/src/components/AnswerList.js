import AnswerDetails from './AnswerDetails'

const AnswerList = (props) => {
    // we can only return one react element(or an array of elements) from the function
    const answers = props.list
    return (
        <div>
            <h4>Answer List</h4>
            <ul>
                {
                    answers ?
                        answers.map((e, i) => {
                            return <AnswerDetails key={i} body={e.body}
                                author_name={e.author_name}
                                created_at={e.created_at}
                                id={e.id}
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