import React, { Component } from "react";
import styled from "styled-components";
import {
    ListItem,
    ListItemTitle,
    ListItemSubTitle,
    Paragraph,
} from "../../styles.js";
import { PageElem } from "../pagesStyles.js";

const EducationItem = styled.div`
    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
    }
`;

class Education extends Component {
    render() {
        const user = this.props.user;
        return (
            <PageElem className="page">
                <div className="section-title">Education</div>
                <ul>
                    {user.education.map((education, i) => (
                        <ListItem key={i}>
                            <ListItemTitle>
                                {education.institution}
                            </ListItemTitle>
                            <EducationItem>
                                <ListItemSubTitle>
                                    <span>
                                        {education.studyType}, {education.area}
                                    </span>
                                    <span className="item-separator">
                                        &nbsp;&sdot;&nbsp;
                                    </span>
                                    <span>
                                        {education.start.year} to{" "}
                                        {education.end.year}
                                    </span>
                                </ListItemSubTitle>
                            </EducationItem>
                            <Paragraph>
                                {education.description.replace("\n\n", "\n")}
                            </Paragraph>
                        </ListItem>
                    ))}
                </ul>
            </PageElem>
        );
    }
}

export default Education;
