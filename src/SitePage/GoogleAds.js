import React from "react";
import Banner from "../custom_component/Banner";
import { ContentWithImage } from "../custom_component/ContentWithImage";
import WeCoveredData from "../custom_component/WeCoveredData";
import { WeCovered } from "../custom_component/WeCovered";
import { TitleWithContent } from "../custom_component/TitleWithContent";
function GoogleAds() {
    return (
        <div className="seopage pb-115">
            <Banner title="Google Ads" visit="/" btnName="Home" PageName="Google Ads" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="about-contentTp services-section afterStyle pt-60 pb-60" title="Ads">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>Google <span>Ads</span></h2></>} content={<><p>Google is where people search for what to do, where to go, and what to buy. Your digital ads can appear on Google at the very moment someone is looking for products or services like yours. <br/> Whether they’re on desktop or mobile, a well-timed ad can turn people into valuable customers.</p><p>Google ads give you control over your advertising budget. Set a monthly budget cap, and never go over it. Plus, you can pause or adjust your spend anytime.<br/>With Google Ads you can reach more relevant customers within your budget. Plus, our smart technology will help you improve your ads over time to get more of the results that matter to your business.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/addword.jpg"  />
                </div>
            </div> 
            <div className="services-sectionTp pt-40 pb-50">
                <div className="container">
                    <div className="pb-50">
                        <TitleWithContent title={<><h2>We’ve got <span>you covered</span></h2></>} content={<><p>No matter the size or industry you are, we serve a wide range of entities with our performance advertising solutions</p></>} />
                    </div>
                    <div className="cardwrap">
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
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>How does <span>SMM work?</span></h2></>} content={<><p>Qwerty code provide end to end digital marketing services with zero intervention from clients or any other third party. We are empowering brands with digital marketing. We enable brands to stand out from the crowd with a strong online presence, highly engaging content and effective marketing campaigns. Clients are just expected to tell us their requirements, the rest of the things are managed by Qwerty Code. From basic or building blocks to advanced levels of digital marketing tasks are managed by a team of experts here at Qwerty code – Best Digital Marketing in India.</p><p>Brands just have to focus on the commercial side of their business only. The things related to digital marketing will be handled by a team of experts here at Qwerty Code. A variety of services are offered, from website design & development, SEO, Online Brand Reputation Management, Social media marketing, Paid to advertise, etc. Qwerty Code provide a guarantee for results for all digital marketing services in India. No matter if you are looking for organic traffic, sales, social media marketing or just online brand reputation.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/graphicdesigningfeature.gif"  />
                </div>
            </div> 
        </div>
    )
}

export default GoogleAds;