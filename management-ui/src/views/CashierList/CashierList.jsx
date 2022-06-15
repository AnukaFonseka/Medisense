import React from "react";
import "./cashierList.css";

const CashierList = () => {
    return(

        <div className="main">
            <h2 className="name_container">Cashier List</h2>
            <div className="container">
                <table className="table table-hover table table-bordered ">
                    <thead>
                    <tr style={{textAlign:'center'}}>
                        <th>Name</th>
                        <th>Id</th>
                        <th >Action</th>
                    </tr>
                    </thead>

                    <tbody>
                            <tr>
                                <td> Reyna </td>
                                <td> 001 </td>
                                <td style={{display:'flex', justifyContent: "center"}}>
                                    <button style={{marginLeft: "20px"}}  className="btn btn-success">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td> Yoru </td>
                                <td> 002 </td>
                                <td style={{display:'flex', justifyContent: "center"}}>
                                    <button style={{marginLeft: "20px"}}  className="btn btn-success">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td> Raze </td>
                                <td> 003 </td>
                                <td style={{display:'flex', justifyContent: "center"}}>
                                    <button style={{marginLeft: "20px"}}  className="btn btn-success">View</button>
                                </td>
                            </tr>

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default CashierList
