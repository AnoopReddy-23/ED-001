/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from "components/Slider/ImageSlider";
import { SliderData } from "components/Slider/SliderData";
import './Index-marquee.css'

export default function Index() {
  
  //console.log(localStorage.getItem("token"))

  return (
    <>
      <IndexNavbar fixed />

      <div className="container row mx-auto pt-32">
        <div className="col-sm-8">
          <div className="pt-32 sm:pt-0 my-4">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                EVAL
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                 Our mission is to provide smart assessment systems to evaluate students and identify the learning gaps well. 
                 The goal of this is to understand the level of learning and retention of the students and are personalized to the student's grasping capabilities. 
                 Ultimately the goal of this to help both teacher and student in their learning journey.
              </p>
              
          </div>
        </div>
        <div className="col-sm-12 mt-5 pt-32 text-center">
        <ImageSlider slides={SliderData}></ImageSlider>
        </div>
      </div>
        
      

      

      
    
      
      <Footer />
    </>
  );
}