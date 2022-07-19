import React from "react";
export const WeCovered = (props) => {
    return (
        <div className="main-flex-cell">
            {props.imgsrc}
            <h3>{props.EmpName}</h3>
            <p>{props.EmpContent}</p>
        </div>
    )
}

