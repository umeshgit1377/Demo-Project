import React from "react";
import { useState } from "react";
import Banner from "../custom_component/Banner";
function Contact() {
    const [data, setData] = useState({
        fullname:"",
        number:"",
        email:"",
        message:"",
    });
    const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
        return {
            ...preVal,
            [name]: value,
        }
    });
    };  
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is : ${data.fullname}. My Emal Address is : ${data.email}. My Mobile Number is : ${data.number}. My Message is: ${data.message} `);
    };
    return (
        <div className="contact">
         <Banner title="Contact Us" visit="/" btnName="Home" PageName="Contact Us" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="contact-content afterStyle pt-70 pb-215" title="QwertyCode">
                <div className="container">
                    <div className="max-width-a">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                            <div className="contact-cta-section">
                            <div className="address">
                                <h5>Address:</h5>
                                <p><i className="conclrc fa fa-home"></i>B-809, 8<sup>th</sup> Floor, i-Thum Tower, Sector 62,
                                    <br />
                                    Noida, Uttar-Pradesh, India, 201301</p>
                            </div>
                            <div className="address address-mdl">
                                <h5>Phone:</h5>
                                <p><i className="conclrc fa fa-phone"></i><a href="tel:+911204323577">+91 12043 23577</a></p>
                            </div>
                            <div className="address">
                                <h5>Email:</h5>
                                <p><i className="conclrc fa fa-envelope"></i><a href="mailto:info@qwertycode.org">info@qwertycode.in</a></p>
                                <p><i className="conclrc fa fa-chrome"></i><a href="http://qwertycode.org/">http://qwertycode.org</a></p>
                                <p><i className="conclrc fa fa-chrome"></i><a href="http://qwertycode.in/">http://qwertycode.in</a></p>
                            </div>
                            </div>
                            </div>

                            <div className="col-md-6">
                                <h2 className="form-title-mnbv">Talk to <span>Our Experts</span></h2>
                                <p className="form-title">We are available for a friendly chat to discuss your business needs, no obligation.</p>
                                <div className="form-wrapper">
                                    <form onSubmit={formSubmit}>
                                        <div className="form-row">
                                            <div className="form-itm">
                                                <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Name" />
                                            </div>
                                            <div className="form-itm">
                                                <input type="text" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="Email" />
                                                </div>
                                                <div className="form-itm">
                                                <input type="text" className="form-control" name="number" value={data.number} onChange={InputEvent} placeholder="Number" />
                                            </div>
                                            <div className="form-itm">
                                                <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} placeholder="Type here message"></textarea>
                                            </div>
                                            <div className="form-btn-itm">
                                                <button type="submit" className="theme-btn cm-btn" name="button"><span>Submit</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Contact;
