import React from 'react';
import NavigationList from '../NavigationList/NavigationList';

const Toolbar = (props) => {
    const styles = {
        Toolbar: {
            'height': '56px',
            'width': '100%',
            'position': 'fixed', /*para que est'e siempre arriba,aunque se escrolee*/
            'top': 0,
            'left': 0,
            'backgroundColor': 'darkred',
            'display': 'flex',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'boxSizing': 'border-box',
        },
        nav: {
            'height': '100%',
        }
    }
    return (
        <div>
            <header style={styles.Toolbar}>
                <nav style={styles.nav}>
                    <NavigationList />
                </nav>
            </header>
        </div>
    );
}

export default Toolbar;
