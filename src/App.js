import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import TaskList from './components/TaskList'
import Email from './components/Email'
import Profile from './components/Profile'
import Contacts from './components/Contacts'
import Chats from './components/Chats'
import Deals from './components/Deals'
import Settings from './components/Settings'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
 
function App() {
    return (
        <div className='app-container'>
          <Sidebar/>
          <div className='home-container'>
              <Header/>
              <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/tasks" component={TaskList} />
                  <Route exact path="/email" component={Email} />
                  <Route exact path="/me" component={Profile} />
                  <Route exact path="/contacts" component={Contacts} />
                  <Route exact path="/chats" component={Chats} />
                  <Route exact path="/deals" component={Deals} />
                  <Route exact path="/settings" component={Settings} />
              </Switch>
          </div>
        </div>
    );
}

export default App;