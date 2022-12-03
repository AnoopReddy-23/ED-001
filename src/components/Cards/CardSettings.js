import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
//import external from "external.css"

// components

export default function CardSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useHistory();

  const onFormSubmit = (userCredObj) => {
    console.log(userCredObj);
    axios
      .post("/add-assignment", userCredObj)
      .then((res) => {
        //console.log(res.data)
        alert(res.data.result);
        if (res.data.result === "Added successfully") {
          navigate.push("/admin/Tdashboard");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="center">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Add Assignment
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <Form onSubmit={handleSubmit(onFormSubmit)} className="p-5">
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Assignment
              </h6>

              {/* Title */}
              <Form.Group className="mb-3">
                <Form.Label>TITLE OF ASSIGNMENT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  {...register("title", { required: true })}
                />
                {/* validation error message for username */}
                {errors.title && (
                  <p className="text-danger">*Title is required</p>
                )}
              </Form.Group>

              {/* SELECT TYPE OF ASSIGNMENT */}
              <Form.Group className="mb-3">
                <Form.Label>SELECT TYPE OF ASSIGNMENT</Form.Label> <br />
                <Form.Check inline type="radio" id="canva">
                  <Form.Check.Input
                    type="radio"
                    value="canva"
                    {...register("type", { required: true })}
                  />
                  <Form.Check.Label>Canva Presentation</Form.Check.Label>
                </Form.Check>
                <Form.Check inline type="radio" id="audio">
                  <Form.Check.Input
                    type="radio"
                    value="audio"
                    {...register("type", { required: true })}
                  />
                  <Form.Check.Label>Audio Files</Form.Check.Label>
                </Form.Check>
                <Form.Check inline type="radio" id="ppt">
                  <Form.Check.Input
                    type="radio"
                    value="ppt"
                    {...register("type", { required: true })}
                  />
                  <Form.Check.Label>Ppt Presentation</Form.Check.Label>
                </Form.Check>
                {/* validation error message for userType */}
                {errors.type && (
                  <p className="text-danger">*Type is required</p>
                )}
              </Form.Group>

              {/* file */}
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    ADD FILE
                  </label>
                  <input type="file" />
                </div>
              </div>

              {/* SELECT Student year */}
              <Form.Group className="mb-3">
                <Form.Label>SELECT STUDENT YEAR</Form.Label> <br />
                  <Form.Check inline type="radio" id="1">
                    <Form.Check.Input type="radio" value="1" {...register("year", { required: true })} />
                  <Form.Check.Label>1st year</Form.Check.Label>
                </Form.Check>
                <Form.Check inline type="radio" id="2">
                  <Form.Check.Input
                    type="radio"
                    value="2"
                    {...register("year", { required: true })}
                  />
                  <Form.Check.Label>2nd year</Form.Check.Label>
                </Form.Check>
                {/* validation error message for userType */}
                {errors.year && (
                  <p className="text-danger">*Year is required</p>
                )}
              </Form.Group>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Add Description
              </h6>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example text area</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              {/* submit button */}
              <Button variant="primary" type="submit">
                ADD ASSIGNMENT
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
