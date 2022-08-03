import React, {useEffect} from "react";
import "./TestDetails.css"
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsCustomerUpdated} from "../CustomerDetails";
import {
    removeTestFromSelectedTestList,
    setIsTestUpdated,
    setSelectedTest,
    testSelector,
    updateSelectedTestList
} from "../AddTest";
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
        let test = TestsByNameList.filter((test) => {return test.test_code === val.value})[0]
        // dispatch(setSelectedTest(test))
        dispatch(updateSelectedTestList(test))
        console.log(selectedTestList)
    }

    const loadOptions = (input, callback) => {
        let payLoad = {testName: input}
        dispatch(findTestByNameThunk(payLoad))

        if(!isTestFindByNameLoading) {
            let newTests = TestsByNameList.map((test) => {
                return {label: test.test_code, value: test.test_code}
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
                        <div className="search__wrapper">
                            <Async
                                placeholder="Search test package..."
                                isLoading={isTestFindByNameLoading}
                                options={TestsByNameList}
                                onChange={(e) => handleSelected(e)}
                                loadOptions={loadOptions}
                            />
                            <NavLink to="/addTest" className="btn btn-success">Add Test</NavLink>

                        </div>

                    </div>
                    <br/>
                    <div className="common__info">
                        <table className="table table-hover">
                            <thead>
                            <tr className="table-success">
                                <th scope="col">Package</th>
                                <th scope="col">Test</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>

                            </tr>
                            </thead>
                            <tbody>
                            {!isTestFindByNameLoading && selectedTestList.size !== 0 ?
                                selectedTestList.map((test,i) => {
                                    return (
                                        <tr key={i}>
                                            <td scope="row">{test.test_code}</td>
                                            <td>{test.test_name}</td>
                                            <td>{test.test_amount}</td>
                                            <td><button className="btn_test btn btn-danger" onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(removeTestFromSelectedTestList(i))
                                            }}>Delete</button></td>
                                        </tr>
                                    )
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
                                <th scope="col">Package</th>
                                <th scope="col">Test</th>

                            </tr>
                            </thead>
                            <tbody>
                            {!isTestFindByNameLoading && selectedTestList.size !== 0 ?
                                selectedTestList.map((test,i) => {
                                    return (
                                        <tr key={i}>
                                            <td scope="row">{test.test_code}</td>
                                            <td>{test.test_name}</td>
                                        </tr>
                                    )
                                }) :
                                <tr>
                                    <th scope="row"> No tests selected </th>
                                </tr>
                            }
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