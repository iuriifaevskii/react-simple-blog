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
    
    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add Post
                    </Link>
                </div>
                List of blogs
            </div>
        );
    }
}

//довгий спосіб
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts},dispatch);//{fetchPosts:fetchPosts}
// }
//export default connect(null,mapDispatchToProps)(PostsIndex);



//короткий спосіб (mapDispatchToProps можна не писати)
export default connect(null,{fetchPosts})(PostsIndex); //fetchPosts замість{fetchPosts:fetchPosts}