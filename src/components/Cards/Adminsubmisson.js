import React from "react";
import {useForm} from 'react-hook-form'
import {Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
//import external from "external.css"

// components

export default function Adminsubmission() {

  const {register, handleSubmit,formState:{errors}}=useForm();
  const navigate=useHistory()

  //submit the form
  const onFormSubmit=(userCredObj)=>{
    //console.log(userCredObj)
    axios.post('/add-teacher',userCredObj)
    .then(res=>{
      //console.log(res.data)
      alert(res.data.result)
      if(res.data.result==="Teacher Registered successfully"){
        navigate.push('/admin/Atables')
      }
    })
    .catch(error=>console.log(error))  
  }

  return (
    <>
      <div className="center">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Add Teacher Details
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            
            <Form onSubmit={handleSubmit(onFormSubmit)} className='p-5' >
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Teacher Information
              </h6>
              {/* username */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" autoComplete="Username" placeholder="Enter Username" {...register("name",{required:true})} />
                {/* validation error message for username */}
                {errors.username && <p className='text-danger'>*Name is required</p>}
              </Form.Group>

              {/* password */}
              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="email"  autoComplete="current-email" placeholder="Enter email" {...register("email",{required:true})} />
                {/* validation error message for password */}
                {errors.password && <p className='text-danger'>*Email is required</p>}
              </Form.Group>
              
              {/* submit button */}
                <Button variant="primary"
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit">
                  Add Entry
                </Button>

            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
