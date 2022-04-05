import AnswerDetails from './AnswerDetails'

const AnswerList = (props) => {
    // we can only return one react element(or an array of elements) from the function
    return (
        props.list.map((e, i) => {
            return <AnswerDetails key={i} body={e.body}
                author_name={e.author_name}
                created_at={e.created_at}
                deleteTheAnswer={() => props.deleteTheAnswer(e.id)}
            />
        })
    )
}

export default AnswerList;