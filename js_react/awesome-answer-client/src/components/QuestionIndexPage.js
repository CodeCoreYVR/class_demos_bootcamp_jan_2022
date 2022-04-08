import QuestionDetails from './QuestionDetails';
import { useState, useEffect } from 'react';
// import questionIndexData from '../questionIndexData';
import { Question } from '../requests';
import { Link } from 'react-router-dom';

export default function QuestionIndexPage() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        Question.index()
        .then((questionsData) => {
            setQuestions(questionsData)
        })
    }, [])

    const deleteQuestion = (id) => {
        setQuestions(
            questions.filter(q => q.id !== id)
        )
    }

    return(
        <div>
            { questions.map((e, i) => {
                return (
                    <h3 key={i}>{e.id} - <Link to={`/questions/${e.id}`}>{e.title}</Link> <button onClick={() => { deleteQuestion(e.id) }}>Delete</button> </h3>
                )
            })}
        </div>
    )
}

// class QuestionIndexPage extends Component {
//     constructor(props){
//         super(props);
//         this.state = { questions: []}
//     }

//     componentDidMount(){
//         Question.index()
//         .then((questionsData) => {
//             this.setState((state)=>{
//                 return {
//                     questions: questionsData
//                 }
//             })
//         })
//     }
    
//     deleteQuestion(id) {
//         console.log(id)
//         this.setState({
//             questions: this.state.questions.filter(q => q.id != id)
//         })
        
//     }

//     render() {
//         return (
//             <>
//                 <ul>
//                     {
//                         this.state.questions.map((e, i) => {
//                             return <li key={i}>{e.id} - <Link to={`/questions/${e.id}`}>{e.title}</Link> <button onClick={() => { this.deleteQuestion(e.id) }}>Delete</button> </li>
//                         })
//                     }
//                 </ul>
//             </>
//         )
//     }
// }



// export default QuestionIndexPage;