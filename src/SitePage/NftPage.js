import React from "react";
import Banner from '../custom_component/Banner';
import { TitleWithContent } from "../custom_component/TitleWithContent";
import { ContentWithImage } from "../custom_component/ContentWithImage";
import NftData from "../custom_component/NftData";
import { OurServices } from "../custom_component/OurServices";
function Nft() {
    return (
        <div className="nftPage">
            <Banner title="NFT" visit="/" btnName="Home" PageName="NFT" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="about-contentTp services-section afterStyle pt-100 pb-60" title="QwertyCode">
                <div className="container">
                        <ContentWithImage iconStyle={false}  showBtn={false} title={<><h2>NFT : <span>NON-FUNGIBLE TOKENS</span></h2></>} content={<><p>Fungible items are the ones which can be replaced. For example 1$ bill of John  will be equal to 1$bill of Joy ,both of these will be equal to 1$ bill of circulation . Thus these will be mutually interchangeable. Non-fungible items have no replacement. A Mona Lisa painting , statue of liberty will have no replacement. They are one of it’s kind. When it comes to crypto you can take the example that 1 Ethereum token will fungible because someone else will be holding it too. Through blockchains NFT can be created. NFT when used in digitalising it is termed as non-fungible token. There is a record that represents ownership of each NFT. Here the images  won’t be on the blockchain but on IPFS. This too is decentralized and has one of the most popular storage solution.</p></>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/nft-no-bg.png"  />
                </div>
            </div>  
            <div className="services-section1 pt-70 pb-115">
                <div className="container">
                    <TitleWithContent title={<><h2>Here are Some of The Benefits of <span>NFT</span></h2></>} content={<><p></p></>} />
                    <div className="lower-section pt-60 pb-60">
                        <div className="row">
                            {
                                NftData.map((val, ind) => {
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
        </div>
    )
}

export default Nft;