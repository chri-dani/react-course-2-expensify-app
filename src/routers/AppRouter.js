import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFountPage.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> 
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;