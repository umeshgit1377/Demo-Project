import React from "react";
import Banner from "../custom_component/Banner";
import { ContentWithImage } from "../custom_component/ContentWithImage";
function About() {
    return (
        <div className="about pb-115">
              <Banner title="Quickest Code Offering It Platform" visit="/" btnName="Home" PageName="About Us" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="about-contentTp services-section afterStyle pt-100 pb-60" title="QwertyCode">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>Know More About <span>Qwerty Code</span></h2></>} content={<><p>We are an IT and software company located at Gurugram , Haryana(India). Analysing, designing , development and implementation of wide range of software products are something we are best and quick to deal with ! Whether you need a help on research and development or e-world , our technical expertise encompass them with great efficiency. The e-revolution turned to be one of the leading revolution which is one of our major business initiation. The recent services are excelling even in Digital Marketing, crypto- currency, NFT, Blockchain and crypto wallet too.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/about.png"  />
                </div>
            </div>  
            <div className="about-contentBT content-right services-section pt-100 pb-60">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>A View Into Our <span>Expedition</span></h2></>} content={<><p>A company without its client is like a mobile without internet! The paramountancy of highest quality service in Client Relation is extreme for Qwerty code. Communication, transparency , human relations , guidance is rachis of corporate culture. We understand the needs and expectations of client and try our best to fulfil it.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/mission.png"  />
                </div>
            </div>  
            <div className="about-contentTp services-section pt-100 pb-60">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>Us<span>!</span></h2></>} content={<><p>Our board members are the backbone of our approach and initiation towards high end IT products fulfilling the demands of clients. Mr. Sachin is our founder who has also been ALM, SBL Hyderabad has been a great source of inspiration to us. Mrs. Jyotika, CEO and Mr. Vijay Kumar , CTO and Group of CEO are straining their every nerve to reach the pedestal of success.</p><p>We are a team of highly professionals. Proudly a team of dedication, smart work, advance coding skills. The projects undertake turn into a high end IT brand of its own. Client and its demand are fulfilled to the best completion. Its not just a mere certified company but a relation and brand building company!</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/team.gif"  />
                </div>
            </div>  
        </div>
    )
}
export default About;