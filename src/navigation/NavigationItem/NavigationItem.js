import React from 'react';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
    const styles = {
        container: {
            'padding': '0px 20px',
            'height': '100%',
            'display': 'flex',
            'alignItems': 'center',
            ':hover': {
                'backgroundColor': 'darkgray',
                'border-bottom': '4px solid darkred',
            },
        },
        text: {
            'color': "white",
            'textDecorationLine': 'none',
        }
    }


    return (
        <li style={styles.container}>
            <NavLink to={props.link} style={styles.text}>{props.title}</NavLink>
        </li>
    );
}

export default Radium(NavigationItem);
