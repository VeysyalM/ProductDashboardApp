import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LandingPage from './LandingPage';
import ProductFormPage from './ProductFormPage';
import ProductListingsPage from './ProductListingsPage';
import CreateNewUserPage from './CreateNewUserPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/products/add">
                    <ProductFormPage/>
                </Route>
                <Route path="/products/edit/:pid">
                    <ProductFormPage/>
                </Route>
                <Route path="/products">
                    <ProductListingsPage/>
                </Route>
                <Route path = "/createNewUser">
                    <CreateNewUserPage/>
                </Route>
                <Route path="/">
                    <LandingPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;