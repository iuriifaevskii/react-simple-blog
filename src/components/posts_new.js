import React,{ Component } from 'react';
import { reduxForm } from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

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
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error:''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error :''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error :''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    console.log(`validate func (value):`);
    console.log(values);

    const errors = {};

    if(!values.title){
        errors.title = 'Enter a username';
    }
    if(!values.categories){
        errors.categories = 'Enter categories';
    }
    if(!values.content){
        errors.content = 'Enter content';
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