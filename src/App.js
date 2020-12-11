import React, { Component } from 'react';
import Cardlist from './Cardlist';
// import {robots} from './robots';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';



class App extends Component{
    constructor() {
        super()
        this.state = {
                robots: [],
                searchfield: ''
            }
        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState ({robots: users}));
            }
    
    
    
        onSearchChange = (event) => {
            this.setState({searchfield :event.target.value})
        }
            

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
        <div className='tc'>
        <h1 className='f2'>Robo friends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll> 
        <Cardlist robots={filterRobots} />
        </Scroll>
        </div>
    );
}
}

export default App;