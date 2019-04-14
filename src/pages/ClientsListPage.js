import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientsList from '../components/ClientsList/ClientsList';
import MockBackend from '../MockBackend';

class ClientsListPage extends Component {
    state = { clients: MockBackend.listClients() }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>LISTADO DE CLIENTES</h1>
                    <Link to='/addClient'>
                        <button>Add client</button>
                    </Link>
                </div>
                <ClientsList clients={this.state.clients} />
            </div>
        )
    }
}

export default ClientsListPage;
