import React from "react";
import { Link } from "react-router-dom";

export const BlockChainSolutionTitle = (props) => {
    return (
        <div className="title-block col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner">
                <div className="sec-sec-title">
                    <h2>{props.title}</h2>
                    <div className="lower-text">{props.content}</div>
                </div>
            </div>
        </div>
    )
}        

export const BlockChainSolution = (props) => {
    return (
        <div className="service-block-chin col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box-chin">
                <div className="bottom-curve"></div>
                <h6><Link to="/web-development" className="">{props.Title}</Link></h6>
                <p>{props.Content}</p>
            </div>
        </div>
    )
}