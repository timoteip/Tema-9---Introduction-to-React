import React from "react";
import Tasklists from "./Tasklists";

export default class Projects extends React.Component {
  render() {
    let keys = Object.keys(this.props.projects);
    const projectsList = keys.map((key) => {
      return (
        <ul key={this.props.projects[key].id}>
          <li>
            {this.props.projects[key].name}
            <Tasklists tasklists={this.props.projects[key].tasklists} />
          </li>
        </ul>
      );
    });
    return <div>{projectsList}</div>;
  }
}
