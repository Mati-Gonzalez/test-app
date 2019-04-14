import React from 'react';

const Client = (props) => {
    const styles = {
        spanLabel: {
            fontWeight: 'bold'
        }
    }

    let favorites = null;

    if (props.favoriteVenues) {
        favorites = (
            <div>
                {props.favoriteVenues.map(venue => {
                    return (
                        <div key={venue.id}>
                            {venue.name}
                            <span
                                style={{ color: 'darkred', fontSize: '12px', padding: '0px 10px' }}
                                onClick={props.onRemove.bind(this, props.id, venue.id)}
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
                    <div><span style={styles.spanLabel}>Id: </span> {props.id}</div>
                    <div><span style={styles.spanLabel}>Name: </span>{props.name}</div>
                    <div><span style={styles.spanLabel}>Age: </span>{props.age}</div>
                    <div><span style={styles.spanLabel}>E-mail: </span>{props.email}</div>
                    <div><span style={styles.spanLabel}>First name: </span>{props.firstName}</div>
                    <div><span style={styles.spanLabel}>Last name: </span>{props.lastName}</div>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold' }}>Favorite Venues:</div>
                    {favorites}
                </div>
            </div>
        </div>
    );
}

export default Client;
