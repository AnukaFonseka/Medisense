import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from 'yup';
import {Formik, Form, Field} from "formik";
import {NavLink, useHistory} from "react-router-dom";
import { addJobThunk} from "../../apiCalls/apiCalls";
import {jobSelector} from "./index";

const AddJob = () => {

    const dispatch = useDispatch()
    const {selectedJob, isJobUpdated} = useSelector(jobSelector)
    const history = useHistory()

    useEffect(() => {
        if(isJobUpdated) {
            history.push('/GCC')
        }
    },[selectedJob, isJobUpdated])

    const jobSchema = Yup.object().shape({
        job_name: Yup.string()
            .required('Job Name is Required')

    });

    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink to="/receptionHome"> Home </NavLink>
                    </li>
                    <li className="breadcrumb-item">
                        <NavLink to="/GCC"> GCC </NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Add Agency</li>
                </ol>
            </nav>
            <div className="main__container">
                <Formik
                    initialValues={selectedJob}
                    onSubmit={async (values) => {
                        dispatch(addJobThunk(values))
                    }}
                    validationSchema={jobSchema}
                >
                    {({errors, touched}) =>(
                        <Form className="form">
                            <div className="common__info">
                                <h1>Add Job</h1>

                            </div>
                            <br/>


                            <br/>
                            <div className="common__info">
                                <div className="common__info__wrap">
                                    <div className="common__info__details">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Job Name</label>
                                                <Field className="form-control" type="text" id="job_name"
                                                       name="job_name"/>
                                                {errors.job_name && touched.job_name ? (
                                                    <div className="error_message">{errors.job_name}</div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Description</label>
                                                <Field className="form-control" type="text" id="job_description"
                                                       name="job_description"/>
                                            </div>

                                        </div>

                                        <br/>
                                        <button type="submit" className="btn btn-primary mb-2"> Save</button>

                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

export default AddJob