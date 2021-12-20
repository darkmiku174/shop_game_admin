import { React, Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from "./components/User/Layout"

import routes from './routes'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {this.showContentMenus(routes)}
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={route.main}
                    />
                );
            });
        }
        return <Routes>{result}</Routes>;
    }
}

export default App;

