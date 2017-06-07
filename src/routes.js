import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';


const Greeting = () =>{
    return <div>Hey there!</div>;
};
//IndexRoute - дає компоненті виводитись під "/"" 
//але всеодно виводиться всередині App:  {this.props.children}
export default(
    <Route path="/" component={App} >
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
    </Route>
);

//якщо App містить в собі Greeting то він є батьківський і Greeting ми
//викликаємо в App:  {this.props.children}

//google.com/ ==> render App

//      /       App
//      /greet  App,Greeting
//      /greet2 App,Greeting
//      /greet3 App,Greeting