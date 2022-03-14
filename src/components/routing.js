import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from '../container/App';
import FormContainer from '../container/formsComponent';


class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/enquiries" component={FormContainer}></Route>
            </BrowserRouter>
        )
    }
}

export default Routing;