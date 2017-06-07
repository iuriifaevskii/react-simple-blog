import React,{ Component } from 'react';
import { reduxForm } from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
    render(){
  //    //const { fields:{title,categories,content}, handleSubmit } = this.props;
        //те ж саме: 
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;

        //console.log(title);
        //{...title}
        //formProps = {title} // => ...title
        //onChange = {title.onChange} 

  
        //<form onSubmit={handleSubmit(//an action creator)}>   
        return(
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error:''}
                    </div>
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

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a username';
    }

    return errors;
}

//пишемо конфігурації до нашої редакс форми
export default reduxForm({
    form: 'PostsNewForm', // ім*я форми це унікальний токен
    fields: ['title','categories','content'],
    validate 
}, null, { createPost })(PostsNew); //createPost з action в діспач
//схожа на connect
//connect: 1 аргумент mapStateToProps,2 аргумент mapDispatchToProps
//reduxForm: 1 аргумент є form config, 2 аргумент mapStateToProps, 3 аргумент mapDispatchToProps 

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