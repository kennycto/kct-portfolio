import React, { Component } from 'react';
import { ListItem, ListItemTitle, ListItemSubTitle, Paragraph } from '../../styles.js'

class Education extends Component {
	render() {
		const user = this.props.user;
		return (
			<div className="page">
				<div className="section-title">Education</div>
				<ul>
					{user.education.map((education, i) => (
						<ListItem key={i}>
							<ListItemTitle>{education.position}</ListItemTitle>
							<div>
								<ListItemSubTitle>
									{education.studyType}, {education.area}
								</ListItemSubTitle>
								<span>&nbsp;&sdot;&nbsp;</span> 
								<span>
									{education.start.year} to {education.end.year}
								</span>
							</div>
							<Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
						</ListItem>
					))}
				</ul>
			</div>
		)
	}
}

export default Education;