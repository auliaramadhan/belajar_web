import React, { Component } from 'react';
import Projects from './Components/Project';
import AddProject from './Components/AddProject';
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ todos: data }, function () {
          console.log(this.state);
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Deisgn'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project)
    this.setState({
      projects: projects
    })
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({ projects: projects })
  }

  render() {
    console.log(this.state.projects);
    return (
      <div className="App">
        my name
      <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects test="Hello world"
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
