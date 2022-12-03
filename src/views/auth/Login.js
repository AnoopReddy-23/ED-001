import React from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'
import {Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export default function Login() {

  const {register, handleSubmit,formState:{errors}}=useForm();
  const navigate=useHistory()

  //submit the form
  const onFormSubmit=(userCredObj)=>{
    console.log(userCredObj)
    axios.post('/login',userCredObj)
    .then(res=>{
      //console.log(res.data)
      alert(res.data.result)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userInfo", res.data.userInfo.userType);
      if(res.data.result==="Login successful"){
        if(res.data.userInfo.userType==="student"){
          navigate.push('/admin/TAdashboard')
        }
        if(res.data.userInfo.userType==="teacher"){
          navigate.push('/admin/Tdashboard')
        }
        if(res.data.userInfo.userType==="admin"){
          navigate.push('/admin/Adashboard')
        }
        //console.log("Success",res.data.userInfo)
      }
    })
    .catch(error=>console.log(error))  
  }

  return (
    <>
      <div className="container mx-auto h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0  py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
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
                  <small>Or sign in with credentials</small>
                </div>
                <Form onSubmit={handleSubmit(onFormSubmit)} className='p-5' >
                  {/* username */}
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" autoComplete="Username" placeholder="Enter Username" {...register("username",{required:true})} />
                    {/* validation error message for username */}
                    {errors.username && <p className='text-danger'>*Username is required</p>}
                  </Form.Group>

                  {/* password */}
                  <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  autoComplete="current-password" placeholder="Enter Password" {...register("password",{required:true})} />
                    {/* validation error message for password */}
                    {errors.password && <p className='text-danger'>*Password is required</p>}
                  </Form.Group>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>
                  
                  {/* submit button */}
                    <Button variant="primary"
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit">
                      Login
                    </Button>
                </Form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
