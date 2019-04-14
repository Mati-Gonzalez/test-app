import React from 'react';

const TextInput = (props) => {
    return (
        <div>
            <div>
                <label style={{fontWeight: 'bold', fontSize: '20px'}}>{props.label}</label>
            </div>
            <div style={{margin: '20px 0px'}}>
                <input
                    type='text'
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    style={{ border: '2px solid darkred', height: '30px', padding: '0px 20px', width: '80%' }}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    );
}

export default TextInput;
