import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import HomePage from './components/HomePage/HomePage'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import People from './components/People/People'
import Profile from './components/Profile/Profile'
import Explore from './components/Explore/Explore'

export default (
    <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/homepage' component={HomePage} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/people' component={People} />
        <Route path='/profile' component={Profile} />
        <Route path='/explore' component={Explore} />
    </Switch>
)