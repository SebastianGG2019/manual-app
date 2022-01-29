import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Capitulo1 } from '../components/capitulo1/Capitulo1'
import { Capitulo2 } from '../components/capitulo2/Capitulo2'
import { Main } from '../components/main/Main'
import { Nav } from '../components/nav/Nav'
import { LateralBar } from "../components/lateralBar/LateralBar";
import { Capitulo3 } from '../components/capitulo3/Capitulo3'

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
                            <Route exact path="/capitulo2" component={Capitulo2} />
                            <Route exact path="/capitulo3" component={Capitulo3} />
                            <Redirect to="/main" />
                    </Switch>
                </div>
            </main>
        </>
    )
}