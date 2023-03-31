import React from "react";
import Navigation from "./Navigation/index";
import NewInput from "./NewInput/index";


class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {data,data1,data2} = this.props;
        return (
            <div>
                <Navigation hometitle={data} abouttitle={data1} contacttitle={data2}/>
                <div>
                    <form>
                        <NewInput label="name"/>
                        <br/>
                        <NewInput label="age"/>
                        <br/>
                        <NewInput label="email"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;