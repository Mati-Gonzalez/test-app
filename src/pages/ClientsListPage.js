import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientsList from '../components/ClientsList/ClientsList';
import MockBackend from '../MockBackend';
import TextInput from '../components/TextInput/TextInput';

class ClientsListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            clients: [],
            ageFilter: '',
            venues: MockBackend.listVenues(),
            idClientAddFavorite: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onShowAll = this.onShowAll.bind(this);
        this.onAddFavorite = this.onAddFavorite.bind(this);
        this.removeVenueFromFavorite = this.removeVenueFromFavorite.bind(this);
    }

    componentDidMount() {
        const clients = MockBackend.listClients();
        const clientsWithVenues = this.getFavouriteVenues(clients);
        this.setState({ loading: false, clients: clientsWithVenues })
    }

    getFavouriteVenues(clients) {
        clients.forEach(client => {
            let favoriteVenues = MockBackend.getClientFavoriteVenues(client.id);
            client.favoriteVenues = favoriteVenues;
        })
        return clients;
    }

    removeVenueFromFavorite(clientId, venueId) {
        try {
            MockBackend.removeFavoriteVenueFromClient(clientId, venueId);
            alert('Venue removed');
            this.forceUpdate();
        } catch (error) {
            alert(error.message);
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onFilter() {
        let clients = MockBackend.listClients();
        clients = clients.filter(c => c.age >= this.state.ageFilter);
        this.setState({ clients });
    }

    onShowAll() {
        let clients = MockBackend.listClients();
        this.setState({ clients });
    }

    onAddFavorite(venueId) {
        try {
            const clientId = parseInt(this.state.idClientAddFavorite);
            MockBackend.addFavoriteVenueToClient(clientId, venueId);
            alert('Added venue to clients favorites successfully');
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        const styles = {
            buttonStyle: {
                background: 'darkred', color: 'white', border: '1px solid black', fontSize: '20px', padding: '5px 20px',
                margin: '0px 10px 10px 0px'
            }
        }
        if (this.state.loading) {
            return <div style={{ marginTop: '100px' }}>Loading...</div>
        }

        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>LIST OF CLIENTS</h1>
                    <Link to='/addClient'>
                        <button
                            style={styles.buttonStyle}
                        >
                            Add client
                        </button>
                    </Link>
                </div>
                <div style={{ width: '25%' }}>
                    <TextInput
                        name='ageFilter'
                        label='Age:'
                        value={this.state.ageFilter}
                        onChange={this.handleChange}
                        placeholder='Type a number...'
                    />
                    <button onClick={this.onFilter} style={styles.buttonStyle} >Filter</button>
                    <button onClick={this.onShowAll} style={styles.buttonStyle} >Show All</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 3 }}>
                        <ClientsList clients={this.state.clients} onRemove={this.removeVenueFromFavorite} />
                    </div>
                    <div style={{ flex: 1, margin: '0px 10px', padding: '0px 20px', border: '1px solid black', background: 'lightgray' }}>
                        <h1>ADD FAVORITES</h1>
                        <TextInput
                            name='idClientAddFavorite'
                            value={this.state.idClientAddFavorite}
                            onChange={this.handleChange}
                            label='Insert client id:'
                            placeholder='Type clients id...'
                        />
                        {this.state.venues.map(venue => {
                            return (
                                <div>
                                    <span
                                        style={{ color: 'darkred', paddingRight: '10px' }}
                                        onClick={this.onAddFavorite.bind(this, venue.id)}
                                    >
                                        +
                                    </span>
                                    {venue.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientsListPage;
