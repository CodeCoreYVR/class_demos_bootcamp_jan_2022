import QuestionDetails from './QuestionDetails';
import { Component } from 'react';
import questionIndexData from '../questionIndexData'

class QuestionIndexPage extends Component {
    state = {
        questions: questionIndexData
    }
    render() {
        return (
            <ul>
                {
                    this.state.questions.map((e, i) => {
                        return <li key={i}>{e.id} - {e.title}</li>
                    })
                }
            </ul>
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