import React from "react";
import Navigation from "./Navigation/index";


class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {data,data1,data2} = this.props;
        return (
            <div>
                <Navigation hometitle={data} abouttitle={data1} contacttitle={data2}/>
            </div>
        )
    }
}

export default App;