import React, { Component } from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import { ListItem, ListItemTitle } from "../../styles.js";
import { PageElem } from "../pagesStyles.js";

export const SkillContainer = styled.div`
    margin-top: 1.2rem;
`;

class Projects extends Component {
    render() {
        const user = this.props.user;
        return (
            <PageElem className="page">
                <div className="section-title">Projects</div>
                <ul>
                    {user.projects.map((project, i) => (
                        <ListItem key={i}>
                            <ListItemTitle>{project.name}</ListItemTitle>
                            <div>{project.summary}</div>
                            <div>
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.website}
                                </a>
                            </div>
                            <SkillContainer>
                                {[
                                    ...project.languages,
                                    ...project.libraries,
                                ].map((item, j) => (
                                    <Chip
                                        className="pill"
                                        color="secondary"
                                        key={j}
                                        label={item}
                                    />
                                ))}
                            </SkillContainer>
                        </ListItem>
                    ))}
                </ul>
            </PageElem>
        );
    }
}

export default Projects;
