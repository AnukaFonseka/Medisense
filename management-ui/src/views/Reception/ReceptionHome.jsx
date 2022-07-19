import React, {useEffect, useState} from 'react'
import './receptionHome.css'
import {Link, NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findCustomerByNameThunk} from "../../apiCalls/apiCalls";
import {customerSelector} from "../CustomerDetails";
import { Async } from "react-select-virtualized";
import {setSelectedCustomer} from '../CustomerDetails/index';
import {setSelectedRadioButton} from "../CustomerDetails";

const ReceptionHome = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const {customersByNameList, isCustomerFindByNameLoading, selectedCustomer, selectedRadioButton} = useSelector(customerSelector)

    const handleRoute = () => {
        if(selectedRadioButton === "GCC"){
            history.push('/gcc')
        }if(selectedRadioButton === "OPD"){
            history.push('/opd')
        }if(selectedRadioButton === "Non_GCC"){
            history.push('/gcc')
        }if(selectedRadioButton === "Repeat"){
            history.push('/testDetails')
        }
    }


    const handleSelected = (val) => {
        let customer = customersByNameList.filter((customer) => {return customer.cus_ref_no === val.value})[0]
        dispatch(setSelectedCustomer(customer))
    }

    const handleChange = (val) => {
        dispatch(setSelectedRadioButton(val.target.value))
    }

    const loadOptions = (input, callback) => {
        let payLoad = {customerName: input}
        dispatch(findCustomerByNameThunk(payLoad))

        if(!isCustomerFindByNameLoading) {
            let newCustomers = customersByNameList.map((customer) => {
                return {label: customer.customer_full_name, value: customer.cus_ref_no}
            })
            callback(newCustomers)
        }
    };

    return (
        <div className="body">
            <nav className="navbar" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>
            <div className="bg">
            <div className="home">
                <div className="home__container">

                    <div className="common__info">
                        <Async
                            placeholder="Search customer..."
                            isLoading={isCustomerFindByNameLoading}
                            options={customersByNameList}
                            onChange={(e) => handleSelected(e)}
                            loadOptions={loadOptions}
                        />
                    </div>

                    <br/>

                    <div className="details__container">
                        <br/>
                        {
                            selectedCustomer.customer_full_name !== "" ?
                                <>
                                    <img src={require("./images/1.png")} alt="" width="150px" height="150px"/><br/>
                                    <p>{selectedCustomer.customer_full_name}</p>
                                    <p>{selectedCustomer.cus_ref_no}</p>
                                    <NavLink to="/customerDetails" className="view__btn btn btn-secondary"> View
                                        More </NavLink>
                                </> :
                                <></>
                        }

                    </div>

                    <div className="category__container">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="GCC"
                                checked={selectedRadioButton === 'GCC'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="radio"
                                   name="flexRadioDefault"
                                   id="flexRadioDefault2"
                                   value="Non_GCC"
                                   checked={selectedRadioButton === 'Non_GCC'}
                                   onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Non GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="radio"
                                   name="flexRadioDefault"
                                   id="flexRadioDefault3"
                                   value="OPD"
                                   checked={selectedRadioButton === 'OPD'}
                                   onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                OPD
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="radio"
                                   name="flexRadioDefault"
                                   id="flexRadioDefault4"
                                   value="Repeat"
                                   checked={selectedRadioButton === 'Repeat'}
                                   onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                Repeat
                            </label>
                        </div>
                        {/*<Link to={{pathname: "/GCC", state: {customer: selectedCustomer}}}*/}
                        {/*      className="next__btn btn btn-primary"> Next </Link>*/}

                        {/*<Link to={{pathname: "/GCC"}}*/}
                        {/*      className="next__btn btn btn-primary"> Next </Link>*/}
                        <button onClick={handleRoute} className="btn btn-primary mb-2"> Next</button>
                    </div>
                    <br/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ReceptionHome