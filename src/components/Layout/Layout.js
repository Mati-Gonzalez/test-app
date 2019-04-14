import React from 'react';
import Toolbar from '../../navigation/Toolbar/Toolbar';

const Layout = (props) => {
    return(
        <div style={{margin: '100px 50px'}}>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
