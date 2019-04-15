import React, { Component } from 'react';
import MockBackend from '../MockBackend';
import TextInput from '../components/TextInput/TextInput';
import { Redirect } from 'react-router-dom';

class AddClientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', firstName: '', lastName: '', age: '', email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addClient = this.addClient.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addClient(event) {
        event.preventDefault();
        
        const { username, firstName, lastName, age, email } = this.state;

        const newClient = {
            name: username.toLowerCase(),
            firstName,
            lastName,
            age,
            email
        };

        try {
            MockBackend.addClient(newClient);
            alert('Client added successfully');
            this.setState({ added: true });
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        if(this.state.added){
            return <Redirect to='/clientsList' />
        }

        return (
            <div>
                <h1>ADD CLIENT</h1>
                <form onSubmit={this.addClient}>
                    <TextInput label="USERNAME" name='username' value={this.state.username} onChange={this.handleChange} placeholder='E.g. John123' />
                    <TextInput label="FIRST NAME" name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='E.g. John' />
                    <TextInput label="LAST NAME" name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='E.g. Smith' />
                    <TextInput label="AGE" name='age' value={this.state.age} onChange={this.handleChange} placeholder='E.g. 30' />
                    <TextInput label="E-MAIL" name='email' value={this.state.email} onChange={this.handleChange} placeholder='E.g. mail@upshow.com' />
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

export default AddClientPage;
