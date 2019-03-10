import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id)
  }
  render() {
  let projectItems ;
  console.log(this.props.projects);
  if (this.props.projects) {
    projectItems = this.props.projects.map(project => {
      return(
        <ProjectItem project = {project} 
        key={project.id}
        onDelete = {this.deleteProject.bind(this)}/>
      )
    })
  };
    return (
      <div className="Projects">
        {this.props.test}
        <ul>{projectItems}</ul>
      </div>
    );
  }
}

export default Projects;
