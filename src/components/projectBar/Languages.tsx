import * as React from "react";

export class Languages extends React.PureComponent
{
    public render(){
        return (
           <ul className="project-bar__languages">
               <li   className="project-bar__language">
<img style={{width: '25px', height: '20px'}} src="assets/images/pl.svg" />
               </li>
               <li className="project-bar__language">
                   <img style={{width: '25px', height: '20px'}}  src="assets/images/en.svg"></img>
               </li>
           </ul>
        )
    }
}


