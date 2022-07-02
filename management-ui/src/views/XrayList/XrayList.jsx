import React from "react";
import "./xrayList.css";
import {NavLink} from "react-router-dom";

const XrayList = () => {
    return(

        <div className="main__container">
          <form className="form">
              <div className="common__info">
                  <h1>X-Ray List</h1>
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
                            <tr>
                                <td> Sova </td>
                                <td> 001 </td>
                                <td style={{display:'flex', justifyContent: "center"}}>
                                    <NavLink to = "/cashier" className = "btn btn-primary mb-2" style={{marginLeft: "20px"}} > View </NavLink>
                                </td>
                            </tr>

                            <tr>
                                <td> Skye </td>
                                <td> 002 </td>
                                <td style={{display:'flex', justifyContent: "center"}}>
                                    <NavLink to = "/cashier" className = "btn btn-primary mb-2" style={{marginLeft: "20px"}} > View </NavLink>
                                </td>
                            </tr>

                            <tr>
                                <td> Fade </td>
                                <td> 003 </td>
                                <td style={{display:'flex', justifyContent: "center"}}>
                                    <NavLink to = "/cashier" className = "btn btn-primary mb-2" style={{marginLeft: "20px"}} > View </NavLink>
                                </td>
                            </tr>

                    </tbody>
                </table>
            </div>
          </form>
        </div>

    )
}

export default XrayList
