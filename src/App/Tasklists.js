import React from "react";
import Tasks from "./Tasks";

export default class Tasklists extends React.Component {
  render() {
    let keys = Object.keys(this.props.tasklists);
    const tasklists = keys.map((key) => {
      return (
        <ul key={this.props.tasklists[key].id}>
          <li>
            {this.props.tasklists[key].name}
            <Tasks tasks={this.props.tasklists[key].tasks} />
          </li>
        </ul>
      );
    });
    return <div>{tasklists}</div>;
  }
}
