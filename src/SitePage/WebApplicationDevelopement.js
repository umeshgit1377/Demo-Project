import React from "react";
import Banner from "../custom_component/Banner";
import { ContentWithImage } from "../custom_component/ContentWithImage";
import { TitleWithContent } from "../custom_component/TitleWithContent";
import { WeCovered } from "../custom_component/WeCovered";
import WeCoveredData from "../custom_component/WeCoveredData";

function WebApplicationDevelopement() {
    return (
        <div className="webapplicationdevelop pb-115">
            <Banner title="Web Application Development" visit="/" btnName="Home" PageName="Web Development" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="about-contentTp services-section afterStyle pt-60 pb-60" title="Development">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2><span>Web </span> Development</h2></>} content={<><p>The term social media marketing (SMM) refers to the use of social media and social networks to market a company's products and services. Social media marketing provides companies with a way to engage with existing customers and reach new ones while allowing them to promote their desired culture, mission, or tone.</p><p>Social Marketing Amplifiers Your customers do not differentiate between channels and platforms. For them, it is one seamless journey from your Facebook ad to your website or landing page. We use multiple complementary services from our departments to amplify the results of your social media marketing. From creating compelling graphic design to producing videos that go viral, and from telling irresistible brand stories to running synchronized multi-channel campaigns, Technians have you covered!</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/front-end-development.gif"  />
                </div>
            </div> 
            <div className="services-sectionTp pt-40 pb-50">
                <div className="container">
                <div className="pb-50">
                    <TitleWithContent title={<><h2>We’ve got <span>you covered</span></h2></>} content={<><p>No matter the size or industry you are, we serve a wide range of entities with our performance advertising solutions</p></>} />
                </div>
                 <div className="cardwrap pt-60">
                    {
                        WeCoveredData.map((val, ind) => {
                            return <WeCovered 
                            key={ind}
                            imgsrc={val.imgsrc}
                            EmpName={val.EmpName}
                            EmpContent={val.EmpContent}
                            />
                        })
                    }
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default WebApplicationDevelopement;




