import React from 'react'
import './Box.css'
import {choice} from './helper';
class Box extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // color:choice(this.props.color)
            color:`#${Math.floor(Math.random()*16777215).toString(16)}`
        }
    }
    change=()=>{
        let newColor;
        do{
            newColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
        }
        while(newColor===this.state.color);
        this.setState({color:newColor});
    }
    render(){
        return(
            <div onClick={this.change} className="Box" style={{backgroundColor:this.state.color}}></div>
        )
    }
}
export default Box;