import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component{
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.post_id);
    }
    
    onDeleteClick(){
        this.props.deletePost(this.props.params.post_id)
            .then(()=>{
                this.context.router.push('/');
            });
    }
    
    render(){
        const {post} = this.props;
        //перевірка треба, бо загружається null на екран
        //і не встигає загрузитись контент, тому поки null виводити треба лоадер
        if(!this.props.post){
            return <div>Loading...</div>
        }
        return (
        <div>
            <Link to="/">Back To Index</Link>
            <button 
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
            >
                Delete Post
            </button>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
        </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state.posts.post);
    return {
        post: state.posts.post
    };
}

export default connect(mapStateToProps,{fetchPost, deletePost})(PostsShow);