import React, { useEffect, useState } from "react";

function About() {
    // const [name, setName] = useState("anil bhaiya");
    // const [age, setAge] = useState(45);
    // const [school,setSchool]=useState("harvard public School");


    // useEffect(() => {
    //     console.warn("fucntion props",props.name);
    // })
    // useEffect(() => {
    //     console.warn("function props update",props.name);
    // },[props.name])

    const [val, setVal] = useState("anil");

    const test = (e) => {
        console.log("test Function", e.target.value)
        setVal(e.target.value)
    }


    let data = "About Us";
    return (<div>

        <h1>{data}</h1>
        <input type="text" onChange={test} value={val}/>
        <button onClick={()=>alert(val)}>Get Value</button>



        {/* <h2>{props.name}</h2> */}
        {/* <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>School:{school}</h1>
        <button onClick={() => setName("anil Sindhu BHaiya")}>Update Name</button>
        <br />
        <button onClick={()=>setAge(55)}>Update Age</button>
        <br />
        <button onClick={()=>setSchool("Chutiya publix School")}>Update School</button> */}
    </div>
    )
}

export default About;