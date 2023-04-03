import React from "react";

class NewInput extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {label} = this.props;
        return (
            <div>
                <label>Enter {label}</label> &nbsp;
                <input type="text" name={label} value="" placeholder={`Enter ${label}`} />
            </div>
        )
    }
}

export default NewInput;