import React, { Component } from 'react';
import TextInput from '../components/TextInput/TextInput';
import MockBackend from '../MockBackend';

class AddLocalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venueName: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addVenue = this.addVenue.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addVenue() {
        const { venueName } = this.state;

        const newVenue = {
            name: venueName.toLowerCase()
        };

        try {
            MockBackend.addVenue(newVenue);
            alert('Venue added successfully');
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return (         
                <div>
                    <h1>ADD VENUE</h1>
                    <form onSubmit={this.addVenue}>
                        <TextInput 
                            label="VENUE NAME" 
                            name='venueName' 
                            value={this.state.venueName} 
                            onChange={this.handleChange} 
                            placeholder='Type venues name...'/>
                        <input
                            type='submit'
                            value='Submit'
                            style={{ background: 'darkred', color: 'white', border: '1px solid black', fontSize: '20px', padding: '5px 20px' }}
                        />
                    </form>
                </div>
        );
    }
}

export default AddLocalPage;
