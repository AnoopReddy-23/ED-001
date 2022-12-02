/*eslint-disable*/
import React from "react";
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import './Indexnavsty.css'
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigate=useHistory()

  function dash(){
    const user=localStorage.getItem("userInfo")
    //console.log(user)
    if(user==="student"){
      navigate.push('/admin/TAdashboard')
    }
    if(user==="teacher"){
      navigate.push('/admin/Tdashboard')
    }
    if(user==="admin"){
      navigate.push('/admin/Adashboard')
    }
  }

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <img style={{ width: '100px',height:'75px' }}
                  alt="..."
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src={require("assets/img/logo.jpg").default}
                />
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {/* <IndexDropdown /> */}
              </li>
              

              <li className="flex items-center">
                
                  {
                    !localStorage.getItem("token")
                    ?
                      <button
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none m-3 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <Link
                          to="/auth/login"
                          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >
                        Login
                        </Link>
                      </button>
                    :
                      <Button
                        variant="primary"
                       onClick={dash}>Dashboard</Button>
                  }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}