import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import IconSecond from '../images/qwerty-icon-1.png';
import IconThird from '../images/qwerty-icon-2.png'
import IconFrist from '../images/icon-8.png';

export const HomeSlider = (props) => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };
    return (
        <Slider {...settings}>
              {props.HomeSliderData.map((HomeSlider, ind)=> {
                return (
                    <div className="Homeslider" key={ind} >
                        <div className="HomeSliderItem" style={{ backgroundImage: `url(${HomeSlider.imgsrc})` }}>
                            <div className="container">
                                <div className="sliderLftContent">
                                    <h2>{HomeSlider.Title}</h2>
                                    <p>{HomeSlider.Content}</p>
                                    <div className="banner-btn">
                                    <Link className="cm-btn" to={HomeSlider.ReadMoreLink}><span>{HomeSlider.ReadMore}</span></Link>   
                                    <Link className="cm-btn" to={HomeSlider.ContactNowLink}><span>{HomeSlider.ContactNow}</span></Link> 
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    )
                })}
        </Slider>
    )
}


export const OurTechTitle = (props) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="circle-one"></div>
                <div className="circle-two"></div>
                <div className="circle-three"></div>
                <div className="pattern-layer" style={{ backgroundImage: `url(${IconFrist})` }}></div>
                <div className="pattern-layer-two" style={{ backgroundImage: `url(${IconFrist})` }}></div>
                <div className="container">
                <div className="sec-title light text-center mx-width-define">
                    <h2>{props.title}</h2>
                    <div className="text">{props.content}</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export const OurTechExperties = (props) => {
    const settings = {
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
        };
    return (
        <Slider {...settings}>
        {props.OurTechExpertiesData.map((OurTechExperties, ind)=> {
            return (
                <div className="inner-box" key={ind}>
                    <div className="image-outer">
                        <div className="pattern-layer" style={{ backgroundImage: `url(${IconSecond})` }} ></div>
                        <div className="pattern-layer-two" style={{ backgroundImage: `url(${IconThird})` }} ></div>
                        <div className="image">
                            <Link to="teacher-detail.html"><img src={OurTechExperties.imgsrc} alt={OurTechExperties.EmpName}  height="auto" width="auto" loading="lazy" /></Link>
                        </div>
                    </div>
                    <div className="lower-content">
                        <div className="designation">{OurTechExperties.EmpName}</div>
                    </div>
                </div>
            )
        })}
        </Slider>
    )
}
