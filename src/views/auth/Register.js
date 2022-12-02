import React from "react";
import {useForm} from 'react-hook-form'
import {Form, Button,Card} from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


export default function Register() {

  const {register,handleSubmit,formState:{errors}}=useForm();
  const navigate=useHistory()

  //submit form
  const onFormSubmit=(userObj)=>{
    console.log(userObj)
    //HTTP POST request
    axios.post('/register', userObj)
    .then(res=>{
      //console.log(response)
      alert(res.data.result)
        if(res.data.result==="User Registered successfully"){
          navigate.push('/auth/login')
          console.log("Success")
        }
    })
    .catch(error=>{
      console.log(error)
      alert("Something went wrong!! Please try again after sometime..")
    })
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/github.svg").default}
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <Form onSubmit={handleSubmit(onFormSubmit)} className='p-5'>
                  {/* username */}
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" {...register('username',{required:true})} />
                    {/* validation error message for username */}
                    {errors.username && <p className='text-danger'>*Username is required</p>}
                  </Form.Group>
                  {/* password */}
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password',{required:true})}/>
                    {/* validation error message for password */}
                    {errors.password && <p className='text-danger'>*password is required</p>}
                  </Form.Group>
                  {/* email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register('email',{required:true})} />
                    {/* validation error message for city */}
                    {errors.email && <p className='text-danger'>*Email is required</p>}
                  </Form.Group>
                  {/* usertype */}
                  <Form.Group className="mb-3">
                    {/* Student */}
                    <Form.Label>Select type of User</Form.Label> <br />
                      <Form.Check inline type="radio" id="student">
                        <Form.Check.Input type="radio" value="student" {...register("userType", { required: true })} />
                      <Form.Check.Label>Student</Form.Check.Label>
                    </Form.Check>
                    {/* Teacher */}
                    <Form.Check inline type="radio" id="teacher">
                      <Form.Check.Input type="radio" value="teacher" {...register("userType", { required: true })}/>
                      <Form.Check.Label>Teacher</Form.Check.Label>
                    </Form.Check>
                    {/* validation error message for userType */}
                    {errors.userType && <p className='text-danger'>*UserType is required</p>}
                  </Form.Group>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  {/* Button */}
                  <Button 
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit">
                    Create Account
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
