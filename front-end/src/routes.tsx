import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Records from './pages/Records';

const Routes = () => { 

   return <BrowserRouter>
        
        <Header/>
        <Switch>
            <Route path="/" exact >

                
                <Home /> 

            </Route>

            <Route path="/records">

               <Records />

            </Route>

        </Switch>

    
    </BrowserRouter>



}

export default Routes;