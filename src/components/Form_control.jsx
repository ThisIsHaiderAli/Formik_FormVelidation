import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";

const initialValues = {
    email : "",
    password : ""
}

const validationSchema = Yup.object({
email: Yup.string().email('invalid email').required('Must Enter your email'),
password : Yup.string().required('Enter your password').min(8)
})

function Form_control() {

    const formik= useFormik({
        initialValues,
        validationSchema
    })
    
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-4">

                        <form className='border border-info shadow p-4' onSubmit={formik.handleSubmit}>
                            <div className='form-control' style={{display:'flex', flexDirection:'column'}} >
                                <label htmlFor="" className='d-flex justify-content-start '>E-mail</label>
                                <input type="email" name='email' id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                {formik.touched.email && formik.errors.email ? (<div className="error my-2 text-start text-danger">{formik.errors.email}</div>) : null}
                            </div>

                            <div className='mt-4 form-control mail_uper'style={{display:'flex', flexDirection:'column'}}>
                                <label htmlFor="" className='d-flex justify-content-start'>Password</label>
                                <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                {formik.touched.password && formik.errors.password ? (<div className="error my-2 text-start text-danger">{formik.errors.password}</div>) : null}
                            </div>

                            <button className='btn btn-md btn-secondary mt-4 ' type='submit'>Submit</button>
                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form_control
