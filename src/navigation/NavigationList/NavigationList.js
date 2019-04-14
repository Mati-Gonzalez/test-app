import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

const itemsMenu = [
    {
        id: 1,
        title: "Clientes",
        link: "/clientsList",
    },
    {
        id: 3,
        title: "Locales",
        link: "/addLocal",
    }
];

const NavigationList = () => {
    const styles = {
        container:{
            'display': 'flex',
            'list-style': 'none',
            'height': '100%',
            'margin-top': '0',
        }
    }

    return (
        <ul style={styles.container}>
            {itemsMenu.map(item=>{
            return (
                <NavigationItem
                    key={item.id}
                    title={item.title}
                    link={item.link}
                />
            );
        })}
    </ul>
    );
}

export default NavigationList;
