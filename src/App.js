import React, { Component } from 'react';
import './App.css';
import MockBackend from './MockBackend';

import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ClientsListPage from './pages/ClientsListPage';
import AddClientPage from './pages/AddClientPage';
import AddLocalPage from './pages/AddLocalPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: MockBackend.listClients()
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route path='/clientsList' exact component={ClientsListPage}/>
                    <Route path='/addClient' exact component={AddClientPage}/>
                    <Route path='/addLocal' exact component={AddLocalPage}/>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;