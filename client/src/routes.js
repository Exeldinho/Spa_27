import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom"
import {MainPage} from "./pages/MainPage.js"
import {AboutPage} from "./pages/AboutPage.js"
import {AppPage} from "./pages/AppPage.js";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Switch>
                <Route path="/app">
                    <AppPage/>
                </Route>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path = "/" exact>
                <MainPage/>
            </Route>
            <Redirect to = "/"/>
            <Route path ="/about">
                <AboutPage/>
            </Route>
        </Switch>
    )
}
