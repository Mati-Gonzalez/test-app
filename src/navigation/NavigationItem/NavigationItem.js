import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    const styles = {
        container: {
            'padding': '0px 20px',
            'height': '100%',
            'display': 'flex',
            'align-items': 'center',
            ':hover': {
                'backgroundColor': 'darkgray',
                'border-bottom': '4px solid darkred',
            }
        },
        text: {
            'color': "white", 
            'textDecorationLine': 'none',
        }
    }


    return (
        <li style={styles.container}>
            <Link to={props.link} style={styles.text} >{props.title}</Link>
        </li>
    );
}

export default Radium(NavigationItem);
