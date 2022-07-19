import React from "react";
import OurServicesData from "../custom_component/OurServicesData";
import { OurServices } from "../custom_component/OurServices";
import { TitleWithContent } from "../custom_component/TitleWithContent";
import { ContentWithImage } from "../custom_component/ContentWithImage";
import OurTechExpertiesData from "../custom_component/OurTechExpertiseData";
import HomeSliderData from "../custom_component/HomeSliderData";
import { OurTechExperties, OurTechTitle, HomeSlider } from "../custom_component/OurTechExpertise";
// import HomeBlogData from "../custom_component/HomeBlogData";
import { HomeBlog, HomeBlogTitle } from "../custom_component/HomeBlog";
import HomeContactSection from "../custom_component/HomeContactSection"
import { BlockChainSolution, BlockChainSolutionTitle } from "../custom_component/BlockChainSolution";
import BlockChainSolutionData from "../custom_component/BlockChainSolutionData";
import BlogData from "../custom_component/BlogData";
function Home() {
    return (
        <div className="home">
           <div className="bannerSlider">
              <HomeSlider HomeSliderData={HomeSliderData} />
            </div>

            <div className="services-section afterStyle pt-100 pb-60" title="QwertyCode">
                <div className="container">
                    <ContentWithImage iconStyle={true} showBtn={true} title={<><h2>Know More About<span>Qwerty Code</span></h2></>} content={<><p>We are an IT and software company located at Gurugram , Haryana(India). Analysing, designing , development and implementation of wide range of software products are something we are best and quick to deal with ! Whether you need a help on research and development or e-world , our technical expertise encompass them with great efficiency. The e-revolution turned to be one of the leading revolution which is one of our major business initiation. The recent services are excelling even in Digital Marketing, crypto- currency, NFT, Blockchain and crypto wallet too.</p></>} btnText="Read More" btnLink="/about" alt="About Qwerty Code" imgsrc="/DataImage/skill.png"  />
                </div>
            </div>

            <div className="services-section1 pt-70 pb-70">
                <div className="container">
                    <TitleWithContent title={<><h2>Our <span>Services</span></h2></>} content={<><p>We provide customized and generalized software solutions for businesses and organizations operating in diverse domains.</p></>} />
                    <div className="lower-section pt-60">
                        <div className="row">
                            {
                                OurServicesData.map((val, ind) => {
                                    return <OurServices 
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    EmpName={val.EmpName}
                                    EmpContent={val.EmpContent}
                                    EmpLink={val.EmpLink}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="cm-services-section pt-80 pb-80">
	            <div className="container">
                   <div className="row">
                      <BlockChainSolutionTitle title="Donec ut tortor varius" content="About banner HTML blandit lectus vitae convallis. Ut ipsum enim, consectetur at lobortis at, sagittis vel nisl. Nam non maximus elit" />
                       {
                           BlockChainSolutionData.map((val, ind) => {
                               return <BlockChainSolution
                               key={ind}
                               Title={val.Title}
                               Content={val.Content}
                               />
                           })
                       }
                   </div>
                </div>
            </div>

            <div className="qwerty-section pt-100 pb-70">
                <div className="container">
                    <OurTechTitle title="Our Tech Expertise" content="We harness the potential of varied Blockchain platforms to deliver innovative enterprise grade blockchain solutions that make a difference." />
                    <div className="row justify-content-center clearfix">
                        <div className="qwerty-block">
                             <OurTechExperties OurTechExpertiesData={OurTechExpertiesData} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="news-section pt-100 pb-70">
                <div className="container">
                <HomeBlogTitle />
                    <div className="row">
                    {
                            BlogData.slice(0, 4).map((val, ind) => {
                                return <HomeBlog
                                key={ind}
                                imgsrc={val.PostImage}
                                EmpName={val.PostTitle}
                                EmpAuthor={val.PostAuthor}
                                EmpDate={val.PostDate}
                                />
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <HomeContactSection />
            </div>
        </div>
    )
}
export default Home;