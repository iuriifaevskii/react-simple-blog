import React, {Component} from 'react';

class PostsIndex extends Component{
    componentWillMount(){
        console.log('this would be a good time to call an action creater fetch posts');
    }
    //
    //componentWillMount - компонент будет примонтирован. 
    //В данный момент у нас нет возможности посмотреть DOM элементы
    //
    
    render(){
        return(
            <div>List of blogs</div>
        );
    }
}

export default PostsIndex;