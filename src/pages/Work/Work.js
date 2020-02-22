import React, { Component } from "react";
import {
	ListItem,
	ListItemTitle,
	ListItemSubTitle,
	Paragraph
} from "../../styles.js";
import { PageElem } from "../pagesStyles.js";

class Work extends Component {
	render() {
		const user = this.props.user;
		return (
			<PageElem className="page">
				<div className="section-title">Work</div>
				<ul>
					{user.work.map((work, i) => (
						<ListItem key={i}>
							<ListItemTitle>{work.position}</ListItemTitle>
							<div>
								<ListItemSubTitle>
									{work.company}
								</ListItemSubTitle>{" "}
								<span>{work.location}</span>
								<span> &sdot; </span>
								<span>
									{work.start.year} to{" "}
									{work.end.year || "Present"}
								</span>
							</div>
							<Paragraph>{work.summary}</Paragraph>
						</ListItem>
					))}
				</ul>
			</PageElem>
		);
	}
}

export default Work;
