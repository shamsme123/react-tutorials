import React from "react";

class Button extends React.Component{

    constructor(props){
        super(props);
    }  

    render(){
        const {clickHandler} = this.props;
        console.log("The value of this in render ===>",this);
        return (
            <button onClick={clickHandler}>Clcik Me</button>
        )
    }
}

export default Button;