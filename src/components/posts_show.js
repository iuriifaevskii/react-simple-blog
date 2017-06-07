import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component{
    componentWillMount(){
        this.props.fetchPost(this.props.params.post_id);
    }
    
    render(){
        const {post} = this.props;
        //перевірка треба бо загружається null на екран
        //і не встигає загрузитись контент, тому поки null виводити треба лоадер
        if(!this.props.post){
            return <div>Loading...</div>
        }
        return (
        <div>
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

export default connect(mapStateToProps,{fetchPost})(PostsShow);