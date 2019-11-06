import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import FindGroup from './FindGroup';
import CreateGroup from './CreateGroup';
import Profile from './Profile'
import Settings from './Settings';

const Main = () => (
    <main style={{height: '100%'}} >
        <Switch>
            <Route exact path ='/#/' componenent={Home}/>
            <Route exact path ='/#/find-group' componenent={FindGroup}/>
            <Route exact path ='/#/create-group' componenent={CreateGroup}/>
            <Route exact path ='/#/profile' componenent={Profile}/>
            <Route exact path ='/#/settings' componenent={Settings}/>
        </Switch>
    </main>
)

export default Main;