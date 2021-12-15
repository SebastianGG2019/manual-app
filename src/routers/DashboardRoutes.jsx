import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Capitulo1 } from '../components/capitulo1/Capitulo1'
import { capitulo2 } from '../components/capitulo2/capitulo2'
import { Main } from '../components/main/Main'
import { Nav } from '../components/nav/Nav'
import { LateralBar } from "../components/lateralBar/LateralBar";

export const DashboardRoutes = () => {
    return (
        <>
            <Nav></Nav>
                <main className="principio container background">
                <LateralBar></LateralBar>
                <div>
                    <Switch>
                            <Route exact path="/main" component={Main} />
                            <Route exact path="/capitulo1" component={Capitulo1} />
                            <Route exact path="/capitulo2" component={capitulo2} />
                            <Redirect to="/main" />
                    </Switch>
                </div>
            </main>
        </>
    )
}