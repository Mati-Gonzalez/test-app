import React from 'react';
import Client from './Client/Client';

const ClientsList = (props) => {
    return (
        <div>
            {props.clients.map(item => {
                return (
                    <Client
                        id={item.id}
                        name={item.name ? item.name : '-'}
                        age={item.age ? item.age : '-'}
                        email={item.email ? item.email : '-'}
                        firstName={item.firstName ? item.firstName : '-'}
                        lastName={item.lastName ? item.lastName : '-'}
                        favoriteVenues={item.favoriteVenues}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
}

export default ClientsList;
