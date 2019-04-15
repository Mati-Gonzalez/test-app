import React, { Component } from 'react';
import MockBackend from '../../../MockBackend';

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteVenues: MockBackend.getClientFavoriteVenues(this.props.id),
        }
    }

    render() {
        const styles = {
            spanLabel: {
                fontWeight: 'bold'
            }
        }

        let favorites = null;

        if (this.state.favoriteVenues) {
            favorites = (
                <div>
                    {this.state.favoriteVenues.map(venue => {
                        return (
                            <div key={venue.id}>
                                {venue.name}
                                <span
                                    style={{ color: 'darkred', fontSize: '12px', padding: '0px 10px' }}
                                    onClick={this.props.onRemove.bind(this, this.props.id, venue.id)}
                                >
                                    remove
                            </span>
                            </div>
                        );
                    })}
                </div>
            )
        } else {
            favorites = (<div>No tiene favoritos</div>);
        }

        return (
            <div>
                <div style={{ display: 'flex', border: '1px solid gray', padding: '20px', margin: '2px 0px' }}>
                    <div style={{ flex: 1 }}>
                        <div><span style={styles.spanLabel}>Id: </span> {this.props.id}</div>
                        <div><span style={styles.spanLabel}>Name: </span>{this.props.name}</div>
                        <div><span style={styles.spanLabel}>Age: </span>{this.props.age}</div>
                        <div><span style={styles.spanLabel}>E-mail: </span>{this.props.email}</div>
                        <div><span style={styles.spanLabel}>First name: </span>{this.props.firstName}</div>
                        <div><span style={styles.spanLabel}>Last name: </span>{this.props.lastName}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold' }}>Favorite Venues:</div>
                        {favorites}
                    </div>
                </div>
            </div>
        );
    }
}

export default Client;
