import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import {Route , NavLink, Switch,} from 'react-router-dom';
import asyncComponent from '../../ReactHOC/AsyncComponent';

//import axios from '../../axios';


const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth:true
    }
    
    render () {

        return (
            
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                 to ="/posts/" 
                                 exact
                                 activeClassName = "my-active"
                                 activeStyle = {{
                                     color : 'blue',
                                     textDecoration : 'underline'
                                 }}>Home</NavLink></li>
                            <li><NavLink to = {{
                                pathname: '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>NewPost</NavLink></li>
                        </ul>
                    </nav>
                </header>  
                {/*<Route path = '/' exact render = {() => <h1>Home 1</h1>}/> 
                <Route path = '/' render = {() => <h1>Home 2</h1>}/> */} 
                <Switch>
                    {this.state.auth ? <Route path = '/new-post' exact component = {AsyncNewPost}/> :null}           
                    <Route path = '/posts/' component = {Posts}/>   
                    <Route render = {()=> <h1> Not Found</h1>}/>
                    {/*<Redirect from = '/' to = '/posts' />*/}
                    {/*<Route path = '/' component = {Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;

