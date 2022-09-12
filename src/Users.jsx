import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from 'react-bootstrap';
function Users() {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://dummy.restapiexample.com/api/v1/employees').then((data) => {

            data.json().then(result => {
                console.log("result", result);
                setUser(result.data)
            })
        })
    }, [])

    return (
        // <div>
        <>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Salery</th>
                        <th>Age</th>
                    </tr>
                    {
                        user.map((item,index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                            </tr>
                        )
                    }
                </thead>
                <tbody>



                </tbody>
            </Table>

            {/* <h1>Users</h1> */}

            {/* <Button variant="outline-primary">Primary</Button>{' '} */}


            {/* // user.map((item,i) => */}
            {/* <div key={i}>{item.name} , {item.age}</div> */}
            {/* //     ) */}
            {/* // user.length==4?<h1>yes length is good</h1>:<h1>length is not 5  </h1> */}

            {/* </div> */}
        </>
    )
}

export default Users;