import React, {Component} from "react";
import './SearchBox.css'
class SearchBox extends Component{
    render(){
        return(
            <div>
                <input type='search' 
                placeholder='search robots'
                onChange={this.props.searchChange}
                />
            </div>    
        );
    }
}
export default SearchBox;