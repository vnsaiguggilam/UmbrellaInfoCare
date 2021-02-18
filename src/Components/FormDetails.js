import React from 'react';


const FormDetails=(props)=>{
    return(
        <div className="jumbotron">

            <div className="text-center">
                <span className="namePic">{props.data.name.match(/\b(\w)/g).join('')}</span>
                <h3>{props.data.name}</h3>
            </div>
            <br/><br/><br/>
            <div className="row viewDetails">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <span className="viewDetails_title">Name:</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <span className="viewDetails_data">{props.data.name}</span>
                </div>
            </div>
            <div className="row viewDetails">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <span className="viewDetails_title">Email:</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <span className="viewDetails_data">{props.data.email}</span>
                </div>
            </div>
            <div className="row viewDetails">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <span className="viewDetails_title">Phone:</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <span className="viewDetails_data">{props.data.phno}</span>
                </div>
            </div>
            <div className="row viewDetails">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <span className="viewDetails_title">Company:</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <span className="viewDetails_data">{props.data.company}</span>
                </div>
            </div>
            <div className="row viewDetails">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <span className="viewDetails_title">Address:</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <span className="viewDetails_data">{props.data.address}</span>
                </div>
            </div>
            
            
        </div>
    )
};

export default FormDetails;