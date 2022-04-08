import AnswerDetails from './AnswerDetails';
import { useState, useEffect } from 'react'
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList'
import '../App.css';
// import questionData from '../questionData';
import { Question } from '../requests';

export default function QuestionShowPage(props){
    const [question, setQuestion] = useState({});

    useEffect(() => {
        Question.show(props.match.params.id)
        .then((fetchedAPIQuestion) => {
            setQuestion(fetchedAPIQuestion)
        })
    }, [])

    const deleteAnswer = id => {
        const { answers, ...rest } = question;
        setQuestion(
            {
                answers: answers.filter(a => a.id !== id),
                ...rest
            }
        )
    }
    const { title, body, author, view_count, created_at } = question;

    return (
        <div>
            <QuestionDetails 
            title={title}
            body={body}
            author={author}
            created_at={created_at}
            view_count={view_count}
            />
             <AnswerList list={question.answers} deleteTheAnswer={(id) => deleteAnswer(id)} />
        </div>
    )
}

// class QuestionShowPage extends Component {
//     // two ways to for declaring state
//     constructor(props) {
//         super(props);
//         this.state = { stateQuestion : {} }
//         // bind the key word this in the method
//         // so the key word `this` is always the class QuestionShowPage
//         this.delete = this.delete.bind(this);
//         // this.deleteTheAnswer = this.deleteTheAnswer.bind(this);
//     }
//     // state = {
//     //     question: questionData,
//     //     times: 1
//     // }

//     componentDidMount(){
//         // Question.show(7) //just hard code to fetch question 45 for now
//         Question.show(this.props.match.params.id) //not hard coded anymore - we have access to params and the method match through our router
//         .then((fetchedAPIquestion) => {
//             this.setState((state) => {
//                 return {
//                     stateQuestion : fetchedAPIquestion
//                 }
//             })
//         })
//     }

//     componentDidUpdate(){
//         console.log('the state has been updated with the fetched data')
//     }

//     delete() {
//         this.setState({
//             question: null
//         })
//     }
//     deleteTheAnswer(id) {
//         this.setState({
//             question: {
//                 ...this.state.question,
//                 answers: this.state.answers.filter(a => a.id !== id),
//             }
//         })
//     }
//     render() {
//         const question = this.state.stateQuestion
//         return (
//             // styles are in camelcased
//             // for using a separate stylesheet:
//             // 1. import it
//             // 2. put the name inside className attribute
//             <div style={{ marginLeft: "2rem" }} className="App">
//                 <QuestionDetails
//                     title={question.title}
//                     body={question.body}
//                     author={question.author}
//                     created_at={question.created_at}
//                     view_count={question.view_count}
//                 // except the strings, all the other values should be inside the {}.
//                 // e.g. view_count={100} is_admin={false} created_at={new Date()} author={{full_name: "Admin User"}}
//                 />
//                 {/* this key prop should be unique in the array of the elements */}
//                 {/* {
//                 [
//                     <AnswerDetails key={0} body="red" author_name="AAA" created_at="2022-04-03" />,
//                     <AnswerDetails key={1} body="yellow" author_name="BBB" created_at="2022-04-02" />,
//                     <AnswerDetails key={2} body="blue" author_name="CCC" created_at="2022-04-04" />,
//                     <AnswerDetails key={3} body="green" author_name="DDD" created_at="2022-04-09" />,
//                 ]
//             } */}
//                 <button onClick={this.delete}>Delete The Question</button>
//                 <AnswerList list={question.answers} deleteTheAnswer={(id) => this.deleteTheAnswer(id)} />
//             </div>
//         )
//     }
// }



// export default QuestionShowPage;