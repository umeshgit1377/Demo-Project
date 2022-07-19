// import React from "react";
// import { useState } from "react";

// export const FooterAccordion = (props) => {
// const [active, setSelected] = useState(false);
//     return (
//         <li className="qwertycode-list-item" key={props.ind}> 
//             <span className={'head'} onClick={() => setSelected(!active) }>{props.AccordionTitle}<i className={active ? 'fa fa-minus' : 'fa fa-plus'}></i></span>
//            <div className={active ? 'qwertycode-content active' : 'qwertycode-content' } >
//                 <p>{props.AccordionContent}</p>
//             </div>
//         </li>
//     )
// }

// export const FooterAccordion = (props) => {
// const [active, setSelected] = useState(null);
// const toggle = (index) => {
// if (active === index) {
// return setSelected(null);
// }
// setSelected(index);
// };
// return (
//     <li className="qwertycode-list-item"> 
//         <span className={'head'} onClick={() => toggle(index)}>{props.AccordionTitle}<i className={active === index ? 'fa fa-minus' : 'fa fa-plus'}></i></span>
//         {active === index ? (
//         <div className={active === index ? 'qwertycode-content active' : 'qwertycode-content' } >
//             <p>{props.AccordionContent}</p>
//         </div>
//         ): null}
//     </li>
// )
// }

