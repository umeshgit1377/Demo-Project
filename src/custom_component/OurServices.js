import React from "react";
import { Link } from 'react-router-dom';
import Icon5 from '../images/icon-5.png';

export const OurServices = (props) => {
    return (
        <div className="service-block col-lg-6 col-md-12 col-sm-12">
            <div className="inner-box">
                <div className="icon-box">
                    <div className="icon-layer" style={{ backgroundImage: `url(${Icon5})` }}></div> 
                    <span className="icon"><img src={props.imgsrc} alt={props.EmpName}/></span> 
                </div>
                <h6><Link to={props.EmpLink} className={props.EmpLink ? 'isLink' : 'isNotLink'}>{props.EmpName}</Link></h6>
                <div className="text">{props.EmpContent}</div> 
                <Link to={props.EmpLink} className={props.EmpLink ? 'learn-more isLink' : 'learn-more isNotLink'}>Explore Offers</Link> 
            </div>
        </div>
    )
}
