import React from "react";
import Projects from "./Projects";
import Taskls from "./Tasks";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    const projectsResponse = fetch("https://app.paymoapp.com/api/projects", {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    });

    const tasklistsResponse = fetch("https://app.paymoapp.com/api/tasklists", {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    });

    const tasksResponse = fetch("https://app.paymoapp.com/api/tasks", {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    });

    Promise.all([projectsResponse, tasklistsResponse, tasksResponse])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        let projects = this.createProjects(
          data[0].projects,
          data[1].tasklists,
          data[2].tasks
        );
        this.setState({ projects });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createProjects(projects, tasklists, tasks) {
    let elements = {};
    projects.forEach((el) => {
      el.tasklists = {};
      elements[el.id] = el;
    });

    tasklists.forEach((el) => {
      el.tasks = {};
      elements[el.project_id].tasklists[el.id] = el;
    });
    tasks.forEach((el) => {
      elements[el.project_id].tasklists[el.tasklist_id].tasks[el.id] = el;
    });
    return elements;
  }

  render() {
    return (
      <div>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}
export default App;
