import React, {useState} from "react";
import { Link } from 'react-router-dom';
import IndiaFlag from '../images/india.png';
import SiteLogo from '../images/logo.png';
function Header() {
    const [open, closeMenu] = useState(false);
    return(
        <div className="header">
            <div className="preeheader">
            <div className="container">
            <div className="preeheader-in">  
            <div className="topheaderlft"><Link to="/"><i className="fa fa-envelope"></i> info@qwertycode.in</Link></div>
            <div className="topRight">
                <Link to="tel:+911204323577" className="signin mr-4"><i className="fa fa fa-phone"></i>+91 12043 23577</Link>
                <Link to="Default.aspx" className="signin country-sign"><img src={IndiaFlag} alt="flag" />INDIA</Link>
            </div>
            </div>
            </div>    
            </div>
            <div className="main-header-menu">
                <div className="container">
                    <div className="header-main-inner">
                        <div className="header-logo">
                        <Link to="/"><img src={SiteLogo} alt="logo" /></Link>
                        </div>
                        <div className="menu-trigger">
                           <span className={open ? 'trigger open' : 'trigger'} onClick={() => closeMenu(!open)}>
                               <span></span>
                               <span></span>
                               <span></span>
                           </span>
                        </div>
                        <div className={open ? 'header-content open' : 'header-content' }>
                            <ul className="App-header">
                                <li className="menu-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li className="menu-item hasMegaMenu">
                                    <Link to="" className="childTrigger">Services</Link>
                                    <ul className="MegaMenuWrapper CmjsMenu">
                                        <li className="menu-item">
                                            <Link to="" className="childTrigger">Digital Marketing</Link>
                                            <ul className="subMenuWrapper">
                                                <li className="menu-item">
                                                <Link to="/seopage">Search Engine Optimization (SEO)</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/SocialMediaMarketing">Social Media Marketing (SMM)</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/GoogleAds">Google Ads</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/WebApplicationDevelopement">Web Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/MobileApplicationDevelopment">Mobile Application Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Web Design</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Graphic Design</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">E-Commerce</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Content Marketing</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="" className="childTrigger">Blockchain</Link>
                                            <ul className="subMenuWrapper">
                                                <li className="menu-item">
                                                <Link to="/">Use Cases</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Enterprise Blockchain</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Smart Contract</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">P2P Lending Software Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Binance Smart Chain Development Services</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Polkadot Blockchain Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Solana Blockchain Development</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="" className="childTrigger">Crypto Exchange</Link>
                                            <ul className="subMenuWrapper">
                                                <li className="menu-item">
                                                <Link to="/">White Label Exchange</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Hybrid Cryptocurrency Exchange Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Margin Trading Exchange</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Derivatives Exchange Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">P2P Exchange Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Security Exchange Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Decentralized Exchange Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Market Making Services</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="" className="childTrigger">Coin Development</Link>
                                            <ul className="subMenuWrapper">
                                                <li className="menu-item">
                                                <Link to="/">Coin/Token Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">IDO Services Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">White Paper Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Security Token Development</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Security Token Marketing</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Asset Tokenization</Link>
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/">Crypto Asset Management</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item hasMenu">
                                    <Link to="/" className="childTrigger">ERP</Link>
                                    <ul className="subMenuWrapper CmjsMenu">
                                        <li className="menu-item">
                                           <Link to="/">ERP Solution</Link>
                                        </li>
                                        <li className="menu-item">
                                           <Link to="/">Educational Institute Management ERP</Link>
                                        </li>
                                        <li className="menu-item">
                                           <Link to="/">Hospital Management ERP</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link to="/defi" className="childTrigger">DEFI</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/nft">NFT</Link>
                                    {/* <ul className="subMenuWrapper CmjsMenu">
                                        <li className="menu-item">
                                           <Link to="/">NFT Tokens</Link>
                                        </li>
                                        <li className="menu-item">
                                           <Link to="/">Semi Smart Contract</Link>
                                        </li>
                                        <li className="menu-item">
                                           <Link to="/">NFT Development</Link>
                                        </li>
                                        <li className="menu-item">
                                           <Link to="/">NFT Marketplace Development</Link>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="menu-item">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Header;
