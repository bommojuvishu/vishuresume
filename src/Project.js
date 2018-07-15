import React, {Component} from 'react';

class Project extends Component {
	render() {
		return (
			<div className="item">
         <span className="project-tagline">{this.props.item.detail}</span>
      </div>
		);
	}
}

export default Project;
