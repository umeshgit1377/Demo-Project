import React, { useState } from "react";
import CtaImg from "../images/cta-icon.png";
const HomeContactSection = () => {
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
              <div className="container">
                    <div className="cm-padding-cont">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                        <div className="cta-section">
                            <div className="cm-image"> <img src={CtaImg} alt="get started today"/> </div>
                            <div className="title">get started today</div>
                            <h2>Change the way <br/> you work with clients forever. <br/> You’ll thank us later.</h2>
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
    );
};
export default HomeContactSection;