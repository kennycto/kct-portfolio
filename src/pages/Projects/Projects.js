import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from 'antd';
import { ListItem, ListItemTitle } from '../../styles.js';

export const SkillContainer = styled.div`
	margin-top: 1.2rem;
`

class Projects extends Component {
	render() {
		const user = this.props.user;
		return (
			<div className="page">
				<div className="section-title">Projects</div>
				<ul>
					{user.projects.map((project, i) => (
						<ListItem key={i}>
							<ListItemTitle>{project.name}</ListItemTitle>
							<p>{project.summary}</p>
							<SkillContainer>
								{[...project.languages, ...project.libraries].map((item, j) => (
									<Button className="pill" type="primary" key={j}>{item}</Button>	
								))}
							</SkillContainer>
						</ListItem>
					))}
				</ul>
			</div>
		)
	}
}

export default Projects;