import React,{ Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render(){
  //    //const { fields:{title,categories,content}, handleSubmit } = this.props;
        //те ж саме: 
        const handleSubmit = this.props.handleSubnit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        
        console.log(title);
        //{...title}
        //formProps = {title} // => ...title
        //onChange = {title.onChange} 

        return(
            <form onSubmit={handleSubmit}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
//пишемо конфігурації до нашої редакс форми
export default reduxForm({
    form: 'PostsNewForm', // ім*я форми це унікальний токен
    fields: ['title','categories','content']
})(PostsNew);

//user types smth in.. record it on application state
//три рядки вище приблизно те ж що і:
// state === {
//  form : {
//      PostNewForm:{
//          title:'...',
//          categories:'...',
//          content:'...'
//      }
//  }
// }