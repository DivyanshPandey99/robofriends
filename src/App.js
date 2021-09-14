import React, {Component} from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:'',
        }
    }
    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response=> response.json())
            .then( users=>this.setState({robots:users}) )
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{color:'#0ccac4'}}>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}
export default App;