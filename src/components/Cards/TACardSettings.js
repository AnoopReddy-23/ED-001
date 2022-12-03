import React from "react";
import {Button,Card} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios'
// components

export default function TACardSettings() {

  let [users, setUsers] = useState([])
    const [error, seterror] = useState('')
    let newArray;
    let [assignments, setAssignments] = useState([])

    useEffect(()=>{
      let year=localStorage.getItem("year")
      axios.get('/get-assignments')
      .then(response=>{
        console.log(response.data.assignments)
        console.log(year)
        setUsers(response.data.assignments)
        newArray= users.filter((item=> item.year===year))
        setAssignments(newArray)
        console.log(assignments)
      })
      .catch(error=>console.log(error))
    }, [])

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Submit Assignment</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          
        {
          users.map((item)=>
            <div className='mx-auto col-12 col-md-6 col-lg-4 container-fluid'>
              <Card style={{ width: "20rem" }} className='mx-auto mt-3 py-3 card text-center'>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{item.type}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button variant="primary">Submit</Button>
                </Card.Body>
              </Card>
            </div>
        )}

        </div>
      </div>
    </>
  );
}
