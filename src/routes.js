import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () =>{
    return <div>Hey there!</div>;
};

export default(
    <Route path="/" component={App} >
        <Route path="greet" component={Greeting} />
        <Route path="greet2" component={Greeting} />
        <Route path="greet3" component={Greeting} />
    </Route>
);
//google.com/ ==> render App

//      /       App
//      /greet  App,Greeting
//      /greet2 App,Greeting
//      /greet3 App,Greeting