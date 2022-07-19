import React from "react";
import Banner from "../custom_component/Banner";
import { ContentWithImage } from "../custom_component/ContentWithImage";
import { TitleWithContent } from "../custom_component/TitleWithContent";
import { TableFormate } from "../custom_component/TableFormate";
function SeoPage() {
    return (
        <div className="seopage pb-115">
            <Banner title="Search Engine Optimization" visit="/" btnName="Home" PageName="SEO" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="about-contentTp services-section afterStyle pt-60 pb-60" title="SEO">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>Search Engine <span>Optimization</span></h2></>} content={<><p>SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.</p><p>Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Think of the index like a giant library where a librarian can pull up a book (or a web page) to help you find exactly what you’re looking for at the time. The Periodic Table of SE O Factors serves as the foundation of this Guide to SEO. Together, these resources will help you learn about SEO and inform your strategy for success.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/dm.gif"  />
                </div>
            </div> 
            <div className="about-contentTp onlyTitle pt-20">
                <div className="container">
                    <TitleWithContent title={<><h2>Best SEO Services <span>With Qwerty Code</span></h2></>} content={<><p>As a companion to our Periodic Table of SEO Factors, Search Engine Land’s Guide To SEO walks you through the fundamentals of optimizing for search so you can develop a solid strategy to drive organic traffic to your site.</p></>} />
                </div>
            </div>
            <div className="content-right services-section pt-30 pb-60">
                <div className="container">
                     <ContentWithImage iconStyle={false} showBtn={false} title={<><h2>How does <span>SEO work?</span></h2></>} content={<><p>Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Think of the index like a giant library where a librarian can pull up a book (or a web page) to help you find exactly what you’re looking for at the time.</p><p>Next, algorithms analyze pages in the index, taking into account hundreds of ranking factors or signals, to determine the order pages should appear in the search results for a given query. In our library analogy, the librarian has read every single book in the library and can tell you exactly which one will have the answers to your questions.</p><p>Our SEO success factors can be considered proxies for aspects of the user experience. It’s how search bots estimate exactly how well a website or web page can give the searcher what they’re searching for.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/seo11.png"  />
                </div>
            </div> 
            <div className="services-section pt-10 pb-50">
                <div className="container">
                   <TitleWithContent title={<><h2>Know Our <span>SEO Services Plans</span></h2></>} content={<><p>We provide customized and generalized software solutions for businesses and organizations operating in diverse domains.</p></>} />
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

export default SeoPage;