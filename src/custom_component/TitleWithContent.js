import React from "react";
export const  TitleWithContent = (props) => {
    return (
        <div className="title-wra text-center">
            <div className="title-wrainner">
                {props.title}
                {props.content}
            </div>
        </div>
    )
}
