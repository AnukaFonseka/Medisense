import  React from "react";
import "./addAgency.css";

const AddAgency = () => {
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
                <form className="form">
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
                                        <input className="form-control" type="text" id="agency-name" name="agency-name"/>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="address">Address</label>
                                        <input className="form-control" type="text" id="address" name="address"/>
                                    </div>

                                </div>



                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="lastmeal">Telephone</label>
                                        <input className="form-control" type="text" id="telephone" name="telephone"/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="lastmeal">Fax</label>
                                        <input className="form-control" type="text" id="fax" name="fax"/>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="lastmeal">Email</label>
                                        <input className="form-control" type="text" id="email" name="email"/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="lastmeal">Contact Person</label>
                                        <input className="form-control" type="text" id="contact" name="contact"/>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="lastmeal">Labour License</label>
                                        <input className="form-control" type="text" id="labour" name="labour"/>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="lastmeal">Commission</label>
                                        <input className="form-control" type="text" id="commission" name="commission"/>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddAgency