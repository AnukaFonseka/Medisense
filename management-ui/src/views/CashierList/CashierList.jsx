import React, {useEffect, useState} from "react";
import "./cashierList.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCashierListThunk} from "../../apiCalls/apiCalls";
import {cashierSelector, setSelectedCustomer} from "./index";


const CashierList = () => {
    const dispatch = useDispatch()
    const {waitingList, isGetCashierListLoading} = useSelector(cashierSelector)

    useEffect( () => {
        dispatch(getCashierListThunk())
    }, [])

    return(

        <div className="main__container">
          <form className="form">
              <div className="common__info">
                  <h1>Cashier List</h1>
              </div>

              <br/>

            <div className="common__info">
                <table className="table table-hover">
                    <thead>
                        <tr style={{textAlign:'center' , backgroundColor:'#CFF4FC'}}>
                            <th>Name</th>
                            <th>Id</th>
                            <th >Action</th>
                        </tr>
                    </thead>

                    <tbody>

                    {
                        !isGetCashierListLoading ?
                            waitingList.map((user, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {user.cus_name} </td>
                                        <td>{user.cus_ref_no}</td>
                                        <td style={{display:'flex', justifyContent: "center"}}>
                                            <NavLink to = "/cashier" className = "btn btn-primary mb-2" style={{marginLeft: "20px"}} onClick={() => dispatch(setSelectedCustomer(user))}>
                                                View
                                            </NavLink>
                                        </td>
                                    </tr>
                                )
                            }) :
                            <>
                                Loading .....
                            </>
                    }
                    </tbody>
                </table>
            </div>
          </form>
        </div>

    )
}

export default CashierList
