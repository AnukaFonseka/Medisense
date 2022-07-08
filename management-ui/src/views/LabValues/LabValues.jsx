import React from "react";
import "./labValues.css";
import {NavLink} from "react-router-dom";

const LabValues = () => {
    return(

        <div className="main__container">
          <form className="form">
              <div className="common__info">
                  <h1>Add Default</h1>
              </div>

              <br/>

            <div className="common__info">
                <table className="table table-hover">
                    <thead>
                    <tr className="table-info">
                        <th scope="col">No</th>
                        <th scope="col">Reference</th>
                        <th scope="col">Type</th>
                        <th scope="col">Package</th>
                        <th scope="col">TestCode</th>
                        <th scope="col">Def/Act</th>
                        <th scope="col">Value</th>
                        <th scope="col">UOM</th>
                        <th scope="col">Result</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Alpha</td>
                        <td>A</td>
                        <td>descA</td>
                        <td>X</td>
                        <td>kgmol</td>
                        <td>Done</td>
                        <td>Alpha</td>
                        <td>A</td>
                        <td>descA</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Beta</td>
                        <td>B</td>
                        <td>descB</td>
                        <td>Y</td>
                        <td>mg</td>
                        <td>Pending</td>
                        <td>Alpha</td>
                        <td>A</td>
                        <td>descA</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Gamma</td>
                        <td>C</td>
                        <td>descC</td>
                        <td>Z</td>
                        <td>mol</td>
                        <td>Done</td>
                        <td>Alpha</td>
                        <td>A</td>
                        <td>descA</td>
                    </tr>
                    </tbody>
                </table>
            </div>
          </form>
        </div>

    )
}

export default LabValues
