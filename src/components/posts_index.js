import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';  //mapDispatchToProps немає бо ми упростили функцію, то це можна не писати
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }
    //
    //componentWillMount - компонент будет примонтирован. 
    //В данный момент у нас нет возможности посмотреть DOM элементы
    //
    
    renderPosts(){
        return this.props.posts.map((post) => 
            <li className="list-group-item" key={post.id}>
                <Link to={`posts/${post.id}`}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </Link>
            </li>
        );
    }

    render(){
        console.log(this.props.posts);
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

//довгий спосіб
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts},dispatch);//{fetchPosts:fetchPosts}
// }
//export default connect(null,mapDispatchToProps)(PostsIndex);

function mapStateToProps(state){
    return{
        posts : state.posts.all
    };
}

//короткий спосіб (mapDispatchToProps можна не писати)
export default connect(mapStateToProps,{fetchPosts})(PostsIndex); //fetchPosts замість{fetchPosts:fetchPosts}