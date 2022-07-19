import React from "react";
import { Link } from "react-router-dom";
function Banner(props) {
return (
        <div className="banner-wrap" style={{ backgroundImage: `url(${props.imgsrc})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="banner">
                            <h1>{props.title}</h1>
                            <div className="breadcrumball">
                                <Link to={props.visit}>{props.btnName}</Link><span>{props.PageName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
