import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from 'yup';
import {Formik, Form, Field} from "formik";
import {NavLink, useHistory} from "react-router-dom";
import {testSelector} from "./index";
import { addTestThunk} from "../../apiCalls/apiCalls";

const AddTest = () => {

    const dispatch = useDispatch()
    const {selectedTest, isTestUpdated} = useSelector(testSelector)
    const history = useHistory()

    useEffect(() => {
        if(isTestUpdated) {
            history.push('/testDetails')
        }
    },[selectedTest, isTestUpdated])

    const testSchema = Yup.object().shape({
        test_name: Yup.string()
            .required('Test Name is Required'),
        test_code: Yup.string()
            .required('test package is Required'),
        test_amount: Yup.string()
            .required('Test amount is Required'),
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
                    <li className="breadcrumb-item">
                        <NavLink to="/testDetails"> Test Details </NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Add Test</li>
                </ol>
            </nav>
            <div className="main__container">
                <Formik
                    initialValues={selectedTest}
                    onSubmit={async (values) => {
                        dispatch(addTestThunk(values))
                    }}
                    validationSchema={testSchema}
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
                                                <label htmlFor="address">Test Name</label>
                                                <Field className="form-control" type="text" id="test_name"
                                                       name="test_name"/>
                                                {errors.test_name && touched.test_name ? (
                                                    <div className="error_message">{errors.test_name}</div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="test_code">Test Package</label>
                                                <Field className="form-control" type="text" id="test_code"
                                                       name="test_code"/>
                                                {errors.test_code && touched.test_code ? (
                                                    <div className="error_message">{errors.test_code}</div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="test_amount">Amount</label>
                                                <Field className="form-control" type="text" id="test_amount"
                                                       name="test_amount"/>
                                                {errors.test_amount && touched.test_amount ? (
                                                    <div className="error_message">{errors.test_amount}</div>
                                                ) : null}
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

export default AddTest