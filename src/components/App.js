import React from "react";


class App extends React.Component{ //is not a functional component and does not support hooks
    
    constructor(props){
        super(props); //calls React.Component's constructor and sets the value of the prop
        console.log("Props ===>",props);
        console.log(props.data);
        const {data} = props;
    }

    render(){ //reuired
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default App;