import * as React from "react";
import { Languages } from "./Languages";

interface IProjectBarProps{
    projectName:string;
}

export class ProjectBar extends React.PureComponent<IProjectBarProps>
{
    public render(){
        return (
            <div className="project-bar">
    <span>Project - {this.props.projectName}</span>
           <Languages></Languages>
           
            </div>
        )
    }
}