import React from 'react';
import { useState } from 'react';

function CreateUser() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

function makeUser(){
    let data = {name,age,address}
    console.warn("hello make User",data);
}

    return (
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)} 
            name="name" id="" value={name} />
            <br />
            <br />
            <input type="text" onChange={(e)=>setAge(e.target.value)}
             name="age" id="" value={age}/>
            <br />
            <br />
            <input type="text" onChange={(e)=>setAddress(e.target.value)}
             name="address" id="" value={address}/>
            <br />
            <br />
            <button onClick={makeUser}>Create Users</button>
        </div>
    )
}

export default CreateUser;
