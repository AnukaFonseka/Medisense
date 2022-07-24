import React, {useEffect} from "react";
import "./TestDetails.css"
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsCustomerUpdated, setSelectedCustomer} from "../CustomerDetails";
import {setIsTestUpdated, setSelectedTest, testSelector, updateSelectedTestList} from "../AddTest";
import { findTestByNameThunk} from "../../apiCalls/apiCalls";
import {Async} from "react-select-virtualized";

const TestDetails = () => {
    const dispatch = useDispatch()
    const {selectedTest, isTestUpdated, isTestFindByNameLoading, TestsByNameList, selectedTestList} =  useSelector(testSelector)
    const history = useHistory();

    useEffect(() => {
        dispatch(setIsCustomerUpdated(false))
        dispatch(setIsTestUpdated(false))
    },[])

    const handleSelected = (val) => {
        let test = TestsByNameList.filter((test) => {return test.test_name === val.value})[0]
        dispatch(setSelectedTest(test))
        dispatch(updateSelectedTestList(test))
    }

    const loadOptions = (input, callback) => {
        let payLoad = {testName: input}
        dispatch(findTestByNameThunk(payLoad))

        if(!isTestFindByNameLoading) {
            let newTests = TestsByNameList.map((test) => {
                return {label: test.test_name, value: test.test_name}
            })
            callback(newTests)
        }
    };

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
                    <li className="breadcrumb-item active" aria-current="page">Test Details</li>
                </ol>
            </nav>
            <div className="main__container">
                <form className="form">

                    <div className="common__info">
                        <h1>Test Details</h1>

                    </div>
                    <br/>

                    <div className="common__info">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here"
                                      id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Remarks</label>
                        </div>

                    </div>
                    <br/>

                    <div className="common__info">
                        <div className="search__wrapper">
                            {/*<input className="searchbar" type="search" placeholder="Search..."/>*/}
                            <Async
                                placeholder="Search customer..."
                                isLoading={isTestFindByNameLoading}
                                options={TestsByNameList}
                                onChange={(e) => handleSelected(e)}
                                loadOptions={loadOptions}
                            />
                            {/*<button className="btn btn-success">Add</button>*/}
                            <NavLink to="/addTest" className="btn btn-success">Add Test</NavLink>

                        </div>

                    </div>
                    <br/>
                    <div className="common__info">
                        <table className="table table-hover">
                            <thead>
                            <tr className="table-success">
                                <th scope="col">No</th>
                                <th scope="col">Description</th>
                                <th scope="col">Amount</th>

                            </tr>
                            </thead>
                            <tbody>
                            {!isTestFindByNameLoading && selectedTestList.size !== 0 ?
                                selectedTestList.map((test) => {
                                    return <tr>
                                        <td scope="row">{test.test_code}</td>
                                        <td>{test.test_name}</td>
                                        <td>{test.test_amount}</td>
                                    </tr>
                                }) :
                                <tr>
                                    <th scope="row"> No tests selected </th>
                                </tr>
                            }
                            </tbody>
                        </table>

                    </div>
                    <br/>

                    <div className="common__info">
                        <table className="table table-hover">
                            <thead>
                            <tr className="table-info">
                                <th scope="col">No</th>
                                <th scope="col">Master Code</th>
                                <th scope="col">Description</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>

                        <NavLink to = "/cashierList" className = "btn btn-primary mb-2" > Save </NavLink>

                    </div>



                </form>
            </div>
        </div>
    )
}

export default TestDetails