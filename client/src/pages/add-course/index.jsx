import React from "react";
import { Formik, Form, Field } from "formik";
import { AddCourseSchema } from "./schema";
import axios from "axios";
import "./index.scss";
import DetailsHeader from "../../components/details-header";

const AddCourse = () => {
  return (
    <div id="addCourse">
      <DetailsHeader />
      <div className="container">
        <div className="formik">
        <h1> Add Course </h1>
          <Formik
            initialValues={{
              title: "",
              name: "",
              description: "",
              price: "",
              imgUrl: "",
            }}
            validationSchema={AddCourseSchema}
            onSubmit={(values) => {
              axios.post(`http://localhost:8080/courses`, values);
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <div className="input">
                  <Field name="title" placeholder="Title" />
                  {errors.title && touched.title ? (
                    <div>{errors.title}</div>
                  ) : null}
                </div>

                <div className="input">
                <Field name="name" placeholder="Name"  />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                </div>

                <div className="input">
                <Field name="description" type="text" placeholder="Description"  />
                {errors.description && touched.description ? (
                  <div>{errors.description}</div> 
                ) : null}
                </div>

                <div className="input">
                <Field name="price" placeholder="Price" />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                </div>

                <div className="input">
                <Field name="imgUrl" placeholder="Img"  />
                {errors.imgUrl && touched.imgUrl ? (
                  <div>{errors.imgUrl}</div>
                ) : null}
                </div>

                <button type="submit" className="formikBtn">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
