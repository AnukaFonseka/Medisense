import React, {useEffect, useState} from 'react'
import './receptionHome.css'
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findCustomerByNameThunk} from "../../apiCalls/apiCalls";
import {customerSelector} from "../CustomerDetails";
import { Async } from "react-select-virtualized";
import {setSelectedCustomer} from '../CustomerDetails/index'

const ReceptionHome = () => {
    const dispatch = useDispatch()
    const {customersByNameList, isCustomerFindByNameLoading, selectedCustomer} = useSelector(customerSelector)

    console.log(selectedCustomer)

    const handleSelected = (val) => {
        let customer = customersByNameList.filter((customer) => {return customer.cus_ref_no === val.value})[0]
        console.log(customer)
        dispatch(setSelectedCustomer(customer))
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
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Non GCC
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault3"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                OPD
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault4"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                Repeat
                            </label>
                        </div>
                        {/*<Link to={{pathname: "/GCC", state: {customer: selectedCustomer}}}*/}
                        {/*      className="next__btn btn btn-primary"> Next </Link>*/}

                        <Link to={{pathname: "/GCC"}}
                              className="next__btn btn btn-primary"> Next </Link>
                    </div>
                    <br/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ReceptionHome