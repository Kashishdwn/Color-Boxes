import React from 'react'
import Box from './Box'
import './ColorBoxes.css';
class ColorBoxes extends React.Component{
    static defaultProps={
        numBoxes:18,
    }
    render(){
        const boxes=Array.from({length:this.props.numBoxes}).map(()=>(
        <Box />
        ));
        return(
            <div className="ColorBoxes">
                {boxes}
            </div>
        )
    }
}
export default ColorBoxes;