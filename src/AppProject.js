import React, { Component } from 'react';
import Projects from './Components/Project/Project';
import Todos from './Components/Project/Todos';
import AddProject from './Components/Project/AddProject';
import './Components/css/AppProject.css';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      todos :[]
    }
  }

  getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>  res.json())
    .then(data => this.setState({todos : data}));

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
      <Todos todos={this.state.todos}/>
      </div>
    );
  }
}


export default App;