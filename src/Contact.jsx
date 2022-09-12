import React,{useState} from "react";

class Contact extends React.Component {


    constructor() {
        super();
        this.state = {
            name: "anil",
            age: "45",
            school: "Harvard"
        }
    }
    componentDidMount() {
        console.warn("props",this.props.name)
        // console.warn("did Mount")
    }
    componentDidUpdate() {
        console.warn(" Update",this.props.name);
    }

    render() {
        let data ="hello i am contact Us page"
        return (<div>
            <h1>{data}</h1>
            <h1> {this.state.name} </h1>    
            <h1>{this.state.age}</h1>
            <h1>{this.state.school}</h1>
            <button onClick={() => { this.setState({ name: "anil Sindhu" }) }}>Update Name</button>
            <br />
            <button onClick={() => { this.setState({ age: "55" }) }}>Update age</button>
            <br />
            <button onClick={() => { this.setState({ school: "madarchod public School" }) }}>Update School</button>
            <h2>{this.props.name}</h2>




        </div>)
    }
}

export default Contact;


//lifcycle are only used in class component and state also
//lifcycle are constructor,componentDidMount,componentDidUnmount,etc