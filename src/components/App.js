import React from "react";


class App extends React.Component{ //is not a functional component and does not support hooks
    
    constructor(props){
        super(props); //calls React.Component's constructor and sets the value of the prop
        console.log("The value of this ==>",this);
        //const {data,data1,data2} =  this.props;
    }

    render(){ //reuired
        const {data} = this.props;
        return (
            <div>
                Hello- {data}
            </div>
        )
    }
}

export default App;