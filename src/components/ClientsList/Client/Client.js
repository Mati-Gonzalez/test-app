import React from 'react';

const Client = (props) => {
    return (
        <div>
            <div style={{ border: '1px solid gray', padding: '20px', margin: '2px 0px' }}>
                <div><text>Name: {props.name}</text></div>
                <div><text>Age: {props.age}</text></div>
                <div><text>E-mail: {props.email}</text></div>
                <div><text>First name: {props.firstName}</text></div>
                <div><text>Last name: {props.lastName}</text></div>
            </div>
        </div>
    );
}

export default Client;
