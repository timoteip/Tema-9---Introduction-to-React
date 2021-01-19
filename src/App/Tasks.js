import React from "react";

export default class Tasks extends React.Component {
  render() {
    let keys = Object.keys(this.props.tasks);
    const tasks = keys.map((key) => {
      return (
        <ul key={this.props.tasks[key].id}>
          <li>{this.props.tasks[key].name}</li>
        </ul>
      );
    });

    return <div>{tasks}</div>;
  }
}
