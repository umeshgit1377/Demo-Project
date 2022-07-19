import React from "react";
import Banner from "../custom_component/Banner";
import { ContentWithImage } from "../custom_component/ContentWithImage";
import { TableFormate } from "../custom_component/TableFormate";
import { TitleWithContent } from "../custom_component/TitleWithContent";
import WeCoveredData from "../custom_component/WeCoveredData";
import { WeCovered } from "../custom_component/WeCovered";
function SocialMediaMarketing() {
    return (
        <div className="seopage pb-115">
            <Banner title="Social Media Marketing" visit="/" btnName="Home" PageName="SMM" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="about-contentTp services-section afterStyle pt-60 pb-60" title="SEO">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>Social Media <span>Marketing</span></h2></>} content={<><p>The term social media marketing (SMM) refers to the use of social media and social networks to market a company's products and services. Social media marketing provides companies with a way to engage with existing customers and reach new ones while allowing them to promote their desired culture, mission, or tone.</p><p>Social Marketing Amplifiers Your customers do not differentiate between channels and platforms. For them, it is one seamless journey from your Facebook ad to your website or landing page. We use multiple complementary services from our departments to amplify the results of your social media marketing. From creating compelling graphic design to producing videos that go viral, and from telling irresistible brand stories to running synchronized multi-channel campaigns, Technians have you covered!</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/social-media-platform.gif"  />
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
            <div className="about-contentTp content-right services-section pt-50 pb-60">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>How does <span>SMM work?</span></h2></>} content={<><p>Qwerty code provide end to end digital marketing services with zero intervention from clients or any other third party. We are empowering brands with digital marketing. We enable brands to stand out from the crowd with a strong online presence, highly engaging content and effective marketing campaigns. Clients are just expected to tell us their requirements, the rest of the things are managed by Qwerty Code. From basic or building blocks to advanced levels of digital marketing tasks are managed by a team of experts here at Qwerty code – Best Digital Marketing in India.</p><p>Brands just have to focus on the commercial side of their business only. The things related to digital marketing will be handled by a team of experts here at Qwerty Code. A variety of services are offered, from website design & development, SEO, Online Brand Reputation Management, Social media marketing, Paid to advertise, etc. Qwerty Code provide a guarantee for results for all digital marketing services in India. No matter if you are looking for organic traffic, sales, social media marketing or just online brand reputation.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/s3-tree.gif"  />
                </div>
            </div> 

            <div className="services-section pt-40 pb-50">
                <div className="container">
                   <TitleWithContent title={<><h2>Know Our <span>SMO Services Plans</span></h2></>} content={<><p>We provide customized and generalized software solutions for businesses and organizations operating in diverse domains.</p></>} />
                </div>
            </div>

            <div className="tableDesign pb-100">
                <div className="container text-center firstColHeader">
                    <TableFormate />
                </div>
            </div>
        </div>
    )
}

export default SocialMediaMarketing;


