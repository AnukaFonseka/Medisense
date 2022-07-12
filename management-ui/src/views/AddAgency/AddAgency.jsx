import React, {useEffect} from "react";
import "./addAgency.css";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from 'yup';
import {Formik, Form, Field} from "formik";
import {addAgencyThunk} from "../../apiCalls/apiCalls";
import {agencySelector} from "./index";
import {useHistory} from "react-router-dom";


const AddAgency = () => {

    const dispatch = useDispatch()
    const {selectedAgency, isAgencyUpdated} = useSelector(agencySelector)
    const history = useHistory()

    useEffect(() => {
        if(isAgencyUpdated) {
            history.push('/GCC')
        }
    },[selectedAgency, isAgencyUpdated])

    const AgencySchema = Yup.object().shape({
        agency_name: Yup.string()
            .required('Agency Name is Required')

    });

    return(
        <div>
            <nav aria-label="breadcrumb" className="navbar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="receptionHome">Home</a></li>
                    <li className="breadcrumb-item"><a href="GCC">GCC</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Agency</li>
                </ol>
            </nav>
            <div className="main__container">
                <Formik
                    initialValues={selectedAgency}
                    onSubmit={async (values) => {
                        dispatch(addAgencyThunk(values))
                    }}
                    validationSchema={AgencySchema}
                >
                    {({errors, touched}) =>(
                        <Form className="form">
                            <div className="common__info">
                                <h1>Add Agency</h1>

                            </div>
                            <br/>


                            <br/>
                            <div className="common__info">
                                <div className="common__info__wrap">
                                    <div className="common__info__details">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Agency Name</label>
                                                <Field className="form-control" type="text" id="agency_name"
                                                       name="agency_name"/>
                                                {errors.agency_name && touched.agency_name ? (
                                                    <div className="error_message">{errors.agency_name}</div>
                                                ) : null}
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Address</label>
                                                <Field className="form-control" type="text" id="agency_address"
                                                       name="agency_address"/>
                                            </div>

                                        </div>



                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="agency_contact_no">Telephone</label>
                                                <Field className="form-control" type="text" id="agency_contact_no"
                                                       name="agency_contact_no"/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="agency_fax">Fax</label>
                                                <Field className="form-control" type="text" id="agency_fax"
                                                       name="agency_fax"/>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="agency_email">Email</label>
                                                <Field className="form-control" type="text" id="agency_email"
                                                       name="agency_email"/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="agency_contact_person">Contact Person</label>
                                                <Field className="form-control" type="text" id="agency_contact_person"
                                                       name="agency_contact_person"/>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="agency_labour_licence">Labour License</label>
                                                <Field className="form-control" type="text" id="agency_labour_licence"
                                                       name="agency_labour_licence"/>
                                            </div>

                                            <div className="col">
                                                <label htmlFor="agency_commission">Commission</label>
                                                <Field className="form-control" type="text" id="agency_commission"
                                                       name="agency_commission"/>
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
export default AddAgency