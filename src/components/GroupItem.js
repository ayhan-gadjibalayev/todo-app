import React from "react";

export default function MobalProject(props) {

    const { people, projectname  } = props

  return (
    <div className="mobal-people">
      <span className="mobal">
        <b>{projectname} проект</b>
      </span>
      <span className="people">{people} человека</span>
    </div>
  );
}
