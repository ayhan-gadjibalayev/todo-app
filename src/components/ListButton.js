import React from "react";

export default function ListButton (props) {

    const { text, letter } = props

    return (
        <button className="list-bottom">
        <span className="list-bottom-text">{text}</span>
        <div style={{ display: "flex" }}>
          <span className="letter-l">⌘</span>
          <span className="letter-l">{letter}</span>
        </div>
      </button>
    )
}