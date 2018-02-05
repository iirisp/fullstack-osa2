import React from 'react';
import axios from 'axios';
import Person from './components/Person'
import NewPerson from './components/NewPerson'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: ''
        }
    }

    componentDidMount() {
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            this.setState({ persons: response.data })
          })
        }
    



    addPerson = (event) => {
        event.preventDefault()
        console.log('nappia painettu')
        var found = this.state.persons.find((person => person.name === this.state.newName))

        if(found === undefined) {

            const nameObject = {
                name: this.state.newName,
                number : this.state.newNumber
            }

            const persons = this.state.persons.concat(nameObject)

            this.setState({
                persons: persons,
                newName: '',
                newNumber: ''
            })
        }
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
    }


    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <NewPerson name={this.state.newName} nameHandle={this.handleNameChange} 
                    number={this.state.newNumber} numberHandle={this.handleNumberChange}/>
                </form>

                <h2>Numerot</h2>
                <table>
                    <tbody>
                        {this.state.persons.map(person => <Person key={person.name} person={person}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App
