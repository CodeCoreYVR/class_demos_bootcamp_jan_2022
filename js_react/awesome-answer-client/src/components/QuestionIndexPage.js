import QuestionDetails from './QuestionDetails';
import { Component } from 'react';
// import questionIndexData from '../questionIndexData';
import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests'

class QuestionIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = { questions: []}
        this.createNewQuestion = this.createNewQuestion.bind(this)
    }

    componentDidMount(){
        Question.index()
        .then((questionsData) => {
            this.setState((state)=>{
                return {
                    questions: questionsData
                }
            })
        })
    }
    
    deleteQuestion(id) {
        console.log(id)
        // we cant reset the value of the state in this way
        // this.state.questions = this.state.questions.filter(q => q.id != id)
        // you can only reset the value by using this.setState()

        this.setState({
            questions: this.state.questions.filter(q => q.id != id)
        })
        // this.setState((state, props) => {
        //     // sth here
        //     return {
        //         questions: this.state.questions.filter(q => q.id != id)
        //     }
        // })
    }

    createNewQuestion(params) {
        this.setState({
            questions: [
                params,
                ...this.state.questions
            ]
        })
    }

    render() {
        return (
            <>
                <ul>
                    {
                        this.state.questions.map((e, i) => {
                            return <li key={i}>{e.id} - {e.title} <button onClick={() => { this.deleteQuestion(e.id) }}>Delete</button> </li>
                        })
                    }
                </ul>
                <NewQuestionForm submitForm={(params) => this.createNewQuestion(params)} />
            </>
        )
    }
}

//#region functional component
// const QuestionIndexPage = () => {
//     const data = [
//         { title: "title1", body: "body1", author: { full_name: "name1" }, view_count: 100, created_at: new Date() },
//         { title: "title2", body: "body2", author: { full_name: "name2" }, view_count: 100, created_at: new Date() },
//         { title: "title3", body: "body3", author: { full_name: "name3" }, view_count: 100, created_at: new Date() },
//         { title: "title4", body: "body4", author: { full_name: "name4" }, view_count: 100, created_at: new Date() },
//     ]

//     return (
//         <div>
//             {
//                 data.map((e, i) => {
//                     return <QuestionDetails
//                         key={i}
//                         title={e.title}
//                         body={e.body}
//                         author={e.author}
//                         view_count={e.view_count}
//                         created_at={e.created_at}
//                     />
//                 })
//             }
//         </div>
//     )
// }
//#endregion

export default QuestionIndexPage;