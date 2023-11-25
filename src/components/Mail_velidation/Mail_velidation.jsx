import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

// const onSubmit = (values) => {
//   console.log("From data", values);
// };

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Name required";
//   }

//   if (!values.email) {
//     errors.email = "email required";
//   }

//   if (!values.password) {
//     errors.password = "Password must required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("O bhai name likh pehle"),
  email: Yup.string().email("invalid email").required("e-mail zruri hai bhai!"),
  password: Yup.string().required("please Enter your password").min(6),
});

function Mail_velidation() {
  const formik = useFormik({
    initialValues,
    // onSubmit,
    // validate,
    validationSchema,
  });

  //   jab ap kisi b field ko visite krrne k bad true masage show ho
  console.log("visited fields", formik.touched);
  // console.log("from errors", formik.errors);
  // console.log('Form values', formik.values);

  return (
    <div className="my-5 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">

            <form className="text-start" onSubmit={formik.handleSubmit}>

              <div className="form-control py-3">
                <label htmlFor="name" className="mb-0">Name</label>
                <input type="text" placeholder="Name" name="name" id="name"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (<div className="error mb-2 text-danger">{formik.errors.name}</div>) : null}
              </div>

              <div className="form-control mt-4 py-3">
                <label htmlFor="email" className="mb-0">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error mb-2 text-danger">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="form-control mt-4 py-3">
                <label htmlFor="password" className="mb-0">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error mb-2 text-danger">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <button className="btn btn-md btn-warning mt-4" type="submit">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail_velidation;
