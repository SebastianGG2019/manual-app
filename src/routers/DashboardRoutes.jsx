import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Main } from '../components/main/Main'

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/main" component={Main} />
                    <Redirect to="/main" /> 
                </Switch>
            </div>
        </>
    )
}