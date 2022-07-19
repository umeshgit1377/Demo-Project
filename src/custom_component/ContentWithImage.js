import React from "react";
import { Link } from 'react-router-dom';
import Icon1 from '../images/icon-1.png';


export const  ContentWithImage = (props) => {
    return (
        <div className="title-wra">
            <div className="inner-container">
              
            {props.iconStyle ?
                <>
                <div className="icon-layer-one" style={{ backgroundImage: `url(${Icon1})` }}></div>
                <div className="icon-layer-three" style={{ backgroundImage: `url(${Icon1})` }}></div>
                </>
            : ''}
                
                <div className="image"> 
                    <div className="about-contewra">
                        {props.title}
                        {props.content}
                        {props.showBtn ?
                        <div className="retbtn">
                            <Link className="cm-btn" to={props.btnLink}><span>{props.btnText}</span></Link>
                        </div>
                         : ''}
                    </div>
                    <div className="about-imgewra">
                        <img src={props.imgsrc} alt={props.alt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
