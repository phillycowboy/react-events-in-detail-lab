// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component{
    onRecieveCoordinates = (event) => {
        let mouseCoordinates = [event.clientX, event.clientY]
        console.log(mouseCoordinates)
        
    }
    render(){
        return(
            <div>
                <button onClick={this.props.onRecieveCoordinates(mouseCoordinates)}>Coordinates</button>
            </div>
        )
    }
}
export default CoordinatesButton;