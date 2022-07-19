import React from "react";
import { Link } from 'react-router-dom';
import FooterAccordionData from "./FooterAccordionData";
// import { FooterAccordion } from "./FooterAccordion";
import rpivacylogo from '../images/policy.png';
import AwardRate from '../images/project_rating.png';
import Footermap from '../images/map-pattern.png';
import { useState } from "react";
function Footer() {
    const [active, setSelected] = useState(null);
    const toggle = (ind) => {
    if (active === ind) {
    return setSelected(null);
    }
    setSelected(ind);
    };
    return ( 
        <footer className="footer">
            <div className="footer-content" style={{ backgroundImage: `url(${Footermap})` }}>
            <div className="footer-accordion">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-8 col-lg-9 white-bg-sst">
                        <div className="align_right">
                            <h2 className="footform-head"><span className="light">Frequently Asked Questions</span> </h2>
                            <div className="content">
                                <ul className="qwertycode-list">
                                {
                                    FooterAccordionData.map((val, ind) => (
                                    <li className="qwertycode-list-item" key={ind}> 
                                        <span className={'head'} onClick={() => toggle(ind)}>{val.AccordionTitle}<i className={active === ind ? 'fa fa-minus' : 'fa fa-plus'}></i></span>
                                        <div className={active === ind ? 'qwertycode-content active' : 'qwertycode-content' }>
                                        <p>{val.AccordionContent}</p>
                                        </div>
                                    </li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 form-sideright ">
                        <div className="cm-style-rt">
                            <div className="form-rating" style={{ backgroundImage: `url(${AwardRate})` }}><span className="rate">4.9 / 5.0 </span> </div>
                            <p>By 1000+ customer for <b>Website Designing &amp; Mobile App Development </b> Projects.</p>
                            <Link to=""><i className="fa fa-skype"></i>
                                <p>live:qwertycode</p>
                            </Link>
                            <Link to=""> <i className="fa fa-envelope"></i>
                                <p>info@qwertycode.in</p>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="quick_links">
                                <h5 className="footer-title">QUICK LINKS</h5>
                                <ul>
                                    <li><Link to="/">Mobile App Development Company</Link></li>
                                    <li><Link to="/">Web Development Company</Link></li>
                                    <li><Link to="/">SEO Services Company</Link></li>
                                    <li><Link to="/">Website Designing Company</Link></li>
                                    <li><Link to="/">Mobile App Development</Link></li>
                                    <li><Link to="/">PPC Service Company</Link></li>
                                    <li><Link to="/">Website Development Company</Link></li>
                                    <li><Link to="/">Digital Marketing Company</Link></li>
                                    <li><Link to="/">Content Writing Services</Link></li>
                                    <li><Link to="/">Ecommerce Website Development</Link></li>
                                    <li><Link to="/">Website Designing Company in Delhi</Link></li>
                                    <li><Link to="/">Ecommerce Mobile App Development</Link></li>
                                    <li><Link to="/">Digital Marketing Services</Link></li>
                                    <li><Link to="/">SEO Services</Link></li>
                                    <li><Link to="/">Grocery App Development</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-imp">
                            <p><span>Hire Best Web Designing Company &amp; #1 Mobile Application Development from India</span> Recommended Best in USA, UK, Australia, UK, UAE, EUROPE, Poland, Nepal &amp; Globally</p>
                            </div>
                            <div className="footer-quotebtn"><Link to="/" className="mainquotebtn cm-btn"><span>REQUEST QUOTE</span></Link>
                                <ul className="footer_social">
                                    <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-pinterest-p"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ratingpart text-center">
                                <p className="rate"><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span> 4.9 / 5.0 by 1000+ customers all across globe and help us to become Best in Industry. Call us Now for Personal consultation on <Link to="tel:+91 12043 23577">+91 12043 23577</Link></p>
                                <p> Qwerty Code (P) Ltd is one of the fastest growing and trusted by Government, Private Sectors, Banking sectors, NGO and global Customer's as well.</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>   
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-4 col-xl-5">
                            <div className="copyright">Copyright 2019 © Qwerty Code Pvt. Ltd.</div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="quicklinks">
                                <ul>
                                    <li><Link to="/">Terms Conditions</Link></li>
                                    <li><Link to="/">Refund Policy</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-2 col-xl-3">
                            <div className="footer-policy text-right">
                               <img src={rpivacylogo} alt="policy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </footer>
    )
}
export default Footer;
