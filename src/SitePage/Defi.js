import React from "react";
import Banner from "../custom_component/Banner";
import { ContentWithImage } from "../custom_component/ContentWithImage";

function Defi() {
    return(
        <div className="defiPage">
            <Banner title="DEFI" visit="/" btnName="Home" PageName="DEFI" imgsrc="/DataImage/contactBanner.jpg" />
            <div className="about-contentTp services-section afterStyle pt-100 pb-215" title="QwertyCode">
                <div className="container">
                    <ContentWithImage 
                    iconStyle={false}
                    showBtn={false} 
                    title={<><h2>DeFi</h2></>} 
                    content={<>
                    <p>It is decentralized finance. Centralized finance is where the money is held by banks and other corporates for their profit. An emerging financial tech by based on secure distributed ledgers similar to cryptocurrencies. There is no intermediary in this technology.</p>
                    <h4>Advantages:</h4>
                    <ul>
                        <li>The financial charges is eliminated of banks and other financial companies for their services.</li>
                        <li>The money is kept not in a bank but in highly secured digital wallet.</li>
                        <li>It is limitless of which person or at what distance the person is , all you need to operate is internet.</li>
                        <li>Fast transfer within seconds.</li>
                    </ul>
                        </>} btnText="Read More" btnLink="/" alt="About Qwerty Code" imgsrc="/DataImage/The_DeFi_Stack_Figure.jpg"  />
                </div>
            </div>
        </div>
    )
}

export default Defi;

