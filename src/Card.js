import React, {Component} from "react";
import './Card.css';
class Card extends Component{
    render(){
        return(
            <div className="card">
                <img alt='Jane Doe' src={`https://robohash.org/${this.props.id}?size=200x200`} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}
export default Card;