import React from "react";
import Navigation from "./Navigation/index";
import NewInput from "./NewInput/index";
import Button from "./Button";


class App extends React.Component{

    constructor(props){
        super(props);
    }

    clickHandler(e){
        console.log("Clicked!!",e);
        console.log("Clicked!!",e.target);
    }

    render(){
        const {data,data1,data2} = this.props;
        return (
            <div>
                <Navigation hometitle={data} abouttitle={data1} contacttitle={data2}/>
                <div>
                    {/* <form> */}
                        <NewInput label="name"/>
                        <br/>
                        <NewInput label="age"/>
                        <br/>
                        <NewInput label="email"/>
                        <br/>
                        <Button clickHandler={this.clickHandler}/>
                    {/* </form> */}
                </div>
            </div>
        )
    }
}

export default App;