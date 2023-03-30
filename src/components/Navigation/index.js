import React from "react";


class Navigation extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log("This ====>",this);
        const {hometitle,abouttitle,contacttitle} = this.props;
        return(
            <nav>
                <ul>
                    <li>{hometitle}</li>
                    <li>{abouttitle}</li>
                    <li>{contacttitle}</li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;