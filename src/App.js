import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import './App.css'
import SearchBox from './SearchBox';
import scroll from './Scroll';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots : robots})});
    }
    
    onSearchChange = (event)=>{
        this.setState({searchfield : event.target.value})
        
    }
    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        } )
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <scroll>
                    <CardList robots={filterRobots}/>
                </scroll>
            </div>
        );
    }
}

export default App;